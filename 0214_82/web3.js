const request = axios.create({
  method: "POST",
  baseURL: "http://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
});

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));

console.log(web3.eth);
const accountList = document.getElementById("account-list");

// const setBalance = async (_account) => {
//   const balance = await web3.eth.getBalance(_account);
//   console.log(_account + ":" + web3.utils.fromWei(balance));
// };

// 버튼 클릭시 0번 계정에서 1번 계정으로 1이더 전송
const test = async () => {
  const accounts = await web3.eth.getAccounts();
  accountList.innerHTML = ``;
  accounts.map((item) => (accountList.innerHTML += `<li>${item}</li>`));
  //   accounts.map((item) => {
  //     setBalance(item);
  //   });
  for (let i = 0; i < accounts.length; i++) {
    const balanceWei = await web3.eth.getBalance(accounts[i]);
    const balance = web3.utils.fromWei(balanceWei);
    // utils : 여러가지 편의 메서드를 제공한다.
    // fromWei : Wei 단위의 금액을 다른 단위로 바꿔준다.
    //  - 2번째 매개변수로 변환할 단위를 설정한다. 기본값은 ether다.
    //  - ex) .......fromWei(balanceWei, "Gwei")
    console.log("(" + i + ") " + accounts[i] + " (" + balanceWei + " Wei)");
    console.log("(" + i + ") " + accounts[i] + " (" + balance + " Eth)");
  }

  document.getElementById("send").onclick = async () => {
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "personal_unlockAccount",
        params: [accounts[0], "123412341234"],
      },
    });
    const transaction = await web3.eth.sendTransaction({
      from: accounts[0],
      to: accounts[1],
      value: web3.utils.toWei("1"),
    });
    console.log(transaction);
  };
  const transaction = await web3.eth.getTransaction(
    "0x8feb4b8954fcf4f92b78fb60d98e160542ec5c164e9bc0114bc84c55621d960c"
  );
  console.log(transaction);
  //   {
  //     blockHash: "0xc48a43f3067f841b90cc8187afe5bae4e3732798d1f2f70aa2cc14681eab1566";
  //      - 트랜잭션이 포함된 블록의 hash
  //     blockNumber: 126;
  //      - 트랜잭션이 포함된 블록의 높이
  //     from: "0xa4cCE3D74813f569bb17304c665Dc2E2f28F4D59";
  //     gas: 90000;
  //     gasPrice: "20000000000";
  //     hash: "0x8feb4b8954fcf4f92b78fb60d98e160542ec5c164e9bc0114bc84c55621d960c";
  //     input: "0x";
  //     nonce: 116;
  //   - 블록에서는 nonce가 난이도 문제를 풀기 위해 시도한 횟수
  //   - 여기서는 트랜잭션의 nonce로 보낸 사람이 보낸 트랜잭션의 개수
  //     r: "0xf24befb2802d3b9f5d3ffb0f8549ddc24327888dc78e2657aec95a4d0ffcb82b";
  //     s: "0x4c8a0b2c75e40f9ba0fbe572161c8d1cace5b7e02d55dbd10e573b853c2700a0";
  //     to: "0xEAFfa3cB6e5A17DE54e94B62e599B4Ed991EF3c0";
  //     transactionIndex: 0;
  //     v: "0x26";
  //   - RSV 전부 서명 관련 데이터이다.
  //   - sendTransaction 할 때 서명 한 적이 없다. 즉, 자동으로 서명한다.
  //   - unlock할 때 서명을 허가한다.
  //   - 메타마스크에서 보낼 때도 자동으로 서명한다. 정확히는 우리가 서명을 허가한다. 보낼 때 내용 확인 클릭 시
  //     value: "1000000000000000000";
  //   }

  document.getElementById("start").onclick = async () => {
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "miner_setEtherbase",
        params: [accounts[0]],
      },
    });
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "miner_start",
      },
    });
  };

  document.getElementById("stop").onclick = async () => {
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "miner_stop",
      },
    });
  };
};
test();

// document.getElementById("send").onclick = async () => {
//   const accounts = await web3.eth.getAccounts();
//   web3.eth
//     .sendTransaction({
//      ,
//     })
//     .then(async () => {
//       for (let i = 0; i < 2; i++) {
//         const balanceWei = await web3.eth.getBalance(accounts[i]);
//         const balance = web3.utils.fromWei(balanceWei);
//         console.log(i + 1 + "번" + ":" + balance);
//       }
//     });
// };
