import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();
  useState();

  useEffect(() => {
    if (!window.ethereum) return;
    (async () => {
      const [_account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(_account);

      const _web3 = new Web3(window.ethereum);
      setWeb3(_web3);
    })();
    // 함수를 즉시 실행하는 즉시실행 함수이다.
    //  - 함수 전체를 ()로 묶고 끝네 ()를 붙여준다.
  }, []);

  return [web3, account];
};

export default useWeb3;
