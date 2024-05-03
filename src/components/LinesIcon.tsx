/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const LinesIcon = () => {
  return (
    <motion.div
      className="h-[115px] w-[115px] bg-secondary rounded-full flex items-center justify-center mt-10 mx-6"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <Image
        src="/images/icons/lines.png"
        alt="bio-icon"
        width={40}
        height={24}
      />
    </motion.div>
  );
};

export default LinesIcon;
