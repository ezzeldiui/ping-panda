import { CheckIcon } from "lucide-react";

import { Heading } from "@components/common/heading";
import { MaxWidthWrapper } from "@components/common/max-width-wrapper";
import { ShinyLink } from "@components/common/shiny-button";

export default function Homepage() {
  return (
    <>
      <section className="relative bg-brand-25 py-24 sm:py-32">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto flex flex-col items-center text-center">
            <div>
              <Heading>
                <span>Real-Time Saas Insights,</span>
                <br />
                <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent">
                  Delivered to your Discord
                </span>
              </Heading>
            </div>

            <p className="max-w-prose text-pretty text-center text-base/7 text-gray-600">
              PingPanda is the easiest way to montior your SaaS, Get instant
              notification for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, or any other event
              </span>{" "}
              sent directly to your Discord server.
            </p>

            <ul className="flex flex-col items-start space-y-2 py-6 text-left text-base/7 text-gray-600">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users, or any other event",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1.5 text-left">
                  <CheckIcon className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinyLink
                href="/sign-up"
                className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                Start For Free Today
              </ShinyLink>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  );
}
