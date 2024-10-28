// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "viem/chains";
import { createPublicClient, http } from "viem";
import { injected, metaMask, walletConnect } from "@wagmi/connectors";
import App from "./App";
import "./index.css";
// Configure chains
const projectId = "56b34f733ed6b00d67790e266d270de4"; // Get from WalletConnect Cloud

// Create Wagmi config
const config = createConfig({
  chains: [mainnet],
  connectors: [injected(), metaMask(), walletConnect({ projectId })],
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
