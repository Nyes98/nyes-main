// yarn add web3 axios
import useWeb3 from "./useWeb3";
import Counter from "./Counter";

function App() {
  const [web3, account] = useWeb3();
  if (!account) return <h1>메타마스크 설치 및 계정 연결 요망</h1>;
  return (
    <div>
      <h1>Account : {account}</h1>
      <Counter web3={web3} account={account}></Counter>
    </div>
  );
}

export default App;
