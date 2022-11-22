import styled from "styled-components";

export default function Board({ mainboard, setMainboard }) {
  console.log("보드실행함");

  console.log(mainboard.title);

  return (
    <>
      <div>
        {mainboard.title.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      {/* <div>{mainboard.title[0]}</div>
      <div>{mainboard.title[1]}</div> */}
    </>
  );
}

const BoardBox = styled.div``;

// mainboard.title.map((item, index) => {
//   <div key={index}>{item}</div>;
// });
