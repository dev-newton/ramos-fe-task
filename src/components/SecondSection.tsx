/** @format */

"use client";
import { motion } from "framer-motion";

import SalesStatistic from "@/components/SalesStatistic";
import WidgetControl from "@/components/WidgetControl";
import Button from "./Button";

const SecondSection = () => {
  return (
    <motion.section
      className="mt-[100px] bg-light-gray rounded-[120px] scroll-mt-[20px]"
      initial={{ opacity: 0, y: 180 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <div className=" mx-auto container w-full">
        <motion.div
          className="flex items-center pt-[124px]"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-dark-gray font-medium text-[52px] leading-none">
            Your key to strategic <br />
            success through analytics
          </h2>
          <h5 className="text-dark-gray text-[24px] font-normal ml-[274px]">
            Ready for exiting, instantaneous, <br /> all-accessible insights in
            real time?
          </h5>
        </motion.div>
        <div className="flex gap-[18px] mt-20">
          <div className="border-[1.5px] border-gray-200 rounded-[30px] flex gap-[48px] bg-white p-[42px] pr-0 pb-0">
            <div className="pb-7">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Button label="Setting up reports" variant="secondary" size="sm" />
              </motion.div>
              <div className="mt-[90px]">
                <motion.h4
                  className="text-[26px] mb-4 text-dark-gray font-normal"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  Fast and easy access <br /> to analytics
                </motion.h4>
                <motion.p
                  className="text-[#c5c5c5] text-lg"
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  One platform is a comprehensive
                  <br /> system of solutions that will be the <br />
                  first step towards digitalization of <br />
                  your business!
                </motion.p>
              </div>
            </div>
            <SalesStatistic />
          </div>
          <WidgetControl />
        </div>
        <div className="flex gap-4 items-center justify-center mt-4 pb-[90px]">
          <h1 className="text-[124px] ml-[45px]">
            <span className="text-3xl mr-3">Up to</span>45%
          </h1>
          <motion.p
            className="text-xl ml-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            Increase your analytics efficiency by up to 45%. Unique <br />{" "}
            algorithms provide insights from data, reduce time for analysis{" "}
            <br />
            and save time for making important, informed decisions
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default SecondSection;
