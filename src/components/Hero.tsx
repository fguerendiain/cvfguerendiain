"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-20 text-center flex flex-col items-center gap-4 overflow-hidden bg-blue-300 dark:bg-blue-700 rounded-2xl" >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute right-30 w-px h-full bg-gray-300"></div>
        <div className="absolute top-80 left-0 w-full h-px bg-gray-300"></div>
        <div
          className="absolute top-[-10%] right-[20%] w-72 h-72 rounded-full border border-gray-300"
          style={{ transform: "rotate(40deg)" }}
        ></div>
        <div
          className="absolute top-[20%] right-[-10%] w-72 h-72 rounded-full border border-gray-300"
          style={{ transform: "rotate(40deg)" }}
        ></div>
      </div>

      <Image
        src="/avatar.webp"
        alt="Foto de Franco Guerendiain"
        width={160}
        height={160}
        className="relative rounded-full shadow-md object-cover z-10"
      />

      <motion.h2
        className="relative text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {profile.name}
      </motion.h2>

      <motion.p
        className="relative mt-3 text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {profile.role}
      </motion.p>
    </section>
  );
}
