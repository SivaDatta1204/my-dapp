import { FC } from "react";

export type PoolTableComponentProps = {};

export const PoolTableComponent: FC<PoolTableComponentProps> = ({}) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl">
      <div className="grid grid-cols-5 gap-4 p-6 text-lg text-gray-400 border-b border-gray-800">
        <div>Asset</div>
        <div>APY</div>
        <div>TVL</div>
        <div>Your Balance</div>
        <div></div>
      </div>

      {/* USDC Pool */}
      <div className="grid items-center grid-cols-5 gap-4 p-6 transition-colors border-b border-gray-800 hover:bg-gray-800">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">💎</span>
          <span className="text-lg font-medium">USDC Pool</span>
        </div>
        <div className="text-lg font-medium text-green-400">4.12%</div>
        <div className="text-lg">$42.5M</div>
        <div className="text-lg">-</div>
        <div>
          <button className="w-full px-6 py-3 font-medium transition-opacity rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
            Deposit
          </button>
        </div>
      </div>

      {/* ETH Pool */}
      <div className="grid items-center grid-cols-5 gap-4 p-6 transition-colors border-b border-gray-800 hover:bg-gray-800">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">⚡</span>
          <span className="text-lg font-medium">ETH Pool</span>
        </div>
        <div className="text-lg font-medium text-green-400">3.85%</div>
        <div className="text-lg">$128.7M</div>
        <div className="text-lg">-</div>
        <div>
          <button className="w-full px-6 py-3 font-medium transition-opacity rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
            Deposit
          </button>
        </div>
      </div>

      {/* USDT Pool */}
      <div className="grid items-center grid-cols-5 gap-4 p-6 transition-colors hover:bg-gray-800">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">💫</span>
          <span className="text-lg font-medium">USDT Pool</span>
        </div>
        <div className="text-lg font-medium text-green-400">4.05%</div>
        <div className="text-lg">$38.2M</div>
        <div className="text-lg">-</div>
        <div>
          <button className="w-full px-6 py-3 font-medium transition-opacity rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoolTableComponent;
