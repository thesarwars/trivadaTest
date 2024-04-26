import React from "react";
import { Teko, Open_Sans } from "next/font/google";
import Image from "next/image";
import tespak from "../../public/images/tespak.png";
import battery from "../../public/images/battery.png";
import y_info from "../../public/images/y_info.png";
import network from "../../public/images/network.png";
import y_arrow from "../../public/images/y_arrow.png";
import battery_left from "../../public/images/battery_left.png";
import line_chart from "../../public/images/line_chart.png";
import speed from "../../public/images/speed.png";
import shield from "../../public/images/shield.png";

const teko = Teko({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function SecondTask() {
  return (
    <>
      <div className="bg-black p-5">
        <div className="grid">
          <div className="mx-40 mb-10">
            <div>
              <Image src={tespak} alt="main logo" height={80} width={80} />
            </div>
            <div className="flex justify-between mt-5">
              <div className="ms-10 mb-5">
                <Image
                  src={battery}
                  alt="battery logo"
                  height={120}
                  width={120}
                />
              </div>
              <div className="flex items-center">
                <div
                  className={`${teko.className} text-yellow-400 me-3 text-2xl border border-yellow-400 flex items-center justify-center gap-4 py-2 px-4 rounded-lg w-40`}
                >
                  <span>Set Voltage</span>
                  <Image
                    src={y_arrow}
                    alt="yellow arrow"
                    height={20}
                    width={20}
                  />
                </div>
                <div
                  className={`${teko.className} text-yellow-400 me-3 text-2xl border border-yellow-400 flex items-center justify-center gap-4 py-2 px-4 rounded-lg w-40`}
                >
                  <span>Security</span>
                  <Image
                    src={y_arrow}
                    alt="yellow arrow"
                    height={20}
                    width={20}
                  />
                </div>
                <div className="me-3">
                  <Image
                    src={y_info}
                    alt="yellow info"
                    height={50}
                    width={50}
                  />
                </div>
                <div>
                  <Image
                    src={network}
                    alt="network logo"
                    height={50}
                    width={50}
                  />
                </div>
              </div>
            </div>
          

          <div className={`${teko.className} flex justify-between`}>
            <div className="font-semibold text-white text-3xl">POWER BANK</div>
            <div className="font-semibold text-white text-3xl">72.3 WATTS</div>
          </div>
          <div className={`${openSans.className} flex justify-between`}>
            <div className="font-semibold text-yellow-400 text-2md">
              ID: 2304F041
            </div>
            <div className="font-normal text-yellow-400 text-2md">
              2000 mAh Capacity
            </div>
          </div></div>
          <div className="flex justify-center">
            <div className="gap-2 grid grid-flow-col">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-center rounded-xl border border-gray-600 bg-gradient-to-b from-gray-800 to-transparent w-48 h-48 text-white">
                  <p className="text-gray-500 text-xl mb-3">Temperature</p>
                  <p className={`${teko.className} text-7xl`}>20&deg;</p>
                  <p className="text-xl ms-[-12px] mt-[-10px]">Celcius</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl border border-gray-600 bg-gradient-to-b from-gray-800 to-transparent w-48 h-48 text-white">
                  <p className="text-gray-500 text-xl mb-3">Temperature</p>
                  <p className={`${teko.className} text-7xl`}>20&deg;</p>
                  <p className="text-xl ms-[-12px] mt-[-10px]">Celcius</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl border border-gray-600 bg-gradient-to-b from-gray-800 to-transparent w-48 h-48 text-white">
                <Image
                  src={speed}
                  alt="speed"
                  height={190}
                  width={190}
                  className="mt-4"
                />
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl border border-gray-600 bg-gradient-to-b from-gray-800 to-transparent w-48 h-48 text-white">
                  <p className="text-gray-500 text-xl mb-3">Temperature</p>
                  <p className={`${teko.className} text-7xl`}>20&deg;</p>
                  <p className="text-xl ms-[-12px] mt-[-10px]">Celcius</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center rounded-xl border border-gray-600 bg-gradient-to-b from-gray-800 to-transparent w-48 h-96 text-white">
                <p className="font-normal text-gray-500">Energy</p>
                <Image
                  src={battery_left}
                  alt="battery left"
                  height={358}
                  width={200}
                  className="mt-[55px]"
                />
              </div>
              <div className="grid grid-cols-1">
                <div className="flex justify-between items-center rounded-xl border border-gray-600 bg-gradient-to-b from-gray-800 to-transparent w-[400px] h-24 text-white">
                <Image
                  src={shield}
                  alt="shield left"
                  height={40}
                  width={40}
                  className="ms-10"
                />
                <div className="me-20">
                  <p className="text-gray-500 text-lg mb-3">Your Device is</p>
                  <p className={`${teko.className} text-3xl`}>Unlocked</p></div>
                  <p className="text-3xl me-10 text-yellow-400">&#10003;</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col justify-center items-center rounded-xl border border-gray-600 bg-gradient-to-b from-gray-800 to-transparent w-48 h-48 text-white">
                    <p className="text-gray-500 text-xl mb-3">Temperature</p>
                    <p className={`${teko.className} text-7xl`}>20&deg;</p>
                    <p className="text-xl ms-[-12px] mt-[-10px]">Celcius</p>
                  </div>
                  <div className="flex flex-col justify-center items-center rounded-xl border border-gray-600 bg-gradient-to-b from-gray-800 to-transparent w-48 h-48 text-white">
                    <p className="text-gray-500 text-xl mb-3">Temperature</p>
                    <p className={`${teko.className} text-7xl`}>20&deg;</p>
                    <p className="text-xl ms-[-12px] mt-[-10px]">Celcius</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
            <Image src={line_chart} alt="line chart" height={1000} width={1000} />
        </div>
      </div>
    </>
  );
}
