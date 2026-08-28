"use client";

import { useState } from "react";
import { brandConfig } from "@/lib/data/brand";

const projectTypes = ["Custom Home", "Renovation", "Extension", "Other"];

export function DiscoveryCallForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Production: POST to your CRM/email endpoint.
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="stage-fade flex h-full flex-col justify-center border border-line-dark bg-charcoal/60 p-8 text-center md:p-12">
        <p className="font-display text-3xl text-ivory">Thank you.</p>
        <p className="mt-4 leading-relaxed text-ivory/65">
          Your enquiry is in. A member of the Inverloch Builders team will be
          in touch shortly to arrange your discovery call.
        </p>
        <p className="mt-6 font-sans text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-bronze">
          Build Better · Built to Last
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-7 sm:grid-cols-2">
      <div>
        <label htmlFor="dc-firstname" className="field-label">
          First Name
        </label>
        <input
          id="dc-firstname"
          name="firstName"
          required
          autoComplete="given-name"
          placeholder="Jane"
          className="field-input-dark"
        />
      </div>
      <div>
        <label htmlFor="dc-phone" className="field-label">
          Phone
        </label>
        <input
          id="dc-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="04xx xxx xxx"
          className="field-input-dark"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="dc-email" className="field-label">
          Email
        </label>
        <input
          id="dc-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com.au"
          className="field-input-dark"
        />
      </div>
      <div>
        <label htmlFor="dc-suburb" className="field-label">
          Suburb
        </label>
        <input
          id="dc-suburb"
          name="suburb"
          required
          placeholder="Inverloch"
          className="field-input-dark"
        />
      </div>
      <div>
        <label htmlFor="dc-project-type" className="field-label">
          Project Type
        </label>
        <select
          id="dc-project-type"
          name="projectType"
          required
          defaultValue=""
          className="field-input-dark cursor-pointer"
        >
          <option value="" disabled className="text-ink">
            Select…
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="text-ink">
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="dc-message" className="field-label">
          Message
        </label>
        <textarea
          id="dc-message"
          name="message"
          rows={3}
          placeholder="Tell us about your site, your ideas, and where you're at."
          className="field-input-dark resize-none"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex w-full items-center justify-center gap-3 bg-ivory px-8 py-4 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:bg-parchment disabled:opacity-60 sm:w-auto"
        >
          {sending ? "Sending…" : "Book My Discovery Call"}
          {!sending && <span aria-hidden="true">→</span>}
        </button>
        <p className="mt-5 text-sm text-ivory/50">
          Prefer to talk? Call{" "}
          <a
            href={brandConfig.phoneHref}
            className="text-ivory hover:text-bronze"
          >
            {brandConfig.phone}
          </a>{" "}
          or email{" "}
          <a
            href={brandConfig.emailHref}
            className="text-ivory hover:text-bronze"
          >
            {brandConfig.email}
          </a>
        </p>
      </div>
    </form>
  );
}
