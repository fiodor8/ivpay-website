import type { Metadata } from "next";
import "./globals.css";

import { LazyMotion, domAnimation } from "framer-motion"
import LazyMotionWrapper from "@/components/motion/lazyMotionWrapper";

export const metadata: Metadata = {
  title: "Ivpay | A simple way to start accepting crypto in your business",
  description: "A simple way to start accepting crypto in your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LazyMotionWrapper>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </LazyMotionWrapper>
  );
}
