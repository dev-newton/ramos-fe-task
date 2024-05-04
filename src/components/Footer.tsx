/** @format */

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="mt-[120px] bg-dark-gray rounded-b-[30px]">
      <div className=" mx-auto container w-full pt-[110px] pb-[20px]">
        <motion.div
          className="flex items-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ul className="flex gap-[44px]">
            <li className="text-[#949494] text-xl">About</li>
            <li className="text-[#949494] text-xl">Why Us</li>
            <li className="text-[#949494] text-xl">Platform</li>
            <li className="text-[#949494] text-xl">Pricing</li>
            <li className="text-[#949494] text-xl">Contacts</li>
          </ul>
          <h2 className="text-white text-[64px] ml-[270px]">hello@ramos.com</h2>
        </motion.div>

        <motion.hr
          className="border-0 border-t-[0.2px] border-[#cccccc] mt-10 mb-14"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="flex items-start"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-[118px]">
            <div>
              <h3 className="font-medium text-white text-lg">
                Warrensville Heights
              </h3>
              <p className="text-[#949494] text-lg">14418 Vineyard Drive, NC</p>
              <p className="text-[#949494] text-lg">44128</p>
            </div>
            <div>
              <h3 className="font-medium text-white text-lg">Saint Louis</h3>
              <p className="text-[#949494] text-lg">1366 Penn Street</p>
              <p className="text-[#949494] text-lg">63101</p>
            </div>
          </div>
          <ul className="text-white text-2xl ml-[750px]">
            <li className="mb-[40px]">Linkedin</li>
            <li className="mb-[35px]">Instagram</li>
            <li>Facebook</li>
          </ul>
        </motion.div>

        <div className="flex items-center">
          <motion.h1
            className="text-white text-[160px]"
            initial={{ y: 100, opacity: 0, rotate: 10 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ramos<sup>&reg;</sup>
          </motion.h1>
          <motion.ul
            className="text-[#949494] text-lg flex gap-[90px] ml-[145px]"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <li>Privacy policy</li>
            <li>License agreement</li>
          </motion.ul>
          <motion.div
            className="ml-[120px]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/icons/qr-code.png"
              alt="infinity-icon"
              width={136}
              height={20}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
