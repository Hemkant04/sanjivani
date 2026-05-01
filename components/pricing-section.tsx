import { CheckCircle2 } from "lucide-react";

import { BookingModal } from "@/components/booking-modal";

type FeatureRow = {
  label: string;
  value: string;
  note?: string;
  featured?: boolean;
};

type PricingPlan = {
  name: string;
  tier: string;
  price: string;
  cadence: string;
  description: string;
  bestFor: string;
  featureRows: FeatureRow[];
  highlighted?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Aasha",
    tier: "Essential Care",
    price: "NPR 1,999",
    cadence: "/ month",
    description: "A dependable plan for families who want proactive check-ins and consistent visibility.",
    bestFor: "Proactive monitoring",
    featureRows: [
      { label: "Monthly Visits", value: "2 Visits", note: "Bi-weekly" },
      { label: "Medical Core", value: "BP, Sugar, SpO2, Heart Rate" },
      { label: "Digital Value", value: "Monthly PDF Health Report" },
      { label: "Convenience", value: "Medication Reminders" },
      { label: 'The "Heart"', value: "WhatsApp Photo Update" },
    ],
  },
  {
    name: "Sampurna",
    tier: "Concierge Care",
    price: "NPR 3,999",
    cadence: "/ month",
    description: "A higher-touch care experience with weekly visits, live updates, and family support.",
    bestFor: "NRNs wanting total family support",
    featureRows: [
      { label: "Monthly Visits", value: "3 Visits", note: "Weekly" },
      { label: "Medical Core", value: "Full Vitals + Medication Sorting" },
      { label: "Digital Value", value: "Monthly PDF Health Report", featured: true },
      { label: "Convenience", value: "1 Monthly Errand (Bank/Grocery)", featured: true },
      { label: 'The "Heart"', value: "Birthday Cake & Card Delivery", featured: true },
    ],
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Pricing
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Two clear care plans for parents at home.
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Prices are per household - with 2 members. Choose the level of support that
          fits your family best.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {pricingPlans.map((plan) => {
          return (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(10,44,33,0.1)] ${
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{plan.name}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                {plan.tier}
              </h3>
              <div className="mt-5 flex items-end gap-2">
                <p className="text-4xl font-semibold tracking-tight text-foreground">{plan.price}</p>
                <p className="pb-1 text-sm font-medium text-muted-foreground">{plan.cadence}</p>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Per household - with 2 members
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{plan.description}</p>

              <div className="mt-8 grid gap-3">
                {plan.featureRows.map((feature) => (
                  <div
                    key={feature.label}
                    className="rounded-[1.5rem] border border-border/60 bg-secondary/45 px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div className="space-y-1">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {feature.label}
                        </p>
                        <p
                          className={`text-sm leading-6 ${
                            feature.featured ? "font-semibold text-foreground" : "text-foreground"
                          }`}
                        >
                          {feature.value}
                          {feature.note ? (
                            <span className="font-normal text-muted-foreground"> ({feature.note})</span>
                          ) : null}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] bg-primary/[0.06] px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Best For
                </p>
                <p className="mt-2 text-sm font-medium text-foreground">{plan.bestFor}</p>
              </div>

              <BookingModal triggerClassName="mt-8 w-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
