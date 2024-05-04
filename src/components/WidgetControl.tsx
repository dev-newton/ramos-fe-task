/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import useComponentInView from "@/hooks/useComponentInView";

const WidgetControl = () => {
  const counter4 = useComponentInView({ from: 1, to: 43 });

  return (
    <div className="bg-dark-gray rounded-[30px] text-white py-[46px] flex flex-col gap-10">
      <div className="flex gap-2 px-20">
        <motion.div
          className="bg-[#121111] border-[0.5px] border-[#3e3d3d] rounded-[30px] pt-8 pb-[34px] px-12 flex flex-col gap-4 items-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/icons/files-yellow.png"
            alt="yellow-files-icon"
            width={46}
            height={40}
          />
          <Image
            src="/images/icons/two-female-profiles.png"
            alt="yellow-files-icon"
            width={84}
            height={40}
          />
        </motion.div>
        <motion.div
          className="bg-[#121111] border-[0.5px] border-[#3e3d3d] rounded-[30px] pt-8 pb-[34px] h-[176px] pl-8 pr-[60px] relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
        >
          <p className="text-[13px] text-[#c5c5c5] font-medium">Transactions</p>
          <Image
            src="/images/icons/green-percent-black-bg.png"
            alt="green-percent-icon"
            width={46}
            height={40}
            className="absolute top-16 right-4"
          />
          <motion.h2
            ref={counter4.ref}
            className="absolute top-[78px] text-[52px] font-light"
            viewport={{ once: true }}
          >
            {counter4.value}K
          </motion.h2>
        </motion.div>
      </div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-[26px] mb-3">Widget control</h3>
        <p className="text-[#717171] text-lg">
          Reports provide a comprehensive overview <br />
          of important aspects of web analytics
        </p>
      </motion.div>
    </div>
  );
};

export default WidgetControl;
