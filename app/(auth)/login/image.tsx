import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

import { P, Small } from "@/components/ui/typography";

function LoginImage() {
  return (
    <div className="pointer-events-none hidden h-full w-full p-5 md:flex">
      <div className="relative h-full overflow-hidden rounded-lg border">
        <div className="absolute left-5 top-5 z-20 rounded-lg border border-border bg-white p-3">
          <Quote className="h-5 w-5 rotate-180 fill-black text-black" />
        </div>

        <div className="absolute inset-0 z-10 bg-black/30" />

        <Image
          src="https://picsum.photos/id/1/2000"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
          alt="logo"
        />

        <div className="absolute inset-x-0 bottom-5 z-20 mx-5">
          <P className="text-justify text-xl font-semibold leading-relaxed text-white">
            &apos;&apos;The Nextjs Auth Basic is truely remarkable. It
            effortlessly adapts to a wide range of research methodologies and
            study designs. &apos;&apos;
          </P>

          <Small className="mt-5 text-white">
            Muhammad Haykal - Frontend Engineer
          </Small>
        </div>
      </div>
    </div>
  );
}

export default LoginImage;
