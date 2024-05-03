/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BioIcon = () => {
  return (
    <motion.div
      className="h-[115px] w-[115px] bg-primary rounded-full flex items-center justify-center absolute -left-6"
      initial={{ scale: 0, opacity: 0, rotate: 360 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <Image
        src="/images/icons/bio.png"
        alt="bio-icon"
        width={40}
        height={24}
      />
    </motion.div>
  );
};

export default BioIcon;
