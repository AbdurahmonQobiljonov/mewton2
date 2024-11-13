import { Flame } from 'lucide-react';
import Link from 'next/link';
import { BoostSvg } from './icons/Boost';
import Friends from './icons/Friends';
import { InfoSvg } from './icons/InfoSvg';
import { MainSvg } from './icons/Main';
import { TaskSvg } from './icons/Task';
import { WalletSvg } from './icons/Wallet';

export const BottomTabs = () => {
  return (
    <div className="fixed bottom-5 py-3 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
      <Link href="/" className="text-center text-light w-1/5 flex flex-col items-center">
        <MainSvg />
        <p className="mt-1 text-[9px]">Main</p>
      </Link>
      <Link href="/boost" className="text-center text-light w-1/5 flex flex-col items-center">
        <BoostSvg />
        <p className="mt-1 text-[9px]">Boost</p>
      </Link>
      <Link href="/tasks" className="text-center text-light w-1/5 flex flex-col items-center">
        <TaskSvg />
        <p className="mt-1 text-[9px]">Task</p>
      </Link>
      <Link href="/frends" className="text-center text-light w-1/5 flex flex-col items-center">
        <Friends />
        <p className="mt-1 text-[9px]">Fends</p>
      </Link>
      <Link href="/info" className="text-center text-light w-1/5 flex flex-col items-center">
        <InfoSvg />
        <p className="mt-1 text-[9px]">Info</p>
      </Link>
      <Link href="/wallet" className="text-center text-light w-1/5 flex flex-col items-center">
        <WalletSvg />
        <p className="mt-1 text-[9px]">Wallet</p>
      </Link>
      <Link href="/welcome" className="text-center text-light w-1/5 flex flex-col items-center">
        <Flame />
        <p className="mt-1 text-[9px]">Welcome</p>
      </Link>
    </div>
  );
};
