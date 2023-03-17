import { useEffect, useState } from "react";
import axios from "axios";

interface nftData {
  name: string;
  description: string;
  image: string;
}

export const List = ({ account }: { account: string }) => {
  const [list, setList] = useState<Array<nftData>>([]);

  useEffect(() => {
    (async () => {
      // console.log(
      //   await axios.get(
      //     "https://ipfs.io/ipfs/QmaEWT2KqmZa1Vm5UxWwnGbk91vbKUEqWtjDBY9NxHZpu9"
      //   )
      // );
      // console.log(
      //   await axios.get(
      //     "https://gateway.pinata.cloud/ipfs/QmQnn438fVZeE4YYRk2A86cChdAZjiZjRwwTX91UgpeVhD"
      //   )
      // );
      setList(
        (await axios.post("http://localhost:8080/api/list", { from: account }))
          .data
      );
      console.log(list);
    })();
  }, [account]);

  // const callList = async () => {
  //   const listResult = (
  //     await axios.post("http://localhost:8080/api/list", {
  //       from: account,
  //     })
  //   ).data;

  // console.log(listResult.data.data);
  // setList(listResult.data.data);
  // };

  // useEffect(() => {
  //   callList();
  // }, [account]);

  return (
    <ul>
      {list.map((item, idx) => (
        <Item item={item} key={`item-${idx}`} />
      ))}
    </ul>
  );
};

const Item = ({ item: { name, description, image } }: { item: nftData }) => {
  return (
    <li>
      <div>{name}</div>
      <div>{description}</div>
      <div>
        <img src={image} />
      </div>
    </li>
  );
};
