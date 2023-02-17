const nowAccountElem = document.getElementById("now-account");
const balanceElem = document.getElementById("balance");
const toElem = document.getElementById("to");
const etherElem = document.getElementById("ether");

console.log(window.ethereum);

const isConnected = window.ethereum.isConnected();
console.log("javascript 읽자 마자 isConnected : ", isConnected);

if (window.ethereum) {
  const isConnected = window.ethereum.isConnected();
  console.log("connect 후 isConnected : ", isConnected);

  const getBalance = async (accounts) => {
    nowAccountElem.innerHTML = accounts[0];

    const balance = await ethereum.request({
      method: "eth_getBalance",
      // params: ["0x4f53ef78f28A0F89992793C261D8ec157818c942"],
      params: accounts,
    });

    console.log(parseInt(balance));
    balanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);
  };

  ethereum.on("connect", async (connectInfo) => {
    console.log(connectInfo);
    console.log(parseInt(connectInfo.chainId));

    try {
      const accounts = await ethereum.request({
        // method : "eth_accounts", << 결과는 아래와 같으나 지금은 아래로 이름이 변경됐다.
        method: "eth_requestAccounts",
      });
      //   nowAccountElem.innerHTML = accounts[0];

      //   const balance = await ethereum.request({
      //     method: "eth_getBalance",
      //     // params: ["0x4f53ef78f28A0F89992793C261D8ec157818c942"],
      //     params: accounts,
      //   });

      //   console.log(parseInt(balance));
      //   balanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);
      await getBalance(accounts);
    } catch (error) {
      console.log(error);
    }
  });

  ethereum.on("accountsChanged", async (accounts) => {
    console.log("어카운트체인지", accounts);
    // const balance = await ethereum.request({
    //   method: "eth_getBalance",
    //   // params: ["0x4f53ef78f28A0F89992793C261D8ec157818c942"],
    //   params: accounts,
    // });
    // nowAccountElem.innerHTML = accounts[0];
    // balanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);

    // console.log(parseInt(balance) / Math.pow(10, 18));
    await getBalance(accounts);
  });

  ethereum.on("chainChanged", (chainId) => {
    console.log("체인체인지", chainId);
  });

  document.getElementById("sendTransaction").onclick = () => {
    const from = nowAccountElem.innerHTML;
    const to = toElem.value;
    const value = "0x" + (+etherElem.value * Math.pow(10, 18)).toString(16);

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from,
            to,
            value,
          },
        ],
      })
      .then((result) => {
        console.log(result);
        getBalance([from]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}