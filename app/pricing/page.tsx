import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, MessageCircleMore, Phone, Sparkles } from "lucide-react";

import { BookingModal } from "@/components/booking-modal";
import { PricingSection } from "@/components/pricing-section";
import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/9779808837548";

export default function PricingPage() {
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
            <Link className="text-foreground" href="/pricing">
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
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Dedicated Pricing Page
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Clear monthly plans for every family
                </div>
                <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight text-foreground sm:text-6xl">
                  Latest pricing now lives on its own page for quicker browsing.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  Compare Sanjivani&apos;s care plans in one focused place, with the same
                  nurse-led support details families need before booking.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <BookingModal />
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-6 text-base font-semibold text-foreground transition hover:border-primary/30 hover:bg-primary/5"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Two simple monthly care plans",
                "Designed for NRNs and local families",
                "Clear deliverables in every visit",
                "Easy next step to book on WhatsApp",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.75rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(238,238,238,0.92))] p-5 text-sm font-medium text-foreground shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <PricingSection />
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
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      WhatsApp Contact
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
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
