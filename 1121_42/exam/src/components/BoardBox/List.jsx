import styled from "styled-components";

export default function List({ addinfo }) {
  console.log(addinfo);
  return (
    <ListBox>
      {addinfo.map((item, index) => (
        <div key={index}>
          작성자 : {item.user} 제목 : {item.title} 내용 : {item.contents}
        </div>
      ))}
    </ListBox>
  );
}

const ListBox = styled.div`
  div {
    height: 50px;
    width: 100%;
    border: 2px solid black;
    margin: 5px;
  }
`;
