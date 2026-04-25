import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Building2,
  Clock3,
  Gift,
  HeartPulse,
  Mail,
  Menu,
  MessageCircleMore,
  Phone,
  Pill,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  WalletCards,
} from "lucide-react";

import { BookingModal } from "@/components/booking-modal";
import { MarketSwitcher } from "@/components/market-switcher";
import { PricingSection } from "@/components/pricing-section";
import { Reveal } from "@/components/reveal";
import { Button, buttonVariants } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/9779808837548";

const visitItems = [
  {
    title: "Medical Check",
    description: "BP, sugar, heart rate, and a clean, documented baseline after every visit.",
    icon: HeartPulse,
  },
  {
    title: "Medication Management",
    description: "Sorting the weekly pillbox and helping families reduce missed doses.",
    icon: Pill,
  },
  {
    title: "The Sanjivani Gift",
    description: "A small token like flowers or tea to make the visit feel warm, not clinical.",
    icon: Gift,
  },
  {
    title: "Instant Report",
    description: "A polished PDF summary delivered to the child’s phone immediately after the visit.",
    icon: MessageCircleMore,
  },
];

const trustLogos = ["Visa", "Mastercard", "eSewa", "Khalti", "Swift Transfer"];

const corporateBenefits = [
  "Add premium parent-care support to executive and diaspora-focused employee benefits.",
  "Offer festive or milestone gifting for parents of key team members.",
  "Present a strong, trust-building wellness story to partners and investors.",
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 mx-auto mt-4 flex items-center justify-between rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-[0_10px_40px_rgba(11,45,33,0.08)] backdrop-blur sm:px-6">
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/logo%20sanjivani.png"
              alt="Sanjivani logo"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-cover"
              priority
            />
            <div>
              <p className="font-heading text-lg font-semibold tracking-tight text-foreground">
                Sanjivani
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Care With Samskara
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex">
            <Link className="transition hover:text-foreground" href="#how-it-works">
              How it Works
            </Link>
            <Link className="transition hover:text-foreground" href="/services">
              Services
            </Link>
            <Link className="transition hover:text-foreground" href="#pricing">
              Pricing
            </Link>
            <Link className="transition hover:text-foreground" href="/about">
              About Us
            </Link>
          </nav>

          <div className="hidden lg:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MessageCircleMore className="h-4 w-4" />
              </span>
              WhatsApp 9808837548
            </a>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-border bg-white p-2 text-foreground lg:hidden"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </header>

        <section
          id="home"
          className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20"
        >
          <Reveal className="space-y-8">
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <ShieldCheck className="h-4 w-4" />
                Trusted nurse-led care in Kathmandu Valley
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-sm">
                <Sparkles className="h-4 w-4" />
                Bootstrapped in Nepal
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Premium home health, culturally rooted
                </p>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  Because You Can&apos;t Be There to Hold Their Hand, We Are.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Nurse-led home health visits for your parents in Kathmandu Valley. Professional
                  care, delivered with the warmth of a gift.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <BookingModal />
                <Link href="#how-it-works" className={buttonVariants({ variant: "secondary", size: "lg" })}>
                  Learn More
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: "Nurse-Led",
                  text: "Clinical visits led by trained professionals, not gig workers.",
                  icon: Stethoscope,
                },
                {
                  label: "Instant Updates",
                  text: "Families receive visit summaries immediately on WhatsApp.",
                  icon: Activity,
                },
                {
                  label: "Warm Touch",
                  text: "Every visit includes a thoughtful gesture that feels human.",
                  icon: Sparkles,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <p className="mt-4 text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="absolute inset-x-6 top-8 -z-10 h-5/6 rounded-[2.5rem] bg-soft-radial blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/85 p-4 shadow-glow backdrop-blur sm:p-6">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 to-transparent" />
              <div className="absolute right-5 top-5 rounded-full border border-white/80 bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary shadow-sm">
                Nurse Visit Preview
              </div>
              <div className="absolute bottom-6 left-6 rounded-[1.5rem] border border-white/80 bg-white/92 p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-accent/20 p-2 text-accent-foreground">
                    <Clock3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Visit completed</p>
                    <p className="text-xs text-muted-foreground">Vitals shared instantly with family</p>
                  </div>
                </div>
              </div>
              <Image
                src="/hero-care.svg"
                alt="Illustration of a nurse checking an elder's blood pressure"
                width={860}
                height={920}
                className="h-auto w-full rounded-[2rem] object-cover"
                priority
              />
            </div>
          </Reveal>
        </section>

        <Reveal>
          <section
            id="how-it-works"
            className="grid gap-6 rounded-[2.5rem] border border-white/70 bg-white/75 p-6 shadow-[0_22px_70px_rgba(10,44,33,0.06)] backdrop-blur sm:p-8 lg:grid-cols-[0.72fr_1.28fr]"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Dual-market messaging
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                One premium product, two compelling stories.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                The experience stays clinically trustworthy and emotionally warm, while the message
                adapts to who is buying: children abroad or families and teams in Nepal.
              </p>
            </div>
            <MarketSwitcher />
          </section>
        </Reveal>

        <Reveal delay={0.06}>
          <PricingSection />
        </Reveal>

        <Reveal>
          <section className="grid gap-8 rounded-[2.5rem] border border-white/70 bg-white/75 p-6 shadow-[0_22px_70px_rgba(10,44,33,0.06)] backdrop-blur sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                What&apos;s in the visit?
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Every visit balances medical clarity with emotional reassurance.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                This is where the brand earns trust: skilled nurses, visible outputs, and a warmer
                touch than standard home-care services.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {visitItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/75 bg-white p-5 shadow-sm"
                >
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.08}>
          <section className="py-24">
            <div className="rounded-[2.5rem] border border-primary/10 bg-gradient-to-r from-primary to-[#2FA084] px-6 py-10 text-primary-foreground shadow-[0_24px_80px_rgba(47,160,132,0.28)] sm:px-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
                    Global payment trust bar
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Built to feel easy for families abroad and familiar for families at home.
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {trustLogos.map((logo) => (
                    <div
                      key={logo}
                      className="flex min-w-[130px] items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold"
                    >
                      <WalletCards className="mr-2 h-4 w-4 text-accent" />
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section
            id="for-corporates"
            className="grid gap-8 rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(10,44,33,0.06)] backdrop-blur sm:p-8 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                For corporates
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A premium wellness benefit that reflects care, respect, and retention.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Sanjivani can be positioned as a high-trust employee benefit for teams with parents
                in Kathmandu Valley, especially diaspora-heavy companies and executive cohorts.
              </p>
              <Button variant="gold" size="lg">
                Book a Corporate Demo
              </Button>
            </div>

            <div className="grid gap-4">
              {corporateBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 rounded-[1.75rem] border border-secondary bg-secondary/70 px-5 py-5"
                >
                  <div className="rounded-2xl bg-white p-3 text-primary shadow-sm">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-7 text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <footer className="py-16">
          <div className="overflow-hidden rounded-[2.5rem] border border-[rgba(31,111,95,0.14)] bg-[#1F6F5F] text-white shadow-[0_24px_80px_rgba(31,111,95,0.24)]">
            <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
              <div className="space-y-5">
                <div>
                  <p className="font-heading text-2xl font-semibold tracking-tight">Sanjivani</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/70">
                    Nurse-Led Home Health Visits
                  </p>
                </div>
                <p className="max-w-md text-sm leading-7 text-white/80">
                  Premium elder-care visits in Kathmandu Valley, combining professional nursing,
                  family updates, and a culturally warm experience that feels respectful and deeply
                  personal.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="#pricing"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1F6F5F] transition hover:bg-[#EEEEEE]"
                  >
                    View Plans
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    About Us
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                  Quick Links
                </p>
                <div className="mt-5 grid gap-3 text-sm text-white/80">
                  <Link href="#home" className="transition hover:text-white">
                    Home
                  </Link>
                  <Link href="#how-it-works" className="transition hover:text-white">
                    How It Works
                  </Link>
                  <Link href="/services" className="transition hover:text-white">
                    Services
                  </Link>
                  <Link href="#pricing" className="transition hover:text-white">
                    Pricing
                  </Link>
                  <Link href="/about" className="transition hover:text-white">
                    About Us
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                  Care Services
                </p>
                <div className="mt-5 grid gap-3 text-sm text-white/80">
                  <p>Healthcare and routine checkups</p>
                  <p>Medication management</p>
                  <p>Wound caring and dressing</p>
                  <p>Post surgery care</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                  Contact
                </p>
                <div className="mt-5 grid gap-4 text-sm text-white/80">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <p>Kathmandu Valley, Nepal</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      WhatsApp: 9808837548
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition hover:text-white">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 px-6 py-5 sm:px-8 sm:flex sm:items-center sm:justify-between">
              <p className="text-sm text-white/70">
                © {new Date().getFullYear()} Sanjivani. Care delivered with professionalism,
                dignity, and warmth.
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/60 sm:mt-0">
                Built for trust across families, NRNs, and caregivers
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
