```bash
cd back
npm init -y
npm i truffle
npm i -D prettier-plugin-solidity
npx truffle init
cd front
yarn add web3
```

# 스마트 컨트랙트의 거래

- CA : Contract Address, 계정 즉, 지갑 주소 중 하나이며 이더를 갖고 있을 수 있다.

- function의 payable 옵션
  - payable 이름 그대로 거래 가능하도록 해준다.
  - CA 주소로 해당 컨트랙트의 Balance(잔액)를 확인 할 수 있다.
  ```solidity
  function sellBread() public payable {
    breads[msg.sender] -= 1;
    payable(msg.sender).transfer(10 ** 18);
  }
  // msg.sender, 즉 트랜잭션을 보낸 지갑 계정에 Ether를 보낸다.
  ```
