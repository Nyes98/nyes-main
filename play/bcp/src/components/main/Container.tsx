import Component from "./Component";
import axios from "axios";
import { useEffect, useState } from "react";

function Container() {
  const [balance, setBalance] = useState<Array<string>>([]);
  const [wallet, setWallet] = useState([]);
  const [nickname, setNickname] = useState([]);
  const [nameItems, setNameItems] = useState({
    first: [
      "눈치가없고 ",
      "몸이좋고 ",
      "눈치빠르고 ",
      "재수없고 ",
      "상처가많고 ",
      "옷잘입고 ",
      "잘먹고 ",
      "집이가깝고 ",
      "운이좋고 ",
      "운이없고 ",
      "공부잘하고 ",
      "운동잘하고 ",
      "잘놀고 ",
      "친구가없고 ",
      "예의바르고 ",
      "외로움을 잘타고 ",
    ],
    middle: [
      "멋진 ",
      "예쁜 ",
      "못생긴 ",
      "웃긴 ",
      "짜증나는 ",
      "아픈 ",
      "재미있는 ",
      "센스있는 ",
      "모자른 ",
      "귀여운 ",
      "마른 ",
      "뚱뚱한 ",
      "건강한 ",
      "아픈 ",
      "목소리 큰 ",
      "돈 많은 ",
    ],
    last: [
      "사기꾼",
      "고양이",
      "강아지",
      "기린",
      "국가대표",
      "오빠",
      "누나",
      "코끼리",
      "산적",
      "기사",
      "대통령",
      "이웃",
      "연예인",
      "물고기",
      "수달",
      "사람",
    ],
  });

  const request = axios.create({
    method: "POST",
    baseURL: "http://localhost:8080",
    headers: { "content-type": "application/json" },
  });

  console.log("랜더링");

  useEffect(() => {
    async function getBalance() {
      console.log("콘손", wallet);
      if (wallet.length == 0) {
        console.log("진실 혹은 거짓");
        return;
      }
      for (let i = 0; i < 4; i++) {
        const {
          data: { result },
        } = await request({
          data: {
            id: 50,
            jsonrpc: "2.0",
            method: "eth_getBalance",
            params: [wallet[i], "latest"],
          },
        });
        console.log(typeof result);
        if (balance.length == 0) {
          setBalance([result]);
          console.log("첨이야", balance);
        } else {
          setBalance([...balance, result]);
          console.log("계속드러와", balance);
        }
      }
    }
  }, []);

  async function getWallet() {
    const {
      data: { result },
    } = await request({
      data: {
        id: 50,
        jsonrpc: "2.0",
        method: "eth_accounts",
        params: [],
      },
    });
    setNickname(
      result.map((item: string) => {
        return item
          .slice(39)
          .split("")
          .map((str: string, index) => {
            switch (index) {
              case 0:
                let test1: string = makeNickname(str, nameItems.first);
                return test1;
              case 1:
                let test2: string = makeNickname(str, nameItems.middle);
                return test2;
              case 2:
                let test3: string = makeNickname(str, nameItems.last);
                return test3;
            }
          });
      })
    );
    setWallet(result);
  }

  const makeNickname = (str: string, arr: Array<string>) => {
    return arr[parseInt(str, 16)];
  };

  useEffect(() => {
    getBalance();
  }, [wallet]);

  return (
    <div>
      <Component
        getWallet={getWallet}
        getBalance={getBalance}
        wallet={wallet}
        nickname={nickname}
        balance={balance}
      ></Component>
    </div>
  );
}
export default Container;
