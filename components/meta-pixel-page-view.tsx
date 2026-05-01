"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type FbqArgs = [string, string, ...unknown[]];

type FbqWindow = Window & {
  fbq?: (...args: FbqArgs) => void;
};

export function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    (window as FbqWindow).fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
