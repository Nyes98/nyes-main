// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Test {
  int public num;
  string public text;
  int[] public numArr;
  string public textArr;
  address public owner;

  mapping(string => uint) public balance;

  constructor(string memory _text, int _num) {
    text = "testing";
    text = _text;
    num = _num;
    owner = msg.sender;
  }
}
