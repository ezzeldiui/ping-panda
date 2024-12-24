import { ReactNode } from "react";
import { Navbar } from "@components/common/navbar";

import "@styles/globals.css";

type LandingpageLayoutProps = {
  children: ReactNode;
};

export default function LandingpageLayout({
  children,
}: LandingpageLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
