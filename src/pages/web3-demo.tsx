import React from "react";
import { useConnect } from "wagmi";
import { Wallet } from "lucide-react";

const Web3Demo: React.FC = () => {
  const { connect, connectors } = useConnect();

  return (
    <div className="flex space-x-4">
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          className="flex items-center px-6 py-3 font-medium transition-opacity rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
        >
          <Wallet className="w-5 h-5 mr-2" />
          Connect {connector.name}
        </button>
      ))}
    </div>
  );
};

export default Web3Demo;
