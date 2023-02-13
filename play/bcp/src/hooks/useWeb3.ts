import { MetaMaskInpageProvider } from "@metamask/providers";
import { useEffect, useState } from "react";
import { EmitHint } from "typescript";

export const useWeb3 = () => {
  const [account, setAccount] = useState(false);

  const getCurChainId = async () => {
    const eth = window.ethereum as MetaMaskInpageProvider;
    const curChainId = await eth.request({
      method: "eth_chainId",
    });
    return curChainId;
  };

  const addAndConnNetwork = async (chainId: string) => {
    const eth = window.ethereum as MetaMaskInpageProvider;

    const network = {
      chainId,
      chainName: "test",
      rpcUrls: ["http://127.0.0.1:8545"],
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
    };
    await eth.request({
      method: "wallet_addEthereumChain",
      params: [network],
    });
  };

  useEffect(() => {
    (async function () {
      if (window.ethereum !== undefined) {
        const chainId = await getCurChainId();
        const targetChainId = "0x539";
        console.log(chainId);
      }
    })();
  });
};
