import React from "react";
import Image from "next/image";
export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center ">
        <div>
          <Image
            src="/zahra.jpg"
            alt="zahra portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full "
          />
        </div>
      </div>
    </section>
  );
}
