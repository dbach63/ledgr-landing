"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, TrendingUp, Calculator } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const ICONS: LucideIcon[] = [FileText, TrendingUp, Calculator];
const STAGGER_MS = 150;

export default function Features() {
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

        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.features.sectionHeading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            {t.features.sectionSubheading}
          </p>
        </div>

        {/* Card grid */}
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
          {t.features.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                style={{
                  animationDelay: `${i * STAGGER_MS}ms`,
                  animationFillMode: "forwards",
                }}
                className={[
                  "rounded-2xl border border-gray-100 bg-white p-8 shadow-sm",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                  visible[i] ? "animate-fade-slide-up" : "opacity-0",
                ].join(" ")}
              >
                {/* Icon badge */}
                <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-teal-50 p-3">
                  <Icon className="h-6 w-6 text-teal-600" strokeWidth={1.75} />
                </div>

                <h3 className="font-heading mb-2 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-base leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
