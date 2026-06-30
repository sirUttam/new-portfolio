'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Your message is ready. I will respond shortly.');
    window.setTimeout(() => setStatus(''), 6000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="section-surface p-6 shadow-soft"
      aria-label="Contact form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-muted">
          <span>Name</span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#101520] px-4 py-3 text-text outline-none transition focus:border-accent"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm text-muted">
          <span>Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#101520] px-4 py-3 text-text outline-none transition focus:border-accent"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-4 space-y-2 text-sm text-muted">
        <span>Message</span>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[#101520] px-4 py-4 text-text outline-none transition focus:border-accent"
          placeholder="Say hello ..."
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[rgba(201,162,39,0.18)] px-8 py-3 text-sm font-semibold text-accent transition hover:bg-[rgba(201,162,39,0.28)] focus-visible:outline-none"
      >
        Send message
      </button>

      {status && (
        <p className="mt-4 text-sm text-text/80">{status}</p>
      )}
    </form>
  );
}
