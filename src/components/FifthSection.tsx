"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import ConversionRate from "./ConversionRate";
import SalesRevenue from "./SalesRevenue";

const FifthSection = () => {
  return (
    <section className="mt-[60px] h-[900px]">
        <div className=" mx-auto container w-full">
          <motion.h1
            className="text-dark-gray leading-[150px]"
            initial={{ y: 100, opacity: 0, rotate: 10 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We give you full
            <br />
            <span className="text-[#cccccc]">control</span> over your data
          </motion.h1>

          <div className="flex gap-5 items-center mt-[70px]">
            <motion.div
              className="px-[100px] pt-[46px] pb-[50px] border-[1.5px] border-gray-200 rounded-[30px] bg-light-gray w-fit"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <ConversionRate />
                <SalesRevenue />
              </div>
              <div className="mt-[90px] text-center">
                <h4 className="text-[26px] mb-4 text-dark-gray font-medium">
                  Improved customer service
                </h4>
                <p className="text-dark-gray text-lg">
                  Analytics helps optimize service processes by
                  <br />
                  providing information on how to improve interactions
                  <br />
                  with customers and increase their satisfaction.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="px-[100px] border-[1.5px] pt-[46px] pb-[50px] border-gray-200 rounded-[30px] bg-light-gray w-fit"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/insights.png"
                  alt="insights-image"
                  width={435}
                  height={200}
                />
              </motion.div>
              <div className="mt-[50px] text-center">
                <h4 className="text-[26px] mb-4 text-dark-gray font-medium">
                  Monitoring key indicators
                </h4>
                <p className="text-dark-gray text-lg">
                  Analytics platforms allow businesses to track
                  <br />
                  KPIs, an important tool for measuring success
                  <br />
                  and achieving goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}

export default FifthSection