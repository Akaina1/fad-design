"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

interface TeamCardProps {
  visibleText: string;
  revealText: string;
  title?: string;
  description?: string;
}

export function TeamCard({ visibleText, revealText, title, description }: TeamCardProps) {
  return (
    <div className="flex items-center justify-center">
      <TextRevealCard text={visibleText} revealText={revealText}>
        {title && <TextRevealCardTitle>{title}</TextRevealCardTitle>}
        {description && <TextRevealCardDescription>{description}</TextRevealCardDescription>}
      </TextRevealCard>
    </div>
  );
}