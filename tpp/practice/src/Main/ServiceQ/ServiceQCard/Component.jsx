import styled from "styled-components";

const ServiceQCardComponent = ({ item, index, onClick }) => {
  return (
    <ServiceQCardBox onClick={onClick}>
      <div>{index + 1}</div>
      <div>{item.text1}</div>
      <div>{item.text2}</div>
    </ServiceQCardBox>
  );
};

export default ServiceQCardComponent;

const ServiceQCardBox = styled.div`
  width: 24.8%;
  height: 205px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #f2f4f7;
  background-color: white;

  &:hover {
    border: 1px solid #3399ff;
    color: #3399ff;
  }

  & > div:first-child {
    font-size: 32px;
    font-weight: 700;
    border-top-left-radius: 10px;
  }
  .flexwrap {
    display: flex;
  }
`;
