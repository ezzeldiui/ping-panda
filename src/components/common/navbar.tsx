import Link from "next/link";
import { MaxWidthWrapper } from "@components/common/max-width-wrapper";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@ui/button";

export function Navbar() {
  const user = false;

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-16 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="z-40 flex font-semibold">
            Ping
            <span className="text-brand-700">Panda</span>
          </Link>

          <div className="flex h-full items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                    <Button>
                        
                    </Button>
                </SignOutButton>
              </>
            ) : null}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
