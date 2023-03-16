import { useEffect, useState } from "react";
import axios from "axios";

interface nftData {
  name: string;
  description: string;
  image: string;
}

export const List = () => {
  const [list, setList] = useState<Array<nftData>>([]);

  const callList = async () => {
    const listResult = await axios.post("http://localhost:8080/api/list");

    console.log(listResult.data.data);
    setList(listResult.data.data);
  };

  useEffect(() => {
    callList();
  }, []);

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
