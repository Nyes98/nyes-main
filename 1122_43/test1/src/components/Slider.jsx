import styled from "styled-components";

export default function Slider() {
  console.log("슬라이더실행함");

  return (
    <SliderBox>
      <div>이거슨 슬라이더</div>
    </SliderBox>
  );
}

const SliderBox = styled.div`
  width: 100%;
  border: 5px solid black;
  height: 300px;
  margin-bottom: 20px;
`;
