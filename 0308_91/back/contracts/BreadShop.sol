// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract BreadShop {
  mapping(address => uint) public breads;
  uint price = 1;

  function buyBread(uint count, uint pay) public payable {
    require(msg.value >= count * pay * 10 ** 18);
    breads[msg.sender] += count;
  }

  function sellBread(uint count, uint pay) public payable {
    breads[msg.sender] -= count;
    payable(msg.sender).transfer((count * pay * 10 ** 18 * 95) / 100);
  }

  function getBread() public view returns (uint) {
    return breads[msg.sender];
  }

  function getSender() public view returns (address) {
    return msg.sender;
  }

  function setPrice(uint _price) public {
    price = _price;
  }

  function getPrice() public view returns (uint) {
    return price;
  }
}
