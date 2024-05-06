//arquivo para inportar fontes de forma otimizada do next

import { Spectral } from "next/font/google";

export const spectral = Spectral({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--spectral-font",
});
