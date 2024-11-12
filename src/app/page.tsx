'use client';
import { BottomTabs } from '@/components/bottom-tabs';
import { Coin } from '@/components/coin';
import { formatWithSpaces } from '@/lib/helpers/text';
import { useState } from 'react';

export default function Home() {
  const [points, setPoints] = useState(1000);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const pointsToAdd = 1;

  const restPonts = points - 1000;

  const rest = 1000 - restPonts;

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  return (
    <div className="flex justify-center overflow-hidden">
      <div className="w-full text-white max-h-screen font-bold flex flex-col max-w-xl py-5 relative">
        <img
          className="absolute opacity-20 top-0 left-0 bottom-0 right-0 max-h-screen -z-10 "
          src="/bg.png"
          alt=""
        />
        <div className="flex justify-between items-center  px-4">
          <div className="flex gap-5 items-center">
            <div className="w-12 h-12 bg-light rounded-md text-xs flex items-center justify-center text-center">
              user avatar
            </div>
            <span className="text-xs">Name</span>
          </div>
          <button className="bg-primary rounded-xl font-bold text-xs px-4 py-2">
            Connect wallet
          </button>
        </div>
        <div className="flex-1 my-8 mx-4">
          <div className="grid grid-cols-3 gap-5 w-full">
            <div className="bg-cardBg rounded-md flex flex-col items-center justify-between p-2 gap-1">
              <span className="text-xs">total earned</span>
              <span className="text-xs flex gap-2">
                <img className="w-[16px]" src="/ton.svg" alt="" />
                0.00
              </span>
            </div>
            <div className="bg-grayBg rounded-md flex flex-col items-center justify-between p-2 gap-1">
              <span className="text-xs">total earned</span>
              <span className="text-xs flex gap-2">
                <img className="w-[16px] " src="/ton.svg" alt="" />
                0.00
              </span>
            </div>
            <div className="bg-grayBg rounded-md flex flex-col items-center justify-between p-2 gap-1">
              <span className="text-xs">total earned</span>
              <span className="text-xs flex gap-2">
                <img className="w-[16px] " src="/cat.png" alt="" />
                0.00
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 py-2 mt-4 h-[57vh]">
            <h1 className="text-3xl flex gap-2 mt-1 items-center">
              <img className="w-[47px] h-[47px]" src="/moneta.png" alt="" />
              {formatWithSpaces(points)}
            </h1>
            <Coin onClick={handleCardClick} />
            <div className="flex justify-between w-2/3">
              <span className="flex gap-2">
                <img className="w-[26px] h-[26px]" src="/energy.png" alt="" /> {rest}/1000
              </span>
              <span className="flex">
                <img className="w-[26px] h-[26px]" src="/cat.png" alt="" /> 0
              </span>
            </div>
          </div>
        </div>
        <BottomTabs />
      </div>
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {pointsToAdd}
        </div>
      ))}
    </div>
  );
}
