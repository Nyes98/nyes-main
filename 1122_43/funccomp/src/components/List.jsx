import { useState } from "react";

export default function List() {
  const [listArr, setListArr] = useState([
    { text: "a", user: "user" },
    { text: "bb", user: "user" },
    { text: "ccc", user: "user" },
    { text: "dddd", user: "user" },
    { text: "eeeee", user: "user" },
  ]);
  console.log(listArr);
  return (
    <div>
      {listArr.map((item, index) => (
        <div>
          <div key={`${index}-1`}>{item.text}</div>
          <div key={`${index}-2`}>{item.user}</div>
        </div>
      ))}
    </div>
  );
}
