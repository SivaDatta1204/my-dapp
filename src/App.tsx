import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig } from "wagmi";
import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { injected, metaMask, walletConnect } from "wagmi/connectors";
import Web3Demo from "./pages/web3-demo";
import "./index.css";
import PoolTableComponent from "./components/web3-demo/pool-table";

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
    <div className="flex justify-center min-h-screen text-white bg-black">
      <div className="w-full px-4 py-12 max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-5xl font-bold">Earn</h2>
          <p className="text-xl text-gray-400">
            Deposit your assets and earn yield
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl">
            <p className="mb-2 text-lg text-gray-400">Total Value Locked</p>
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              $209.4M
            </p>
          </div>
          <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl">
            <p className="mb-2 text-lg text-gray-400">Total Users</p>
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              12.8K
            </p>
          </div>
          <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl">
            <p className="mb-2 text-lg text-gray-400">Average APY</p>
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              4.01%
            </p>
          </div>
        </div>

        {/* Pool Table */}
        <PoolTableComponent />
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
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
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
