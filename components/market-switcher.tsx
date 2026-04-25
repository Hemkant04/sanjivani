"use client";

import { useState } from "react";
import { ArrowRight, Building2, Globe2, HeartHandshake } from "lucide-react";

import { cn } from "@/lib/utils";

const audiences = {
  abroad: {
    label: "I am an NRN (Abroad)",
    eyebrow: "For families living overseas",
    title: "Send care home without feeling far away.",
    body:
      "Sanjivani gives NRN families a reliable routine of nurse-led visits, instant WhatsApp updates, and payment options that work from Sydney, London, Dubai, or New York.",
    points: ["Guilt-free care with visible follow-through", "Global payments made simple", "Real updates after every visit"],
    icon: Globe2,
  },
  local: {
    label: "I live in Nepal",
    eyebrow: "For local families and teams",
    title: "Turn care into a thoughtful, practical gift.",
    body:
      "Whether it is a birthday surprise for your parents, a wellness subscription for relatives, or a premium employee benefit, Sanjivani adds warmth to professional care.",
    points: ["Surprise birthday and festive gifting", "Corporate wellness and elder-care support", "A polished experience families feel proud to give"],
    icon: Building2,
  },
} as const;

export function MarketSwitcher() {
  const [active, setActive] = useState<keyof typeof audiences>("abroad");
  const current = audiences[active];
  const Icon = current.icon;

  return (
    <div className="rounded-[2rem] border border-white/60 bg-white/85 p-3 shadow-[0_20px_60px_rgba(10,44,33,0.08)] backdrop-blur">
      <div className="grid gap-2 sm:grid-cols-2">
        {Object.entries(audiences).map(([key, audience]) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key as keyof typeof audiences)}
            className={cn(
              "rounded-[1.5rem] px-4 py-4 text-left transition",
              active === key
                ? "bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(47,160,132,0.22)]"
                : "bg-transparent text-muted-foreground hover:bg-primary/5 hover:text-foreground",
            )}
          >
            <span className="text-sm font-semibold">{audience.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-6 rounded-[1.75rem] bg-secondary/65 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <HeartHandshake className="h-3.5 w-3.5" />
            {current.eyebrow}
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {current.title}
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {current.body}
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/60 bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold text-foreground">Why this resonates</p>
          </div>
          <div className="mt-4 grid gap-3">
            {current.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl border border-secondary bg-secondary/60 px-4 py-3 text-sm text-foreground"
              >
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
