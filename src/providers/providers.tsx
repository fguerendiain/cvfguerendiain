"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { I18nProvider } from "@/lib/I18nProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
