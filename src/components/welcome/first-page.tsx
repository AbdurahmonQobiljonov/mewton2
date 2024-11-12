import Link from 'next/link';
import { Coin } from '../coin';
import { WelcomeBottom } from '../welcome-bottom';
import { WelcomeHead } from '../welcome-head';

export const WelcomeFirstPage = () => {
  return (
    <div className="bg-welcomeBg flex justify-center">
      <div className="w-full  text-white h-screen font-bold flex flex-col max-w-xl">
        <WelcomeHead />
        <div className="flex flex-1 flex-col items-center justify-between mt-5">
          <div className="text-center w-[85%]">
            <h3 className="text-2xl font-semibold">
              Play & Earn <span className="text-orange">TON</span>
            </h3>
            <span className="text-xs font-medium">
              The first p2e game where profits already have their{' '}
              <span className="text-orange">real value</span>
            </span>
          </div>
          <Coin />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-4xl text-orange flex gap-4">
              LOTS OF <img className="w-10" src="/ton.svg" alt="" />
            </span>
            <span className="font-semibold text-4xl ">PER DAY</span>
          </div>
          <span className="text-xs text-center font-medium text-welcomeText">
            Tap and earn TON directly in the app!
          </span>
        </div>
        <Link href="welcome2">
          <WelcomeBottom activeTab={1} />
        </Link>
      </div>
    </div>
  );
};
