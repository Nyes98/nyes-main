```bash
npm init -y
npm i truffle @openzeppelin/contracts @remix-project/remixd
npm i -D prettier-plugin-solidity
npx truffle init
```

# Funding Contract

- Funding : 소규모 후원이나 다수의 개인으로부터 자금을 모집하는 행위
- 컨트랙트 기능
  - 후원 기간이 종료되면
    - 후원 금액이 원하는 이상 모였다면 주최자에게 후원금 전송
    - 후원 금액이 미달됐다면 기존 후원자들에게 원금 돌려주기

```soliodity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Fundraising {
  uint256 public targetAmount;
  // 목표 금액
  address public owner;
  // 펀딩 주최자, 후원을 받는 사람(계정)
  mapping(address => uint256) public donations;
  // 후원자 => 후원한 돈, 후원자 목록
  uint256 raisedAmount;
  // 후원된 금액
  uint256 public finishTime;
  // 마감 기한(후원 받는 기간)
}

constructor(uint256 _targetAmount) {
    targetAmount = _targetAmount;
    owner = msg.sender;
    raisedAmount = 0;
    finishTime = block.timestamp + 2 weeks;
    // 컨트랙트가 저장된 트랜잭션이 저장된 블록의 정보를 받아올 수 있다.
    // Block : {transactions : bytecode(컨트랙트)}
    // weeks : 주 단위의 시간

  receive() external payable {
    // 익명함수, data 없이 value만 들어왔을 때 실행
    // transaction : {data, value}
    // 트랜잭션 내의 value => 보내는 금액
    // 트랜잭션 내의 data => 스마트 컨트랙트 사용으로 인한 데이터 변경의 데이터
    //  - 스마트 컨트랙트로 발생한 데이터 변경(함수 호출)은 data 변수에 bytecode로 변환하여 담아서 보냈다.
    // 스마트 컨트랙트 CA 계정으로 돈(이더)를 보냈을 때 실행된다.
    require(block.timestamp < finishTime, "This funding is over");

    donations[msg.sender] += msg.value;
    // 후원자에 대한 후원금 저장
    raisedAmount += msg.value;
    // 총 후원된 금액에 추가
  }

    function withdrawDonations() external payable {
        // 주최자가 후원금을 받기 위해 실행하는 메서드
    require(msg.sender == owner, "Funds will only be released to the owner");
    // 트랜잭션 보낸 계정이 주최자 계정인가?
    require(raisedAmount >= targetAmount, "The Funding did not reach the goal");
    // 후원금이 목표금액을 넘겼는가?
    require(block.timestamp > finishTime, "This funding is not over yet");
    // 후원 기간이 종료되었나?

    payable(owner).transfer(raisedAmount);
    // 기간이 만료됐고 후원금이 다 모였으면 주최자에게 후원금 전송
  }

  function refund() external payable {
    // 기간 종료 후 후원금이 목표액에 도달하지 못했을 때 후원금 환불
    //  - 단, 후원자가 환불받지 않을 수 있음
    require(block.timestamp > finishTime, "This funding is not over yet");
    // 후원 기간이 종료됐는가?
    require(raisedAmount < targetAmount, "The funding did reached the goal");
    // 후원금이 목표금에 도달했는가?
    require(donations[msg.sender] > 0, "You did not donate to this funding");
    // 후원한 적이 있는가?

    uint256 toRefund = donations[msg.sender];
    donations[msg.sender] = 0;
    payable(msg.sender).transfer(toRefund);
  }
}

```

```bash
npx remixd -s . -u https://remix.ethereum.org
```
