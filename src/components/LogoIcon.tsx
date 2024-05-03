/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const LogoIcon = () => {
  return (
    <motion.div
      className="flex items-center"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/images/icons/logo-white.png"
        alt="logo"
        width={70}
        height={100}
        className="w-full "
      />
    </motion.div>
  );
};

export default LogoIcon;
