/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ConversionRate = () => {
  return (
    <motion.div
      className="border-[0.3px] border-gray-200 border-b-0 rounded-[30px] px-[50px] pt-[30px] pb-[40px] text-center bg-white w-fit"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-base font-medium">Conversion rate</h3>
      <div className="my-4 bg-secondary rounded-lg px-6 h-[100px] w-fit mx-auto flex justify-center items-center relative">
        <h2 className="text-[54px] font-medium leading-none">
          2,3<span className="text-3xl">%</span>
        </h2>
        <Image
          src="/images/icons/yellow-icon.png"
          alt="woman-icon"
          width={30}
          height={20}
          className="absolute -top-3 -left-4"
        />
      </div>
      <p className="text-[#c5c5c5] text-sm font-medium">
        Percentage of
        <br />
        website visitors
      </p>
    </motion.div>
  );
};

export default ConversionRate;
