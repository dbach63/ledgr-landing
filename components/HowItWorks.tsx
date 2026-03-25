"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const STAGGER_MS = 150;

export default function HowItWorks() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState<boolean[]>([false, false, false]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, i) => {
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
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t.howItWorks.sectionHeading}
          </h2>
        </div>

        {/* Steps — relative container anchors the connector line */}
        <div className="relative">

          {/* Dashed connector line — desktop only, sits behind circles */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-8 hidden h-0 border-t-2 border-dashed border-teal-200 lg:block"
          />

          <div className="relative grid gap-12 lg:grid-cols-3 lg:gap-8">
            {t.howItWorks.items.map((step, i) => (
              <div
                key={i}
                ref={(el) => { stepRefs.current[i] = el; }}
                style={{
                  animationDelay: `${i * STAGGER_MS}ms`,
                  animationFillMode: "forwards",
                }}
                className={[
                  "flex flex-col items-center text-center",
                  visible[i] ? "animate-fade-slide-up" : "opacity-0",
                ].join(" ")}
              >
                {/* Step number circle */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-600 shadow-md">
                  <span className="font-heading text-lg font-bold text-white">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Step copy */}
                <h3 className="font-heading mb-2 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
