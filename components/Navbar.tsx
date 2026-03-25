"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Locale } from "@/lib/i18n";

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    // Set initial state in case page loads mid-scroll
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleJoinWaitlist() {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }

  const locales: Locale[] = ["en", "es"];

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Wordmark */}
          <span className="font-heading text-xl font-bold tracking-tight text-gray-900">
            {t.nav.logo}
          </span>

          {/* Right controls */}
          <div className="flex items-center gap-3">

            {/* EN / ES pill toggle */}
            <div className="flex items-center rounded-full border border-gray-300 p-0.5">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  aria-pressed={locale === l}
                  className={[
                    "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors duration-200",
                    locale === l
                      ? "bg-gray-900 text-white"
                      : "text-gray-500 hover:text-gray-900",
                  ].join(" ")}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Join Waitlist — hidden on mobile */}
            <button
              onClick={handleJoinWaitlist}
              className="hidden sm:inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-700"
            >
              {t.nav.joinWaitlist}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}
