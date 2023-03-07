import "./App.css";
import { useEffect, useState } from "react";
import useWeb3 from "./useWeb3";
import axios from "axios";

function App() {
  const [web3, account] = useWeb3();
  const [candidateList, setCandidateList] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.post("http://localhost:8080/api/send", {
        method: "candidates",
      });
      setCandidateList(result.data.candidates);
    })();
  }, []);

  return (
    <div className="App">
      <h1>오늘의 점심</h1>
      <div className="vote-list">
        {candidateList.map((item, idx) => (
          <Candidate
            key={`candidate-${idx}`}
            item={item}
            web3={web3}
            account={account}
          ></Candidate>
        ))}
      </div>
    </div>
  );
}

export default App;

// 외부 파일로 빼던 컴포넌트를 같은 파일 내에서 정의
const Candidate = ({ item, account, web3 }) => {
  const [vote, setVote] = useState(0);
  // console.log(account);

  useEffect(() => {
    (async () => {
      const result = await axios.post("http://localhost:8080/api/send", {
        method: "totalVotesFor",
        item,
      });
      setVote(result.data.vote);

      web3.eth
        .subscribe("logs", { address: result.data.CA })
        .on("data", (log) => {
          const params = [
            { type: "string", name: "candidate" },
            {
              type: "uint",
              name: "votes",
            },
          ];
          const value = web3.eth.abi.decodeLog(params, log.data);

          // console.log(value.candidate, item, value.votes);
          console.log(item);

          if (value.candidate == item) {
            setVote(value.votes);
          }
        });
    })();
  }, []);

  const onClick = async () => {
    const result = await axios.post("http://localhost:8080/api/send", {
      method: "voteForCandidate",
      candidate: item,
      from: account,
    });
    web3.eth.sendTransaction(result.data);
  };

  return (
    <div className="vote-item" onClick={onClick}>
      <h3>{item}</h3>
      <div>{vote}</div>
    </div>
  );
};
