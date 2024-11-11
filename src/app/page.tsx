'use client';
import { BottomTabs } from '@/components/bottom-tabs';
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
    <div className="bg-welcomeBg flex justify-center font-sans overflow-hidden">
      <div className="w-full text-white max-h-screen font-bold flex flex-col max-w-xl py-10 ">
        <img className="absolute opacity-20" src="/bg.png" alt="" />
        <div className="flex justify-between items-center  px-4">
          <div className="  flex gap-5 items-center">
            <div className="w-12 h-12 bg-light rounded-md text-xs flex items-center justify-center text-center">
              user avatar
            </div>
            <span className="text-xs">Name</span>
          </div>
          <button className="bg-primary rounded-xl font-medium text-xs px-4 py-2">
            Connect wallet
          </button>
        </div>
        <div className="flex-1 mx-auto my-10">
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-gray rounded-md flex flex-col items-center justify-between p-2">
              <span className="text-xs">total earned</span>
              <span className="text-xs flex gap-2">
                <img className="w-[15px] h-[15px]" src="/ton.png" alt="" />
                0.00
              </span>
            </div>
            <div className="bg-gray rounded-md flex flex-col items-center justify-between p-2">
              <span className="text-xs">total earned</span>
              <span className="text-xs flex gap-2">
                <img className="w-[15px] h-[15px]" src="/ton.png" alt="" />
                0.00
              </span>
            </div>
            <div className="bg-gray rounded-md flex flex-col items-center justify-between p-2">
              <span className="text-xs">total earned</span>
              <span className="text-xs flex gap-2">
                <img className="w-[15px] h-[15px]" src="/ton.png" alt="" />
                0.00
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between mt-14 gap-5">
            <h1 className="text-3xl flex gap-2">
              <img src="/monetka.png" alt="" />
              {points}
            </h1>
            <div className="px-4 mt-4 flex justify-center">
              <div className="w-80 h-80 p-4 rounded-full circle-outer" onClick={handleCardClick}>
                <div className="w-full h-full rounded-full circle-inner">
                  <img src="/cat (1).png" alt="Main Character" className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="flex justify-between w-2/3">
              <span className="flex gap-2">
                <img src="/energyicon.png" alt="" /> {rest}/1000
              </span>
              <span className="flex">
                <img src="/cat.png" alt="" srcset="" /> 0
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
