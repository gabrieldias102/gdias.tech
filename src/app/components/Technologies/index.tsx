import Image from "next/image";

import nextLogo from "images/nextjs-logo.png";
import reactLogo from "images/reacjs-logo.png";
import typeScriptLogo from "images/typescript-logo.png";
import tailwindCSSLogo from "images/tailwindcss-logo.png";
import mySQLLogo from "images/mysql-logo.png";

import { motion } from "framer-motion";

export default function Technologies() {
  return (
    <div
      id="techs"
      className="bg-dark-background-secondary h-full flex flex-col mx-auto text-center gap-12 py-8 px-20"
    >
      <motion.h1
        className="text-xl font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Technologies and Tools I Work With
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row lg:w-1/3 gap-12 justify-center items-center mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </div>
  );
}
