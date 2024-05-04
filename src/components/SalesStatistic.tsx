/** @format */

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import useComponentInView from "@/hooks/useComponentInView";
import FilesIcon from "./FilesIcon";

const SalesStatistic = () => {
  const counter1 = useComponentInView({ from: 10, to: 56 });
  const counter2 = useComponentInView({ from: 14, to: 60 });
  const counter3 = useComponentInView({ from: 25, to: 58 });

  return (
    <div className="border-[1.5px] border-r-0 border-b-0 rounded-bl-none rounded-tr-none border-gray-200 rounded-[30px] px-4 pt-4 -mt-3">
      <p className="text-dark-grey font-medium text-lg">Sales statistic</p>
      <motion.div
        className="flex gap-6 mb-5 items-end"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="flex gap-4 mb-4">
         <FilesIcon />
          <div className="flex flex-col mb-1">
            <p className="text-[#c5c5c5] text-[15px] font-medium">
              Total Profit
            </p>
            <h3 className="text-3xl">$264,2K</h3>
          </div>
        </div>
        <div className="bg-[#f6f6f6] rounded-2xl px-[18px] pb-[12px] pt-3 w-[136px] relative">
          <p className="text-sm text-dark-grey font-medium">Visitors</p>
          <motion.progress
            ref={counter2.ref}
            className="progress mt-4 h-1 w-full"
            value={counter2.value}
            max="100"
            viewport={{ once: true }}
          ></motion.progress>
          <motion.h4
            ref={counter1.ref}
            className="text-3xl mt-1"
            viewport={{ once: true }}
          >
            {counter1.value}k
          </motion.h4>
          <Image
            src="/images/icons/green-percent-white-bg.png"
            alt="green-percent-icon"
            width={46}
            height={40}
            className="absolute top-14 right-5"
          />
        </div>
      </motion.div>
      <motion.div
        className="border-[1.5px] border-gray-200 rounded-xl px-4 pb-[22px] pt-2 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <p className="font-medium text-sm">Visit statistics</p>
        <div>
          <Image
            src="/images/graph-1.png"
            alt="files-icon"
            width={300}
            height={260}
          />
          <div className="bg-primary text-white rounded-xl px-4 pt-3 pb-2 bottom-5 w-[120px] absolute right-6">
            <p className="text-[12px]">Rate</p>
            <h2 className="text-[28px] font-light">
              <motion.span
                ref={counter3.ref}
                className="text-sm"
                viewport={{ once: true }}
              >
                +&nbsp;
              </motion.span>
              {counter3.value}%
            </h2>
            <Image
              src="/images/icons/pentagon.png"
              alt="files-icon"
              width={20}
              height={12}
              className="absolute top-4 right-3"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SalesStatistic;
