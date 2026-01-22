"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const BackgroundGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative w-full bg-black",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:64px_64px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export const BackgroundDots = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative w-full bg-black",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};
