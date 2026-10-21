"use client";

import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuToggleIconProps {
  open?: boolean;
  className?: string;
  onClick?: () => void;
}

export function MenuToggleIcon({
  open = false,
  className,
  onClick,
}: MenuToggleIconProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md cursor-pointer",
        className
      )}
      aria-hidden="true"
    >
      {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </span>
  );
}
