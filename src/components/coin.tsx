interface CoinProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Coin = ({ onClick }: CoinProps) => {
  return (
    <div className="px-4 mt-4 flex justify-center">
      <div className="p-4 rounded-full circle-outer" onClick={onClick}>
        <div className="w-full h-full rounded-full circle-inner">
          <img src="/cat.png" alt="Main Character" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
