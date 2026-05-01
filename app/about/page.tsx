import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { BookingModal } from "@/components/booking-modal";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/9779808837548";

const aboutPillars = [
  {
    title: "Bootstrapped and Grounded",
    text: "Sanjivani is being built carefully, with focus on trust, execution, and real family needs instead of hype.",
  },
  {
    title: "Care With Dignity",
    text: "We want every parent visit to feel respectful, warm, and professionally handled from start to finish.",
  },
  {
    title: "Built for Families Far Away",
    text: "We understand the emotional weight children carry when they live abroad and cannot be physically present.",
  },
];

const serviceList = [
  "Healthcare and routine nurse checkups",
  "Medication management and adherence support",
  "Tele communication support as an upcoming service",
  "Wound caring and dressing",
  "Post surgery care and recovery follow-up",
];

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 mx-auto mt-4 flex items-center justify-between rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-[0_10px_40px_rgba(11,45,33,0.08)] backdrop-blur sm:px-6">
          <Link href="/" className="flex items-center gap-3">
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
            <Link className="transition hover:text-foreground" href="/">
              Home
            </Link>
            <Link className="transition hover:text-foreground" href="/services">
              Services
            </Link>
            <Link className="transition hover:text-foreground" href="/pricing">
              Pricing
            </Link>
            <Link className="text-foreground" href="/about">
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
              Chat on WhatsApp
            </a>
          </div>
        </header>

        <Reveal className="pt-14 lg:pt-18">
          <section className="grid gap-10 rounded-[2.5rem] border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(10,44,33,0.06)] backdrop-blur sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>

              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Bootstrapped in Nepal
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                  <HeartHandshake className="h-4 w-4" />
                  Built for families who care deeply
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  About Sanjivani
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-6xl">
                  We are building Sanjivani for the moments families wish they could be there in person.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Sanjivani started from a simple emotional truth: many children living away from
                  home carry constant worry about the health, safety, and daily care of their
                  parents. We want to reduce that distance with nurse-led care that feels
                  professional, transparent, and deeply human.
                </p>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  We are a bootstrapped company, growing with discipline and intention. That means
                  every part of the experience matters to us: the quality of the visit, the clarity
                  of the report, the dignity shown to elders, and the peace of mind felt by the
                  family receiving updates.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <BookingModal />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {aboutPillars.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.9rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(238,238,238,0.92))] p-6 shadow-sm"
                >
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="py-24">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[2.3rem] border border-white/75 bg-white/80 p-6 shadow-[0_20px_60px_rgba(10,44,33,0.06)] backdrop-blur sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Our Story
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  A healthcare company shaped by closeness, not by scale-first thinking.
                </h2>
                <div className="mt-6 grid gap-5 text-base leading-8 text-muted-foreground">
                  <p>
                    Sanjivani is not meant to feel like a cold medical transaction. It is meant to
                    feel like care arranged by someone who genuinely understands what family
                    responsibility feels like.
                  </p>
                  <p>
                    Our vision is to make home health visits in Kathmandu Valley feel more
                    trustworthy, more polished, and more emotionally considerate for both elders and
                    their children.
                  </p>
                  <p>
                    As a bootstrapped company, we are building carefully around what matters most:
                    reliable nurse visits, thoughtful service design, honest communication, and a
                    brand families can feel proud to trust.
                  </p>
                </div>
              </div>

              <div className="rounded-[2.3rem] border border-white/75 bg-white/80 p-6 shadow-[0_20px_60px_rgba(10,44,33,0.06)] backdrop-blur sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                  Services We Provide
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Practical care services families can understand immediately.
                </h2>
                <div className="mt-8 grid gap-4">
                  {serviceList.map((service) => (
                    <div
                      key={service}
                      className="flex items-start gap-4 rounded-[1.6rem] border border-secondary bg-secondary/70 px-5 py-4"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                      <p className="text-sm leading-7 text-foreground">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="pb-24">
            <div className="rounded-[2.5rem] border border-primary/10 bg-gradient-to-r from-primary to-[#2FA084] px-6 py-10 text-primary-foreground shadow-[0_24px_80px_rgba(47,160,132,0.28)] sm:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/75">
                  Why This Matters
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  We want every family to feel that someone trustworthy showed up with skill, dignity, and care.
                </h2>
                <p className="mt-5 text-base leading-8 text-white/82">
                  That is the heart of Sanjivani. Not just completing a visit, but reducing worry,
                  creating confidence, and giving children one less reason to feel helpless from far
                  away.
                </p>
              </div>
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
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                  Quick Links
                </p>
                <div className="mt-5 grid gap-3 text-sm text-white/80">
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                  <Link href="/services" className="transition hover:text-white">
                    Services
                  </Link>
                  <Link href="/pricing" className="transition hover:text-white">
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
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="transition hover:text-white">
                      WhatsApp Contact
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
