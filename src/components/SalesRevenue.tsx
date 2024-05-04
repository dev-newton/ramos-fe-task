/** @format */

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import useComponentInView from "@/hooks/useComponentInView";

const SalesRevenue = () => {
  const counter1 = useComponentInView({ from: 10, to: 131 });

  return (
    <motion.div
      className="border-[0.3px] border-gray-200 border-b-0 rounded-[30px] p-6 pb-4 text-left bg-white w-[235px] absolute top-10 left-[200px]"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-base font-medium text-[#c5c5c5] text-left">
        Sales revenue
      </h3>

      <h2 className="text-3xl font-medium mt-1">
        <span ref={counter1.ref} className="text-lg">
          $
        </span>
        {counter1.value},2K
      </h2>
      <motion.div
        className="progress-custom mt-4 mb-3"
        initial={{ width: 0 }}
        whileInView={{ width: `100%` }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/icons/woman-1.png"
              alt="woman-icon"
              width={40}
              height={20}
            />
            <p className="text-[#c5c5c5] text-[12px] font-medium">Min. price</p>
          </div>
          <p className="text-[13px] font-medium">1,200$</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/icons/woman-2.png"
              alt="woman-icon"
              width={40}
              height={20}
            />
            <p className="text-[#c5c5c5] text-[12px] font-medium">Min. price</p>
          </div>
          <p className="text-[13px] font-medium">2,320$</p>
        </div>
      </div>
      <hr className="border-gray-200  border-0 border-t-[1px] my-3" />
      <div className="flex justify-between items-center">
        <p className="text-[#c5c5c5] text-[12px] font-medium">
          Engagement rate
        </p>
        <p className="text-[13px] font-medium">47.84%</p>
      </div>
    </motion.div>
  );
};

export default SalesRevenue;
