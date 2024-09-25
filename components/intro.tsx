"use client";

import Image from "next/image";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem]">
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
      <motion.p
        className="mb-10 mt-4 px-4 text-xl font-medium !leading[1.5] sm:text-3xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold ">Hi, I am Neeraj kasheety,</span> I'm a{" "}
        <span className="font-bold">Software Enginner</span>{" "}
        <span>with 4 years of Experience in building SAAS web apps</span>{" "}
        <span className="font-bold">scaling to 100K+ users.</span>
      </motion.p>

      <motion.div
        className="flex flex-col gap-2 sm:flex-row px-4 text-md font-medium"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white group px-7 py-3 flex items-center gap-2 rounded-full hover:scale-105 hover:bg-gray-950 outline-none active:scale-95 transition"
        >
          Contact Me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="bg-white px-7 py-3 flex items-center gap-2 cursor-pointer rounded-full focus:scale-110 hover:scale-105 group outline-none active:scale-95 transition border-black/10"
          href="/CV.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="group-hover:translate-y-1 opacity-70 transition" />
        </a>
        <a
          className="p-4 flex items-center gap-2 rounded-full bg-white focus:scale-110 hover:scale-125 group outline-none active:scale-95 transition border-black/10 cursor-pointer"
          href="https://www.linkedin.com/in/neeraj-kashetty-557b441b0/"
          target="_blank"
        >
          {" "}
          <BsLinkedin />
        </a>
        <a
          className="p-4 flex items-center gap-2 rounded-full text-[1.35rem] bg-white focus:scale-115 hover:scale-125 group outline-none active:scale-95 transition border-black/10 cursor-pointer"
          href="https://github.com/neerajkashetty"
          target="_blank"
        >
          {" "}
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
