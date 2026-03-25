"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, CreditCard, X, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const BADGE_ICONS: LucideIcon[] = [Lock, CreditCard, X, Smartphone];
const STAGGER_MS = 150;

export default function SocialProof() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── 1. Stat strip ───────────────────────────────────────── */}
        <div className="mb-20 rounded-2xl bg-teal-600 px-8 py-10">
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {t.socialProof.stats.map((stat, i) => (
              <div key={i}>
                <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-teal-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. Testimonial grid ─────────────────────────────────── */}
        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {t.socialProof.testimonials.map((testimonial, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{
                animationDelay: `${i * STAGGER_MS}ms`,
                animationFillMode: "forwards",
              }}
              className={[
                "flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm",
                visible[i] ? "animate-fade-slide-up" : "opacity-0",
              ].join(" ")}
            >
              {/* Decorative quote mark */}
              <span
                aria-hidden="true"
                className="font-heading mb-3 block text-5xl font-bold leading-none text-teal-500"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p className="flex-1 text-base leading-relaxed text-gray-700">
                {testimonial.quote}
              </p>

              {/* Attribution */}
              <div className="mt-6">
                <p className="font-heading text-sm font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>

              {/* Illustrative note */}
              <p className="mt-4 text-xs italic text-gray-400">
                {testimonial.illustrativeNote}
              </p>
            </div>
          ))}
        </div>

        {/* ── 3. Trust badges ─────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-3">
          {t.socialProof.trustBadges.map((badge, i) => {
            const Icon = BADGE_ICONS[i];
            return (
              <div
                key={i}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2"
              >
                <Icon className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
                <span className="text-sm font-medium text-gray-600">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
