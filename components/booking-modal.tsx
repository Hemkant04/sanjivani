import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdqQeueZbymiKgTxoQshcqZ0OP9uqEWagwJ9Ud8W8nSLv_UWw/viewform?usp=publish-editor";

export function BookingModal({
  triggerClassName,
}: {
  triggerClassName?: string;
}) {
  return (
    <a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noreferrer"
      className={cn(buttonVariants({ size: "lg" }), triggerClassName)}
    >
      Gift a Subscription
    </a>
  );
}
