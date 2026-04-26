"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SESSION_FLAG = "site-admin-session-tracked";

function send(name: "page_view" | "session", page: string) {
  // keepalive ensures the request survives navigation away from the page
  fetch("/api/track-visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, page }),
    keepalive: true,
  }).catch(() => {});
}

export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const page = pathname || "/";

    send("page_view", page);

    try {
      if (sessionStorage.getItem(SESSION_FLAG) !== "1") {
        sessionStorage.setItem(SESSION_FLAG, "1");
        send("session", page);
      }
    } catch {
      // sessionStorage blocked (private mode etc.) — skip session counting
    }
  }, [pathname]);

  return null;
}
