"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  function handleCta() {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col items-center justify-center gap-12 py-24 lg:flex-row lg:gap-16">

          {/* ── Left column: copy ─────────────────────────────────── */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">

            <h1 className="animate-fade-slide-up opacity-0 font-heading text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t.hero.headline}
            </h1>

            <p className="animate-fade-slide-up-delay-1 opacity-0 mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              {t.hero.subheadline}
            </p>

            <div className="animate-fade-slide-up-delay-2 opacity-0 mt-8 flex flex-col items-center gap-3 lg:items-start">
              <button
                onClick={handleCta}
                className="rounded-full bg-teal-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-teal-700"
              >
                {t.hero.cta}
              </button>
              <p className="text-sm text-gray-400">{t.hero.microcopy}</p>
            </div>

          </div>

          {/* ── Right column: phone mockup ────────────────────────── */}
          <div className="animate-fade-slide-up-delay-3 opacity-0 flex flex-1 justify-center">
            <div className="w-64 rounded-3xl bg-slate-800 p-5 shadow-2xl ring-1 ring-slate-700 sm:w-72">

              {/* Status bar placeholder */}
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">9:41</span>
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-slate-600" />
                  <div className="h-2 w-2 rounded-full bg-slate-600" />
                  <div className="h-2 w-2 rounded-full bg-teal-500" />
                </div>
              </div>

              {/* Balance card */}
              <div className="mb-4 rounded-2xl bg-teal-600 px-4 py-4">
                <p className="mb-1 text-xs font-medium text-teal-200">
                  Net Balance
                </p>
                <p className="font-heading text-3xl font-bold text-white">
                  $8,420.00
                </p>
                <p className="mt-1 text-xs text-teal-200">+12% this month</p>
              </div>

              {/* Section label */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Recent
              </p>

              {/* Transaction row 1 */}
              <div className="mb-2 flex items-center justify-between rounded-xl bg-slate-700/60 px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20">
                    <div className="h-3 w-3 rounded-full bg-teal-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-200">
                      Invoice #1042
                    </p>
                    <p className="text-xs text-slate-500">Mar 18</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-teal-400">
                  +$1,800
                </span>
              </div>

              {/* Transaction row 2 */}
              <div className="mb-4 flex items-center justify-between rounded-xl bg-slate-700/60 px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-500/20">
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-200">
                      Tools & Supplies
                    </p>
                    <p className="text-xs text-slate-500">Mar 17</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-rose-400">
                  −$240
                </span>
              </div>

              {/* Mini bar chart */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Monthly Income
              </p>
              <div className="flex items-end gap-1.5 rounded-xl bg-slate-700/40 px-3 py-3">
                {[40, 65, 50, 80, 55, 90, 72].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-teal-500/70"
                    style={{ height: `${h * 0.5}px` }}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
