import { useEffect, useState } from "react";
import BreadShopContract from "./contracts/BreadShop.json";

export const BreadShop = ({ web3, account }) => {
  const [bread, setBread] = useState(0);
  const [deployed, setDeployed] = useState();
  const [CA, setCA] = useState();
  const [count, setCount] = useState(0);
  const [pay, setPay] = useState(1);
  const [price, setPrice] = useState(0);

  const constructor = async () => {
    if (!web3) return;

    const networkId = await web3.eth.net.getId();
    const _CA = BreadShopContract.networks[networkId].address;
    // console.log(_CA);
    setCA(_CA);

    const abi = BreadShopContract.abi;

    const _deployed = new web3.eth.Contract(abi, _CA);
    setDeployed(_deployed);
    const _bread = await _deployed.methods.getBread().call({ from: account });
    setBread(_bread);
    const _price = await _deployed.methods.getPrice().call();
    setPrice(_price);
  };

  const buy = async () => {
    await deployed.methods.buyBread(count, pay).send({
      from: account,
      to: CA,
      value: web3.utils.toWei(`${pay}`) * count,
    });
    const _bread = await deployed.methods.getBread().call({ from: account });
    setBread(_bread);
  };

  const sell = async () => {
    await deployed.methods
      .sellBread(count, pay)
      .send({ from: account, to: CA });
    const _bread = await deployed.methods.getBread().call({ from: account });
    setBread(_bread);
  };

  useEffect(() => {
    constructor();
  }, []);

  const CountChange = (e) => {
    e.preventDefault();
    setCount(e.target.value);
  };

  const PayChange = (e) => {
    e.preventDefault();
    setPay(e.target.value);
  };

  const PayBtn = async () => {
    await deployed.methods.setPrice(pay).send({ from: account });
  };

  return (
    <div>
      <h2>현재 내가 보유한 빵 개수 : {bread}</h2>
      <h2>현재 빵 1개당 가격: {price}</h2>
      <div>빵의 개수를 설정해주세요</div>
      <div>
        <input type="number" onChange={CountChange} />
      </div>

      <button onClick={buy}>사기</button>
      <button onClick={sell}>팔기</button>

      <h3>구매시 예상 지불 금액 : {price * count}ETH</h3>
      <h3>판매시 예상 수령 금액 : {price * count * 0.95}ETH</h3>

      <div>
        {"0xdfa4220ef0291064a02720460e1f9dc9463c4db3" == account ? (
          <>
            <h1>관리자님 어서오세요</h1>
            <h3>빵의 가격을 변경해주세요</h3>
            <input type="number" onChange={PayChange} />
            <div>
              <button onClick={PayBtn}>빵 가격 변경</button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
