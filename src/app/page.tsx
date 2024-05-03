/** @format */
"use client";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <section className="mt-[100px] bg-light-gray rounded-[120px]">
        <div className=" mx-auto container w-full">
          <div className="flex items-center pt-[124px]">
            <h2 className="text-dark-gray font-medium text-[52px] leading-none">
              Your key to strategic <br />
              success through analytics
            </h2>
            <h5 className="text-dark-gray text-[24px] font-normal ml-[274px]">
              Ready for exiting, instantaneous, <br /> all-accessible insights
              in real time?
            </h5>
          </div>
          <div className="flex gap-[18px] mt-20">
            <div className="border-[1.5px] border-gray-200 rounded-[30px] flex gap-[48px] bg-white p-[42px] pr-0 pb-0">
              <div className="pb-7">
                <button className="bg-secondary text-black rounded-lg p-[18px] text-[12px] leading-[0px] font-medium">
                  Setting up reports
                </button>
                <div className="mt-[90px]">
                  <h4 className="text-[26px] mb-4 text-dark-gray font-normal">
                    Fast and easy access <br /> to analytics
                  </h4>
                  <p className="text-[#c5c5c5] text-lg">
                    One platform is a comprehensive
                    <br /> system of solutions that will be the <br />
                    first step towards digitalization of <br />
                    your business!
                  </p>
                </div>
              </div>
              <div className="border-[1.5px] border-r-0 border-b-0 rounded-bl-none rounded-tr-none border-gray-200 rounded-[30px] px-4 pt-4 -mt-3">
                <p className="text-dark-grey font-medium text-lg">
                  Sales statistic
                </p>
                <div className="flex gap-6 mb-5 items-end">
                  <div className="flex gap-4 mb-4">
                    <div className="rounded-full w-[56px] h-[56px] bg-primary flex items-center justify-center">
                      <Image
                        src="/images/icons/files.png"
                        alt="files-icon"
                        width={24}
                        height={34}
                      />
                    </div>
                    <div className="flex flex-col mb-1">
                      <p className="text-[#c5c5c5] text-[15px] font-medium">
                        Total Profit
                      </p>
                      <h3 className="text-3xl">$264,2K</h3>
                    </div>
                  </div>
                  <div className="bg-[#f6f6f6] rounded-2xl px-[18px] pb-[12px] pt-3 w-[136px] relative">
                    <p className="text-sm text-dark-grey font-medium">
                      Visitors
                    </p>
                    <progress
                      className="progress mt-4 h-1 w-full"
                      value="20"
                      max="100"
                    ></progress>
                    <h4 className="text-3xl mt-1">56k</h4>
                    <Image
                      src="/images/icons/green-percent-white-bg.png"
                      alt="green-percent-icon"
                      width={46}
                      height={40}
                      className="absolute top-14 right-5"
                    />
                  </div>
                </div>
                <div className="border-[1.5px] border-gray-200 rounded-xl px-4 pb-[22px] pt-2 relative">
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
                        <span className="text-sm">+&nbsp;</span>58%
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
                </div>
              </div>
            </div>
            <div className="bg-dark-gray rounded-[30px] text-white py-[46px] flex flex-col gap-10">
              <div className="flex gap-2 px-20">
                <div className="bg-[#121111] border-[0.5px] border-[#3e3d3d] rounded-[30px] pt-8 pb-[34px] px-12 flex flex-col gap-4 items-center">
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
                </div>
                <div className="bg-[#121111] border-[0.5px] border-[#3e3d3d] rounded-[30px] pt-8 pb-[34px] h-[176px] pl-8 pr-[60px] relative">
                  <p className="text-[13px] text-[#c5c5c5] font-medium">
                    Transactions
                  </p>
                  <Image
                    src="/images/icons/green-percent-black-bg.png"
                    alt="green-percent-icon"
                    width={46}
                    height={40}
                    className="absolute top-16 right-4"
                  />
                  <h2 className="absolute top-[78px] text-[52px] font-light">
                    43K
                  </h2>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-[26px] mb-3">Widget control</h3>
                <p className="text-[#717171] text-lg">
                  Reports provide a comprehensive overview <br />
                  of important aspects of web analytics
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-center mt-4 pb-[90px]">
            <h1 className="text-[124px] ml-[45px]">
              <span className="text-3xl mr-3">Up to</span>45%
            </h1>
            <p className="text-xl ml-5">
              Increase your analytics efficiency by up to 45%. Unique <br />{" "}
              algorithms provide insights from data, reduce time for analysis{" "}
              <br />
              and save time for making important, informed decisions
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
