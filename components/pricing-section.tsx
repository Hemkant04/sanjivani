"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { BookingModal } from "@/components/booking-modal";

type BillingCycle = "monthly" | "yearly";

const pricingPlans = [
  {
    name: "Basic",
    monthlyPrice: "NPR 1,200/mo",
    yearlyPrice: "NPR 14,400/yr",
    description: "A light-touch check-in plan for reassurance and visibility.",
    features: {
      monthly: ["1 Visit", "Vitals Check", "WhatsApp Report"],
      yearly: ["12 Visits / Year", "Vitals Check", "WhatsApp Report"],
    },
  },
  {
    name: "Standard",
    monthlyPrice: "NPR 1,800/mo",
    yearlyPrice: "NPR 21,600/yr",
    description: "Balanced support for families who want medical follow-up and convenience.",
    features: {
      monthly: ["2 Visits", "Med-Delivery", "Monthly Doctor Video Call"],
      yearly: ["24 Visits / Year", "Med-Delivery", "12 Doctor Video Calls"],
    },
    highlighted: true,
  },
  {
    name: "Premium",
    monthlyPrice: "NPR 2,500/mo",
    yearlyPrice: "NPR 30,000/yr",
    description: "High-attention support designed for families who need peace of mind all year.",
    features: {
      monthly: ["Weekly Visits", "24/7 Priority Support", "Concierge Errand Run"],
      yearly: ["52 Visits / Year", "24/7 Priority Support", "Concierge Errand Run"],
    },
  },
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Hardcoded pricing
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Simple plans that make care easy to gift.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Clean tiers for demos, sales conversations, and investor walkthroughs. These can be
          wired to a backend later without changing the front-end story.
        </p>

        <div className="mt-8 inline-flex items-center rounded-full border border-white/70 bg-white/85 p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              billingCycle === "monthly"
                ? "bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(47,160,132,0.22)]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              billingCycle === "yearly"
                ? "bg-primary text-primary-foreground shadow-[0_12px_28px_rgba(47,160,132,0.22)]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Yearly
          </button>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {billingCycle === "monthly" ? "Flexible monthly billing." : "Annual billing for the full year."}
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => {
          const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
          const features = plan.features[billingCycle];

          return (
            <div
              key={plan.name}
              className={`relative rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,44,33,0.1)] ${
                plan.highlighted
                  ? "border-primary/30 bg-white shadow-[0_26px_70px_rgba(47,160,132,0.16)]"
                  : "border-white/70 bg-white/80 backdrop-blur"
              }`}
            >
              {plan.highlighted ? (
                <div className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                  Most Popular
                </div>
              ) : null}
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                {plan.name}
              </p>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-foreground">{price}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {billingCycle === "monthly" ? "Billed monthly" : "Billed yearly"}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{plan.description}</p>

              <div className="mt-8 grid gap-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl bg-secondary/60 px-4 py-3 text-sm text-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>

              <BookingModal triggerClassName="mt-8 w-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
