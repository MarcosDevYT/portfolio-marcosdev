"use client";

import { useRevealer } from "@/hooks/useRevealer";

export const Revealer = () => {
  useRevealer();

  return <div className="revealer" />;
};
