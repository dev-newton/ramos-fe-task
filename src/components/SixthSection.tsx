/** @format */

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const SixthSection = () => {
  return (
    <section className="mt-[60px]">
      <div className=" mx-auto container w-full">
        <div className="mt-[190px] mb-[30px] flex justify-center items-center">
          <motion.div
            className="w-[125px] h-[125px] flex justify-center items-center rounded-[30px] bg-primary"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/icons/infinity.png"
              alt="infinity-icon"
              width={50}
              height={20}
            />
          </motion.div>
        </div>
        <motion.h1
          className="text-dark-gray leading-[150px] text-center"
          initial={{ y: 100, opacity: 0, rotate: 10 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Get Started
        </motion.h1>
        <p className="text-2xl text-[#c9c9c9] text-medium text-center mt-5 mb-[60px]">
          Turn information into advantage! Start using
          <br />
          Ramos today. Sign up for a free trial.
        </p>
        <div className="flex gap-2.5 justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button label="Request a demo" variant="default" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button label="Start for free" variant="primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
