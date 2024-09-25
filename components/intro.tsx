"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="Neeraj"
              src={`/images/w.jpg`}
              width="192"
              height="192"
              quality="90"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }}
          >
            🔥
          </motion.span>
        </div>
      </div>
      <p className="flex items-center justify-center gap-2">
        <span className="font-bold">Hi, I am Neeraj kasheety,</span> I'm <span className="font-bold">Software Enginner</span> with 4 years of Experience
        in MERN
      </p>
    </section>
  );
}
