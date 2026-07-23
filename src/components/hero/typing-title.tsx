"use client";

import { useEffect, useMemo, useState } from "react";

const phrases = [
  "Software Development Manager",
  ".NET 8 & API Architect",
  "Blazor & React Engineer",
  "Technical Leadership",
  "AI-Driven Engineering ",
];

export function TypingTitle() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const phrase = phrases[phraseIndex];

  const text = useMemo(() => phrase.slice(0, visible), [phrase, visible]);

  useEffect(() => {
    const delay = deleting ? 42 : 82;
    const timer = window.setTimeout(() => {
      if (!deleting && visible < phrase.length) {
        setVisible((value) => value + 1);
      } else if (!deleting && visible === phrase.length) {
        window.setTimeout(() => setDeleting(true), 900);
      } else if (deleting && visible > 0) {
        setVisible((value) => value - 1);
      } else {
        setDeleting(false);
        setPhraseIndex((value) => (value + 1) % phrases.length);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, phrase.length, visible]);

  return (
    <span className="inline-flex min-h-9 items-center text-sky-300">
      {text}
      <span className="ml-1 h-8 w-0.5 animate-pulse bg-sky-300" />
    </span>
  );
}
