import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = HTMLAttributes<HTMLElement> & {
  className?: string;
};

export function MaxWidthWrapper({ children, className }: MaxWidthWrapperProps) {
  return (
    <div
      className={cn(
        "max-w-screen mx-auto h-full w-full px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
