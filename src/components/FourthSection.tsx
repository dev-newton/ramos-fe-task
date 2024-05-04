"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const FourthSection = () => {
  return (
    <section className="mt-[120px] bg-light-gray rounded-[120px]">
        <div className=" mx-auto container w-full">
          <div className="flex flex-col">
            <div className="flex pt-[130px] relative">
              <div className="relative w-full">
                <motion.h2
                  className="text-[52px] leading-none font-medium"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                >
                  Turning data into real
                  <br />
                  actions and ideas.
                </motion.h2>

                <ul className="mt-[100px] w-[382px] flex flex-col gap-7">
                  <motion.li
                    className="border-[1.5px] border-gray-200 rounded-[30px] pl-9 pr-7 py-5 flex items-center justify-between"
                    initial={{ opacity: 0, y: 84 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-medium">Instant Insights</h3>
                    <div className="flex justify-center items-center w-[55px] h-[55px] bg-[#f2f2f2] rounded-full cursor-pointer">
                      <h2 className="text-2xl font-normal">+</h2>
                    </div>
                  </motion.li>
                  <motion.li
                    className="border-[1.5px] border-gray-200 rounded-[30px] pl-9 pr-7 py-5 flex items-center justify-between"
                    initial={{ opacity: 0, y: 84 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-medium">AI technology</h3>
                    <div className="flex justify-center items-center w-[55px] h-[55px] bg-[#f2f2f2] rounded-full cursor-pointer">
                      <h2 className="text-2xl font-normal">+</h2>
                    </div>
                  </motion.li>
                  <li className="border-[1.5px] border-gray-200 rounded-[30px] pl-9 pr-7 py-5 flex items-center justify-between">
                    <h3 className="text-2xl font-medium">Easy integration</h3>
                    <div className="flex justify-center items-center w-[55px] h-[55px] bg-[#f2f2f2] rounded-full cursor-pointer">
                      <h2 className="text-2xl font-normal">+</h2>
                    </div>
                  </li>
                </ul>
              </div>
              <motion.div
                className="absolute left-[450px] mt-1 z-20"
                initial={{ opacity: 0, y: 184 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/laptop-phone.png"
                  alt="laptop-phone-icon"
                  width={815}
                  height={683}
                />
              </motion.div>
            </div>
            <motion.h1 className="text-primary text-[420px] leading-none z-10 font-bold"
             initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
             whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
             transition={{ duration: 1.5, delay: 0.3}}
             viewport={{ once: true }}
            >Ramos</motion.h1>
          </div>
        </div>
      </section>
  )
}

export default FourthSection