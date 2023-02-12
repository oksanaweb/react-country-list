import React, { Children, ReactNode } from "react";
import { Color } from "../ui/color";
import { BadgeLabel } from "../types/types";

interface BadgeProps {
  color: Color;
  label: BadgeLabel;
  value: number;
}

export const Badge = ({ color, label, value }: BadgeProps) => {
  return (
    <span className={`badge bg-${color}`}>
      {label}: {value}
    </span>
  );
};
