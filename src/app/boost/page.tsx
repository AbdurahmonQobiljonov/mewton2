import { BottomTabs } from '@/components/bottom-tabs';

export default function Boost() {
  return (
    <div className="bg-welcomeBg flex justify-center">
      <div className="w-full text-white h-screen font-bold flex flex-col max-w-xl py-5">
        <div className="flex justify-between items-center  px-4">
          <div className="flex gap-5 items-center">
            <div className="w-12 h-12 bg-light rounded-md text-xs flex items-center justify-center text-center">
              user avatar
            </div>
            <span className="text-xs">Name</span>
          </div>
          <button className="bg-primary rounded-xl font-medium text-xs px-4 py-2">
            Connect wallet
          </button>
        </div>
        <div className="flex-1 mx-3 mt-5 w-[93%] flex flex-col items-center overflow-auto scrollbar-hide">
          <div className="flex flex-col items-center gap-7 w-full">
            <h1 className="text-3xl flex gap-2 items-center">
              <img className="w-[40px]" src="/ton.svg" alt="" />
              1000
            </h1>
            <button className="bg-orange w-3/4 h-12 rounded-xl font-bold text-lg">
              Top up balance
            </button>
            <span className="text-3xl">Boosts</span>
          </div>
          <span className="text-[10px] my-4">
            boost can be purchased again only after some time
          </span>
          <div className="grid grid-cols-2 gap-3 w-[95%] mb-32">
            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Loki
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/moneta.png" alt="" />
                  2000
                </span>
              </div>
              <img className="w-[79px]" src="/cat8.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1 font-bold text-xs flex flex-col items-center">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center">
                  +0.01 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Leo
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/ton.svg" alt="" />
                  0.1
                </span>
              </div>
              <img className="w-[79px]" src="/cat10.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1 font-bold text-xs flex flex-col items-center">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center">
                  +0.15 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Luna
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/ton.svg" alt="" />
                  0.2
                </span>
              </div>
              <img className="w-[79px]" src="/cat4.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1 font-bold text-xs flex flex-col items-center">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center">
                  +0.30 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Roxy
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/ton.svg" alt="" />
                  0.6
                </span>
              </div>
              <img className="w-[79px]" src="/cat1.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1 font-bold text-xs flex flex-col items-center">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center">
                  +1.00 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Ava
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/ton.svg" alt="" />
                  1.0
                </span>
              </div>
              <img className="w-[79px]" src="/cat6.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1 font-bold text-xs flex flex-col items-center">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center">
                  +1.60 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Miko
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/ton.svg" alt="" />
                  2.0
                </span>
              </div>
              <img className="w-[79px]" src="/cat9.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1 font-bold text-xs flex flex-col items-center">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center ">
                  +3.00 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Rush
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/ton.svg" alt="" />
                  3.0
                </span>
              </div>
              <img className="w-[79px]" src="/cat5.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1 text-xs flex flex-col items-center font-bold">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center">
                  +4.50 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Hank
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/ton.svg" alt="" />
                  5.0
                </span>
              </div>
              <img className="w-[79px]" src="/cat2.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1 text-xs flex flex-col items-center font-bold">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center">
                  +8.00 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>

            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Rico
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/ton.svg" alt="" />
                  15.0
                </span>
              </div>
              <img className="w-[79px]" src="/cat7.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1  text-xs flex flex-col items-center font-bold">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center">
                  +22.00 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="bg-cardBg rounded-2xl p-4 flex flex-col justify-between items-center gap-2">
              <div className="flex justify-between items-center w-full">
                <span className="text-[10px] flex gap-2 items">
                  <img className="w-[12px]" src="/convert.png" alt="" />
                  Cash
                </span>
                <span className="text-[10px] flex gap-1 items-center">
                  <img className="w-[12px]" src="/ton.svg" alt="" />
                  40.0
                </span>
              </div>
              <img className="w-[79px]" src="/cat3.png" alt="" />
              <button className="bg-orange w-full rounded-lg p-1  text-xs flex flex-col items-center font-bold">
                Buy{' '}
                <span className="text-[8px] flex gap-1 items-center">
                  +55.00 <img className="w-[10px]" src="/ton.svg" alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <BottomTabs />
      </div>
    </div>
  );
}
