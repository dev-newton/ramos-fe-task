/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ThunderIcon from "./ThunderIcon";
import BioIcon from "./BioIcon";
import LinesIcon from "./LinesIcon";

const HeroSection = () => {
  return (
    <section className="mt-[110px] mx-auto w-full container">
      <div className="flex gap-4 items-start ml-[90px]">
        <motion.div
          className="py-4 relative ml-[110px]"
          initial={{ scale: 0, opacity: 0, rotate: 15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ThunderIcon />
          <BioIcon />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0, rotate: 10 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full relative"
        >
          <h1 className="ml-[100px] text-dark-gray -mt-1.5">Analytics</h1>
          <h1 className=" -ml-[225px] -mt-[48px] text-dark-gray">
            that <span className="text-[#cccccc]">helps</span> you
          </h1>
          <h1 className="mt-[-40px] ml-2.5 text-dark-gray w-full flex">
            shape <LinesIcon />
            <span className=""> the future</span>
          </h1>
          <motion.div
            className="absolute top-0 left-[600px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Image
              src="/images/monitor-1.png"
              alt="bio-icon"
              width={440}
              height={536}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
