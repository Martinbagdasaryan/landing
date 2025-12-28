import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export interface IfovoritGame {
  gameName: string;
  gameTamlet: string;
  gamesURL: string;
  gameInfo: {
    text: JSX.Element;
    playersType: string;
    rtp: string;
  };
}
