import styled from "styled-components";
import AddBoard from "./AddBoard";
import UserBox from "../UserBox";

export default function List({ addinfo, user }) {
  console.log(addinfo);
  console.log(user);
  return (
    <ListBox>
      {addinfo.map((item, index) => (
        <div key={index}>
          제목 : {item.title} 내용 : {item.contents}
        </div>
      ))}
    </ListBox>
  );
}

const ListBox = styled.div``;
