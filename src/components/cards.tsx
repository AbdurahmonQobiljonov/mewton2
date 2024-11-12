export const Cards = () => {
  return (
    <div className="grid grid-cols-2 gap-3 w-[95%] ">
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
        <img className="w-[69px]" src="/cat8.png" alt="" />
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
        <img className="w-[69px]" src="/cat10.png" alt="" />
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
        <img className="w-[69px]" src="/cat4.png" alt="" />
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
        <img className="w-[69px]" src="/cat1.png" alt="" />
        <button className="bg-orange w-full rounded-lg p-1 font-bold text-xs flex flex-col items-center">
          Buy{' '}
          <span className="text-[8px] flex gap-1 items-center">
            +1.00 <img className="w-[10px]" src="/ton.svg" alt="" />
          </span>
        </button>
      </div>
    </div>
  );
};
