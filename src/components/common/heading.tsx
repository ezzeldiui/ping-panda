import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  className?: string;
};

export function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-sinc-800 text-pretty font-heading text-4xl font-semibold sm:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
