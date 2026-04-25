import {
  Activity,
  BadgeCheck,
  ClipboardList,
  Pill,
  ShieldPlus,
  Stethoscope,
  Video,
} from "lucide-react";

const serviceItems = [
  {
    title: "Healthcare",
    description:
      "Routine home health checkups for elders who need dependable monitoring, reassurance, and early visibility into changing conditions.",
    points: [
      "Blood pressure and sugar checks",
      "Temperature and oxygen monitoring",
      "General wellness observation",
    ],
    icon: Stethoscope,
    tint: "bg-[#FDEBEC] text-[#D65B6A]",
  },
  {
    title: "Medication Management",
    description:
      "Support for timely medicine use, pill organization, refill coordination, and caregiver confidence between visits.",
    points: ["Medication reminders", "Pill sorting support", "Adherence tracking"],
    icon: Pill,
    tint: "bg-[#E8F1FF] text-[#4C80F1]",
  },
  {
    title: "Tele Communication",
    description:
      "Doctor and family communication support for virtual follow-ups, planned as an upcoming add-on to the Sanjivani experience.",
    points: ["Video consultation support", "Report discussion assistance", "Upcoming service"],
    icon: Video,
    tint: "bg-[#F2EAFE] text-[#9A58F4]",
    upcoming: true,
  },
  {
    title: "Wound Caring & Dressing",
    description:
      "Professional wound cleaning, dressing changes, and at-home follow-up support for recovery that needs consistent attention.",
    points: ["Wound cleaning", "Dressing changes", "Healing progress checks"],
    icon: ClipboardList,
    tint: "bg-[#E7F8FA] text-[#22AFC9]",
  },
  {
    title: "Post Surgery Care",
    description:
      "Structured recovery support after discharge, including monitoring, medication follow-through, and family updates.",
    points: ["Recovery monitoring", "Pain and medication support", "Follow-up care coordination"],
    icon: ShieldPlus,
    tint: "bg-[#EEF0FF] text-[#6C7EEA]",
  },
];

const serviceHighlights = [
  {
    title: "Real-Time Updates",
    description: "Families receive immediate visit summaries and practical follow-up notes after every nurse visit.",
    icon: Activity,
  },
  {
    title: "Digital Reports",
    description: "Clean, shareable health records and visit summaries that are easy for children abroad to review.",
    icon: ClipboardList,
  },
  {
    title: "Licensed Nurses",
    description: "Care delivered by trained professionals, with a presentation that feels premium, safe, and trustworthy.",
    icon: BadgeCheck,
  },
];

export function ServicesOverview({
  title = "Home healthcare services designed for trust, clarity, and comfort.",
  description = "Sanjivani can grow beyond one visit type. This section shows a broader service catalog for clients, families, and investors while keeping the experience premium and easy to understand.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Services
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {serviceItems.map((service) => (
          <div
            key={service.title}
            className="rounded-[2rem] border border-white/75 bg-white/85 p-6 shadow-[0_18px_48px_rgba(31,111,95,0.08)] backdrop-blur"
          >
            <div className={`inline-flex rounded-[1.35rem] p-4 ${service.tint}`}>
              <service.icon className="h-6 w-6" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[1.55rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[1.7rem]">
                  {service.title}
                </h3>
                {service.upcoming ? (
                  <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Upcoming
                  </span>
                ) : null}
              </div>
              <p className="text-sm leading-7 text-muted-foreground">{service.description}</p>
            </div>

            <div className="mt-6 grid gap-3">
              {service.points.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/90" />
                  <span className="leading-6">{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[2.3rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(238,238,238,0.92))] px-6 py-7 shadow-[0_16px_42px_rgba(31,111,95,0.08)] sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div key={item.title} className="flex items-start gap-5">
              <div className="rounded-[1.35rem] bg-white p-4 text-primary shadow-sm">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
