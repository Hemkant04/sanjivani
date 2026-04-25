"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type BookingForm = {
  name: string;
  phone: string;
  email: string;
  plan: string;
  notes: string;
};

const initialForm: BookingForm = {
  name: "",
  phone: "",
  email: "",
  plan: "Standard",
  notes: "",
};

export function BookingModal({
  triggerClassName,
}: {
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<BookingForm>(initialForm);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Sanjivani booking inquiry", {
      submittedAt: new Date().toISOString(),
      ...form,
    });
    setSubmitted(true);
    setForm(initialForm);

    window.setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
    }, 1800);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className={triggerClassName}>
          Gift a Subscription
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Booking Modal
          </p>
          <DialogTitle>Start a care plan for your parent</DialogTitle>
          <DialogDescription>
            This prototype does not connect to a backend yet. Form submissions are logged to the
            browser console for demo purposes.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="mt-6 rounded-[1.5rem] border border-primary/15 bg-primary/5 p-5 text-sm text-foreground">
            Thank you. Your inquiry has been captured in the browser console, and the modal will
            close in a moment.
          </div>
        ) : (
          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Your name
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Aashna Sharma"
                className="h-12 rounded-2xl border bg-white px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-foreground">
                WhatsApp / Phone
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+61 4XX XXX XXX"
                  className="h-12 rounded-2xl border bg-white px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-foreground">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="h-12 rounded-2xl border bg-white px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-foreground">
              Preferred plan
              <select
                name="plan"
                value={form.plan}
                onChange={handleChange}
                className="h-12 rounded-2xl border bg-white px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              >
                <option>Basic</option>
                <option>Standard</option>
                <option>Premium</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-foreground">
              Notes
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="Tell us who needs care, where they live, or what kind of support matters most."
                className="min-h-28 rounded-[1.5rem] border bg-white px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
            </label>

            <Button type="submit" size="lg" className="mt-2 w-full">
              Submit Inquiry
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
