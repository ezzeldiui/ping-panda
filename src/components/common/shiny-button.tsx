import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { HTMLAttributes } from "react";

type ShinyLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function ShinyLink({
  children,
  className,
  href,
  ...props
}: ShinyLinkProps) {
  return (
    <Link
      href={href!! ? href : "#"}
      {...props}
      className={cn(
        "group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-brand-700 px-8 text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-brand-700 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRightIcon className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
      </span>

      <div className="absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:left-[120%]" />
    </Link>
  );
}