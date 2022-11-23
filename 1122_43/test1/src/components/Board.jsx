import styled from "styled-components";

export default function Board({ title, date, contents, theme }) {
  console.log("보드실행함");

  console.log(theme);

  return (
    <BoardBox>
      <div>{title}</div>
      <div>
        <span>1</span>
        {date}
      </div>
      <div>{contents}</div>
      <div>{theme.replaceAll(",", " ")}</div>
    </BoardBox>
  );
}

const BoardBox = styled.div`
  border: 3px solid black;
  margin-bottom: 10px;
  width: 60%;

  & > div:first-child {
    text-align: center;
    font-size: 24px;
  }

  & > div:nth-child(2) {
    text-align: center;

    font-size: 13px;
  }
  & > div:nth-child(2) > span {
    width: 100%;
    border-bottom: 1px solid black;
  }
  & > div:nth-child(3) {
    text-align: center;
    color: #828282;
    font-size: 12px;
  }
`;
