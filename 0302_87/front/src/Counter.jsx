import { useState, useEffect } from "react";
import CounterContract from "./contracts/Counter.json";

const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState();

  useEffect(() => {
    (async () => {
      if (deployed) return;
      const _deployed = new web3.eth.Contract(
        CounterContract.abi,
        "0x5aa6c5C13Be01A4ad599874A94faBa9A79C496e3"
      );
      setDeployed(_deployed);

      const _count = await _deployed.methods.getCount().call();
      setCount(parseInt(_count));
    })();
  });

  const increment = async () => {
    const result = await deployed.methods.increment().send({ from: account });

    if (!result) return;

    const _count = await deployed.methods.getCount().call();
    setCount(parseInt(_count));
  };
  const decrement = async () => {
    const result = await deployed.methods.decrement().send({ from: account });

    if (!result) return;
    const _count = await deployed.methods.getCount().call();
    setCount(parseInt(_count));
  };

  return (
    <div>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
