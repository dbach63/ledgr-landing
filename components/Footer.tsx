"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">

          {/* Wordmark */}
          <span className="font-heading text-lg font-bold text-white">
            {t.nav.logo}
          </span>

          {/* Tagline */}
          <p className="text-sm text-slate-500">{t.footer.tagline}</p>

          {/* Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              {t.footer.privacyPolicy}
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              {t.footer.termsOfService}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600">{t.footer.copyright}</p>

        </div>
      </div>
    </footer>
  );
}
