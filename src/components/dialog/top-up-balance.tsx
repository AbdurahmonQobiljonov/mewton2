import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronDown } from 'lucide-react';

interface IProps {
  title: string;
}
export const TopUpBalance = ({ title }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-orange w-[250px] h-12 rounded-xl font-bold text-lg">{title}</button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-5 items-center">
          <span className="flex items-center gap-2">
            <img className="w-[20px]" src="/ton.svg" alt="" />
            UJF...33_
            <ChevronDown />
          </span>
          <span className="text-2xl font-bold">Top up</span>
          <div className="w-full h-[1px] bg-slate-300" />
          <input
            type="number"
            placeholder="Enter the amount in TON"
            className="w-full rounded-md px-3 py-1 bg-cardBg font-normal"
          />
          <div className="w-full flex flex-col justify-between gap-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold">Fee</span>
              <span className="text-xs font-bold">Will be credited</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold">3%</span>
              <span className="text-xs font-bold">0</span>
            </div>
          </div>
          <button className="bg-orange w-full rounded-lg p-1 font-semibold text-base">
            Top up
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
