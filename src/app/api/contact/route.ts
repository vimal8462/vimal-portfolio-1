import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactEmailTemplate } from "@/lib/email/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return NextResponse.json(
        { message: "Submitted content exceeds the allowed length." },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      //from: "Portfolio Contact <onboarding@resend.dev>",
      from: process.env.FROM_EMAIL!,
      //from: "Vimal Kumar <info@itdivine.com>",
      to: [process.env.TO_EMAIL!, email],

      // Replying to the email will reply directly to the visitor.
      replyTo: email,
      subject: `Portfolio Enquiry`,

      html: contactEmailTemplate({
        name,
        email,
        message,
      }),

      text: `
New Portfolio Enquiry

Name: ${name}
Email: ${email}

Message:
${message}
  `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "Unable to send your message." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Something went wrong while sending your message." },
      { status: 500 },
    );
  }
}
