import { useEffect, useState } from "react";
import Web3 from "web3";

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();
  const [admin, setAdmin] = useState();

  useEffect(() => {
    const constructor = async () => {
      if (!window.ethereum) return;

      const [_account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(_account);
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);
      const [_admin] = await web3.eth.getAccounts();
    };
    constructor();
  }, []);

  return [web3, account];
};
