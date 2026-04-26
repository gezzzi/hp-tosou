"use client";

import { useEffect } from "react";

const SESSION_FLAG = "site-admin-visit-10s";
const THRESHOLD_MS = 10_000;
const TICK_MS = 1_000;

export default function VisitTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      if (sessionStorage.getItem(SESSION_FLAG) === "1") return;
    } catch {
      // sessionStorage blocked (private mode) — proceed without dedup
    }

    let visibleMs = 0;
    let lastTick = Date.now();
    let visible = !document.hidden;
    let fired = false;

    const fire = () => {
      if (fired) return;
      fired = true;
      try {
        sessionStorage.setItem(SESSION_FLAG, "1");
      } catch {
        // ignore
      }
      // keepalive lets the request survive a page navigation/close that
      // happens right around the 10s mark.
      fetch("/api/track-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "visit_10s" }),
        keepalive: true,
      }).catch(() => {});
    };

    const settle = () => {
      const now = Date.now();
      if (visible) {
        visibleMs += now - lastTick;
      }
      lastTick = now;
      if (visibleMs >= THRESHOLD_MS) {
        fire();
        stop();
      }
    };

    const interval = setInterval(settle, TICK_MS);

    const onVisibilityChange = () => {
      // Settle current accumulator before flipping the visibility flag.
      settle();
      visible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    function stop() {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }

    return stop;
  }, []);

  return null;
}
