"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const { t } = useLanguage();
  const tw = t.waitlist;

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  function validate(): boolean {
    if (!email.trim()) {
      setEmailError(tw.emailLabel + " is required.");
      return false;
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setFormState("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), firstName: firstName.trim() }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  return (
    <section id="waitlist" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {tw.sectionHeading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            {tw.sectionSubheading}
          </p>
        </div>

        {/* Form or success state */}
        <div className="mx-auto max-w-md">
          {formState === "success" ? (
            <div className="rounded-2xl bg-teal-600/20 px-8 py-10 text-center ring-1 ring-teal-500/30">
              <p className="font-heading mb-3 text-2xl font-bold text-white">
                {tw.successHeading}
              </p>
              <p className="text-base leading-relaxed text-slate-300">
                {tw.successMessage}
              </p>
              <p className="mt-6 text-sm font-medium text-teal-400">
                {tw.successShare}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
            >
              {/* First name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-slate-300"
                >
                  {tw.firstNameLabel}
                </label>
                <input
                  id="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder={tw.firstNamePlaceholder}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="rounded-xl border border-slate-600 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300"
                >
                  {tw.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={tw.emailPlaceholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  aria-describedby={emailError ? "email-error" : undefined}
                  aria-invalid={!!emailError}
                  className={[
                    "rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2",
                    emailError
                      ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500/30"
                      : "border-slate-600 focus:border-teal-500 focus:ring-teal-500/30",
                  ].join(" ")}
                />
                {emailError && (
                  <p id="email-error" role="alert" className="text-xs text-rose-400">
                    {emailError}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "loading"}
                className="mt-1 flex items-center justify-center gap-2 rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formState === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Loading…</span>
                  </>
                ) : (
                  tw.submitButton
                )}
              </button>

              {/* Inline error message */}
              {formState === "error" && (
                <p role="alert" className="text-center text-sm text-rose-400">
                  {tw.errorMessage}
                </p>
              )}

              {/* Microcopy */}
              <p className="text-center text-xs text-slate-500">
                {tw.microcopy}
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
