//arquivo para inportar fontes de forma otimizada do next

import { Roboto, Spectral } from "next/font/google";

export const spectral = Spectral({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--spectral-font",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto-font",
});
