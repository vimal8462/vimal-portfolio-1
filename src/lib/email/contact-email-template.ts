type ContactEmailTemplateProps = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function contactEmailTemplate({
  name,
  email,
  message,
}: ContactEmailTemplateProps): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio Contact Enquiry</title>
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background-color: #020617;
    font-family: Arial, Helvetica, sans-serif;
    color: #cbd5e1;
  "
>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="background-color: #020617;"
  >
    <tr>
      <td align="center" style="padding: 40px 16px;">

        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            max-width: 640px;
            background-color: #0f172a;
            border: 1px solid #1e293b;
            border-radius: 16px;
          "
        >

          <!-- Header -->
          <tr>
            <td
              style="
                padding: 32px 36px;
                border-bottom: 1px solid #1e293b;
              "
            >
              <div
                style="
                  margin-bottom: 10px;
                  color: #38bdf8;
                  font-size: 12px;
                  font-weight: 700;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                Portfolio Contact
              </div>

              <h1
                style="
                  margin: 0;
                  color: #f8fafc;
                  font-size: 26px;
                  line-height: 1.3;
                  font-weight: 700;
                "
              >
                New Message Received
              </h1>

              <p
                style="
                  margin: 12px 0 0;
                  color: #94a3b8;
                  font-size: 14px;
                  line-height: 1.7;
                "
              >
                A new enquiry has been submitted through your
                professional portfolio.
              </p>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="padding: 32px 36px 16px;">

              <div
                style="
                  margin-bottom: 16px;
                  color: #38bdf8;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1.8px;
                  text-transform: uppercase;
                "
              >
                Contact Details
              </div>

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  background-color: #020617;
                  border: 1px solid #1e293b;
                  border-radius: 12px;
                "
              >
                <tr>
                  <td
                    style="
                      width: 90px;
                      padding: 18px 20px;
                      color: #64748b;
                      font-size: 13px;
                      font-weight: 600;
                      border-bottom: 1px solid #1e293b;
                    "
                  >
                    NAME
                  </td>

                  <td
                    style="
                      padding: 18px 20px;
                      color: #f1f5f9;
                      font-size: 15px;
                      font-weight: 600;
                      border-bottom: 1px solid #1e293b;
                    "
                  >
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      width: 90px;
                      padding: 18px 20px;
                      color: #64748b;
                      font-size: 13px;
                      font-weight: 600;
                    "
                  >
                    EMAIL
                  </td>

                  <td
                    style="
                      padding: 18px 20px;
                      font-size: 15px;
                    "
                  >
                    <a
                      href="mailto:${safeEmail}"
                      style="
                        color: #38bdf8;
                        text-decoration: none;
                      "
                    >
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 16px 36px 32px;">

              <div
                style="
                  margin-bottom: 16px;
                  color: #38bdf8;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1.8px;
                  text-transform: uppercase;
                "
              >
                Message
              </div>

              <div
                style="
                  padding: 22px;
                  background-color: #020617;
                  border: 1px solid #1e293b;
                  border-left: 3px solid #38bdf8;
                  border-radius: 12px;
                  color: #cbd5e1;
                  font-size: 15px;
                  line-height: 1.8;
                "
              >
                ${safeMessage}
              </div>

            </td>
          </tr>

          <!-- Reply Button -->
          <tr>
            <td align="center" style="padding: 0 36px 36px;">

              <a
                href="mailto:${safeEmail}"
                style="
                  display: inline-block;
                  padding: 14px 26px;
                  background-color: #2563eb;
                  border-radius: 8px;
                  color: #ffffff;
                  font-size: 14px;
                  font-weight: 700;
                  text-decoration: none;
                "
              >
                Reply to ${safeName}
              </a>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              align="center"
              style="
                padding: 24px 36px;
                background-color: #020617;
                border-top: 1px solid #1e293b;
                border-radius: 0 0 16px 16px;
              "
            >
              <div
                style="
                  color: #f8fafc;
                  font-size: 14px;
                  font-weight: 700;
                "
              >
                Vimal Kumar
              </div>

              <div
                style="
                  margin-top: 6px;
                  color: #38bdf8;
                  font-size: 12px;
                "
              >
                Software Development Manager
              </div>

              <div
                style="
                  margin-top: 10px;
                  color: #64748b;
                  font-size: 11px;
                  line-height: 1.6;
                "
              >
                Generated from the contact form on Vimal Kumar's
                professional portfolio.
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;
}
