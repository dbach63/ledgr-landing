export type Locale = "en" | "es";

// ---------------------------------------------------------------------------
// Shape types
// ---------------------------------------------------------------------------

interface NavCopy {
  logo: string;
  joinWaitlist: string;
}

interface HeroCopy {
  headline: string;
  subheadline: string;
  cta: string;
  microcopy: string;
}

interface FeatureItem {
  title: string;
  description: string;
}

interface FeaturesCopy {
  sectionHeading: string;
  sectionSubheading: string;
  items: [FeatureItem, FeatureItem, FeatureItem];
}

interface HowItWorksItem {
  stepNumber: "01" | "02" | "03";
  title: string;
  description: string;
}

interface HowItWorksCopy {
  sectionHeading: string;
  items: [HowItWorksItem, HowItWorksItem, HowItWorksItem];
}

interface Stat {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Reminder that these are illustrative, not verified user quotes. */
  illustrativeNote: string;
}

interface TrustBadge {
  label: string;
}

interface SocialProofCopy {
  stats: [Stat, Stat, Stat];
  testimonials: [Testimonial, Testimonial, Testimonial];
  trustBadges: [TrustBadge, TrustBadge, TrustBadge, TrustBadge];
}

interface WaitlistCopy {
  sectionHeading: string;
  sectionSubheading: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  submitButton: string;
  microcopy: string;
  successHeading: string;
  successMessage: string;
  successShare: string;
  errorMessage: string;
}

interface FooterCopy {
  tagline: string;
  privacyPolicy: string;
  termsOfService: string;
  copyright: string;
}

export interface Translations {
  nav: NavCopy;
  hero: HeroCopy;
  features: FeaturesCopy;
  howItWorks: HowItWorksCopy;
  socialProof: SocialProofCopy;
  waitlist: WaitlistCopy;
  footer: FooterCopy;
}

// ---------------------------------------------------------------------------
// English
// ---------------------------------------------------------------------------

const en: Translations = {
  nav: {
    logo: "Ledgr",
    joinWaitlist: "Join Waitlist",
  },

  hero: {
    headline: "Your books, handled. Finally.",
    subheadline:
      "Ledgr gives independent contractors a simple, smart way to track income, log expenses, and stay tax-ready — without the spreadsheet chaos.",
    cta: "Get Early Access",
    microcopy: "Free to join. No credit card required.",
  },

  features: {
    sectionHeading: "Built for how you actually work",
    sectionSubheading:
      "No accounting degree required. Ledgr handles the complexity so you can focus on the work that pays.",
    items: [
      {
        title: "Automatic Expense Tracking",
        description:
          "Connect your accounts and Ledgr categorizes every transaction automatically — mileage, tools, subscriptions, and more.",
      },
      {
        title: "Invoice & Income Logging",
        description:
          "Log invoices in seconds and get a real-time view of what you've earned, what's pending, and what's overdue.",
      },
      {
        title: "Tax-Ready Reports",
        description:
          "Generate Schedule C-ready summaries and quarterly estimated tax breakdowns whenever you need them.",
      },
    ],
  },

  howItWorks: {
    sectionHeading: "Up and running in minutes",
    items: [
      {
        stepNumber: "01",
        title: "Create your account",
        description:
          "Sign up free and answer a few questions about your work. Ledgr tailors itself to your trade.",
      },
      {
        stepNumber: "02",
        title: "Connect your finances",
        description:
          "Link your bank accounts and payment apps. Ledgr imports and categorizes your transactions automatically.",
      },
      {
        stepNumber: "03",
        title: "Stay in control",
        description:
          "Review your dashboard, run reports, and head into tax season with confidence — not dread.",
      },
    ],
  },

  socialProof: {
    stats: [
      { value: "10,000+", label: "Contractors on the waitlist" },
      { value: "~$2,400", label: "Average annual tax savings" },
      { value: "< 5 min", label: "Weekly bookkeeping time" },
    ],
    testimonials: [
      {
        quote:
          "I used to dread tax season. Ledgr made it the easiest part of my year.",
        name: "Marcus T.",
        role: "Freelance Electrician",
        illustrativeNote: "Illustrative quote — not a verified user testimonial.",
      },
      {
        quote:
          "Finally an app that gets how contractors actually get paid. No jargon, no bloat.",
        name: "Priya S.",
        role: "Independent Graphic Designer",
        illustrativeNote: "Illustrative quote — not a verified user testimonial.",
      },
      {
        quote:
          "I sent my accountant the Ledgr report and she said it was the cleanest file she'd seen all year.",
        name: "Ray L.",
        role: "Contract Plumber",
        illustrativeNote: "Illustrative quote — not a verified user testimonial.",
      },
    ],
    trustBadges: [
      { label: "256-bit Encryption" },
      { label: "No Credit Card Required" },
      { label: "Cancel Anytime" },
      { label: "Mobile-First Design" },
    ],
  },

  waitlist: {
    sectionHeading: "Be first in line.",
    sectionSubheading:
      "Ledgr is launching soon. Join the waitlist and get early access, founding member pricing, and a direct line to our product team.",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "Maria",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    submitButton: "Claim My Spot",
    microcopy: "We respect your inbox. No spam — ever.",
    successHeading: "You're on the list!",
    successMessage:
      "We'll be in touch as soon as Ledgr is ready for you. Keep an eye on your inbox.",
    successShare: "Share Ledgr with a fellow contractor",
    errorMessage:
      "Something went wrong. Please try again or email us at hello@ledgr.io.",
  },

  footer: {
    tagline: "Bookkeeping that works as hard as you do.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    copyright: "© 2026 Ledgr. All rights reserved.",
  },
};

// ---------------------------------------------------------------------------
// Spanish
// ---------------------------------------------------------------------------

const es: Translations = {
  nav: {
    logo: "Ledgr",
    joinWaitlist: "Únete a la lista",
  },

  hero: {
    headline: "Tus finanzas, bajo control. Por fin.",
    subheadline:
      "Ledgr le da a los contratistas independientes una forma simple e inteligente de rastrear ingresos, registrar gastos y estar listos para los impuestos — sin el caos de las hojas de cálculo.",
    cta: "Obtén acceso anticipado",
    microcopy: "Gratis para unirse. No se requiere tarjeta de crédito.",
  },

  features: {
    sectionHeading: "Diseñado para cómo realmente trabajas",
    sectionSubheading:
      "No se necesita título en contabilidad. Ledgr maneja la complejidad para que puedas enfocarte en el trabajo que paga.",
    items: [
      {
        title: "Seguimiento automático de gastos",
        description:
          "Conecta tus cuentas y Ledgr categoriza cada transacción automáticamente — kilometraje, herramientas, suscripciones y más.",
      },
      {
        title: "Registro de facturas e ingresos",
        description:
          "Registra facturas en segundos y obtén una vista en tiempo real de lo que has ganado, lo que está pendiente y lo que está vencido.",
      },
      {
        title: "Reportes listos para impuestos",
        description:
          "Genera resúmenes y desgloses de impuestos estimados trimestrales listos para el Anexo C cuando los necesites.",
      },
    ],
  },

  howItWorks: {
    sectionHeading: "Listo en minutos",
    items: [
      {
        stepNumber: "01",
        title: "Crea tu cuenta",
        description:
          "Regístrate gratis y responde algunas preguntas sobre tu trabajo. Ledgr se adapta a tu oficio.",
      },
      {
        stepNumber: "02",
        title: "Conecta tus finanzas",
        description:
          "Vincula tus cuentas bancarias y aplicaciones de pago. Ledgr importa y categoriza tus transacciones automáticamente.",
      },
      {
        stepNumber: "03",
        title: "Mantén el control",
        description:
          "Revisa tu panel, genera reportes y enfrenta la temporada de impuestos con confianza — no con miedo.",
      },
    ],
  },

  socialProof: {
    stats: [
      { value: "10,000+", label: "Contratistas en la lista de espera" },
      { value: "~$2,400", label: "Ahorro fiscal anual promedio" },
      { value: "< 5 min", label: "Tiempo semanal de contabilidad" },
    ],
    testimonials: [
      {
        quote:
          "Antes le temía a la temporada de impuestos. Ledgr lo convirtió en la parte más fácil del año.",
        name: "Marcus T.",
        role: "Electricista independiente",
        illustrativeNote:
          "Cita ilustrativa — no es un testimonio de usuario verificado.",
      },
      {
        quote:
          "Por fin una app que entiende cómo realmente cobran los contratistas. Sin tecnicismos, sin relleno.",
        name: "Priya S.",
        role: "Diseñadora gráfica independiente",
        illustrativeNote:
          "Cita ilustrativa — no es un testimonio de usuario verificado.",
      },
      {
        quote:
          "Le envié el reporte de Ledgr a mi contadora y dijo que era el archivo más ordenado que había visto en todo el año.",
        name: "Ray L.",
        role: "Plomero contratista",
        illustrativeNote:
          "Cita ilustrativa — no es un testimonio de usuario verificado.",
      },
    ],
    trustBadges: [
      { label: "Cifrado de 256 bits" },
      { label: "No se requiere tarjeta de crédito" },
      { label: "Cancela en cualquier momento" },
      { label: "Diseño móvil primero" },
    ],
  },

  waitlist: {
    sectionHeading: "Sé el primero en la fila.",
    sectionSubheading:
      "Ledgr se lanzará pronto. Únete a la lista de espera y obtén acceso anticipado, precios para miembros fundadores y contacto directo con nuestro equipo de producto.",
    firstNameLabel: "Nombre",
    firstNamePlaceholder: "María",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tú@ejemplo.com",
    submitButton: "Reserva mi lugar",
    microcopy: "Respetamos tu bandeja de entrada. Sin spam — jamás.",
    successHeading: "¡Estás en la lista!",
    successMessage:
      "Te avisaremos en cuanto Ledgr esté listo para ti. Mantén un ojo en tu bandeja de entrada.",
    successShare: "Comparte Ledgr con un compañero contratista",
    errorMessage:
      "Algo salió mal. Por favor intenta de nuevo o escríbenos a hello@ledgr.io.",
  },

  footer: {
    tagline: "Contabilidad que trabaja tan duro como tú.",
    privacyPolicy: "Política de privacidad",
    termsOfService: "Términos de servicio",
    copyright: "© 2026 Ledgr. Todos los derechos reservados.",
  },
};

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export const translations: Record<Locale, Translations> = { en, es };

/** Convenience helper — use in Server Components and static generation. */
export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
