import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig } from "wagmi";
import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { injected, metaMask, walletConnect } from "wagmi/connectors";
import Web3Demo from "./components/Web3Demo";
import "./index.css";

const config = createConfig({
  chains: [mainnet],
  connectors: [
    injected(),
    metaMask(),
    walletConnect({
      projectId: "56b34f733ed6b00d67790e266d270de4",
    }),
  ],
  transports: {
    [mainnet.id]: http(),
  },
});

const queryClient = new QueryClient();

export const EarnPage = () => {
  return (
    <div className="flex justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-bold mb-4">Earn</h2>
          <p className="text-xl text-gray-400">
            Deposit your assets and earn yield
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-400 text-lg mb-2">Total Value Locked</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              $209.4M
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-400 text-lg mb-2">Total Users</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              12.8K
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <p className="text-gray-400 text-lg mb-2">Average APY</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              4.01%
            </p>
          </div>
        </div>

        {/* Pool Table */}
        <div className="bg-gray-900 rounded-xl border border-gray-800">
          <div className="grid grid-cols-5 gap-4 p-6 text-gray-400 text-lg border-b border-gray-800">
            <div>Asset</div>
            <div>APY</div>
            <div>TVL</div>
            <div>Your Balance</div>
            <div></div>
          </div>

          {/* USDC Pool */}
          <div className="grid grid-cols-5 gap-4 p-6 items-center border-b border-gray-800 hover:bg-gray-800 transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💎</span>
              <span className="font-medium text-lg">USDC Pool</span>
            </div>
            <div className="text-green-400 font-medium text-lg">4.12%</div>
            <div className="text-lg">$42.5M</div>
            <div className="text-lg">-</div>
            <div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Deposit
              </button>
            </div>
          </div>

          {/* ETH Pool */}
          <div className="grid grid-cols-5 gap-4 p-6 items-center border-b border-gray-800 hover:bg-gray-800 transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <span className="font-medium text-lg">ETH Pool</span>
            </div>
            <div className="text-green-400 font-medium text-lg">3.85%</div>
            <div className="text-lg">$128.7M</div>
            <div className="text-lg">-</div>
            <div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Deposit
              </button>
            </div>
          </div>

          {/* USDT Pool */}
          <div className="grid grid-cols-5 gap-4 p-6 items-center hover:bg-gray-800 transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💫</span>
              <span className="font-medium text-lg">USDT Pool</span>
            </div>
            <div className="text-green-400 font-medium text-lg">4.05%</div>
            <div className="text-lg">$38.2M</div>
            <div className="text-lg">-</div>
            <div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Deposit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-[#111111] text-white">
          {/* Header */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Yield Protocol
              </h1>
              <Web3Demo />
            </div>
          </div>

          {/* Main Content */}
          <EarnPage />
        </div>
      </QueryClientProvider>
    </WagmiConfig>
  );
};

export default App;
