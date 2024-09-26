import React from "react";
import Link from "next/link";

import ToggleMode from "@/components/toogle-mode";
import { buttonVariants } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";

function Navbar() {
  return (
    <header className="flex h-16 bg-primary">
      <div className="container mx-auto flex items-center justify-between px-3 md:px-0">
        <Link href="/">
          <H3 className="text-primary-foreground">Nextjs</H3>
        </Link>

        <div className="flex items-center gap-3">
          <ToggleMode />
          <Link
            href="/login"
            className={buttonVariants({
              variant: "outline",
              size: "default",
            })}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
