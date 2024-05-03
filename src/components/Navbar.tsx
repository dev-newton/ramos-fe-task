/** @format */

"use client";
import { motion } from "framer-motion";

import LogoIcon from "./LogoIcon";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="mx-6 my-4">
      <motion.div
        className="bg-dark-gray w-full h-[70px] rounded-xl pl-4 pr-2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center justify-between h-full">
          <LogoIcon />
          <NavLinks />
          <motion.button
            className="px-10 h-[54px] bg-white rounded-xl text-sm font-medium"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            Sign Up
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
