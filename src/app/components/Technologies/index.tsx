import Image from "next/image";

import nextLogo from "images/nextjs-logo.png";
import reactLogo from "images/reacjs-logo.png";
import typeScriptLogo from "images/typescript-logo.png";
import tailwindCSSLogo from "images/tailwindcss-logo.png";
import mySQLLogo from "images/mysql-logo.png";

export default function Technologies() {
  return (
    <div
      id="techs"
      className="bg-dark-background-secondary h-full flex flex-col mx-auto text-center gap-12 py-8 px-20"
    >
      <h1 className="text-xl font-semibold">
        Technologies and Tools I Work With
      </h1>
      <div className="flex flex-col sm:flex-row lg:w-1/3 gap-12 justify-center items-center mx-auto">
        <Image
          src={typeScriptLogo}
          alt="The logo of TypeScript"
          height={30}
          quality={100}
        />
        <Image
          src={reactLogo}
          alt="The logo of React.js"
          height={30}
          quality={100}
        />
        <Image
          src={mySQLLogo}
          alt="The logo of MySQL"
          height={30}
          quality={100}
        />
        <Image
          src={tailwindCSSLogo}
          alt="The logo of Tailwind CSS"
          height={30}
          quality={100}
        />
        <Image
          src={nextLogo}
          alt="The logo of Next.js"
          height={30}
          quality={100}
        />
      </div>
    </div>
  );
}
