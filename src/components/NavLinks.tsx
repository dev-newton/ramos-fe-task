/** @format */

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { routes } from "@/navigation/routes";

const NavLinks = () => {
  return (
    <motion.ul
      className="flex items-center gap-7 bg-[#252525] px-6 h-[54px] rounded-xl text-light-gray text-[12px] font-normal"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {routes.map((route) => (
        <li key={route.name}>
          <Link href={route.path}>{route.name}</Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default NavLinks;
