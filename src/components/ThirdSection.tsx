"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import Button from "./Button";

const ThirdSection = () => {
  return (
    <section className="mt-[55px]">
        <div className=" mx-auto container w-full">
          <motion.h1
            className="text-dark-gray leading-[130px]"
            initial={{ y: 100, opacity: 0, rotate: 10 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Maximize <span className="text-[#cccccc]">efficiency</span>
            <br />
            with our intuitive
          </motion.h1>

          <div className="flex relative items-center mt-6">
            <div className="relative flex">
              <motion.div
                className="h-[160px] w-[160px] bg-[#f2f2f2] rounded-full flex items-center justify-center z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/icons/heartbeat.png"
                  alt="thunder-icon"
                  width={112}
                  height={20}
                />
              </motion.div>
              <motion.div
                className="h-[160px] w-[160px] bg-secondary rounded-full flex flex-col items-center justify-center absolute left-[85%] z-10"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-semibold mb-1">45%</h2>
                <p className="text-center text-[12px]">
                  System grow
                  <br />
                  faster
                </p>
              </motion.div>
            </div>
            <div className="bg-secondary h-[182px] w-[518px] rounded-[70px] flex justify-center items-center px-1  absolute left-[755px]">
              <Marquee speed={100}>
                <h1 className="text-dark-gray whitespace-nowrap overflow-x-hidden">
                  analytics service &nbsp;
                </h1>
              </Marquee>
            </div>
          </div>
          <motion.hr
            className="border-0 border-b-[1.5px] border-gray-200 mt-[62px] mb-[54px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          <div className="flex relative items-center container">
            <motion.h4
              className="text-dark-gray text-[17px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Explore traffic sources, page behavior, conversations and more to
              gain deep insight
              <br />
              into your audience. With us, your business doesn&apos;t just adapt
              - it evolves
            </motion.h4>
            <div className="flex gap-2.5 absolute left-[880px]">
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
        </div>
        
      </section>
  )
}

export default ThirdSection