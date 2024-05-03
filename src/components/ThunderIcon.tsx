/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ThunderIcon = () => {
  return (
    <motion.div
      className="h-[115px] w-[115px] bg-[#f2f2f2] rounded-full flex items-center justify-center absolute right-0"
      initial={{ opacity: 0, rotate: 360 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <Image
        src="/images/icons/thunder.png"
        alt="thunder-icon"
        width={36}
        height={20}
      />
    </motion.div>
  );
};

export default ThunderIcon;
