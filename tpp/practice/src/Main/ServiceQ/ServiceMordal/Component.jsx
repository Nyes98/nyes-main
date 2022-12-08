import styled from "styled-components";

const ServiceModalComponent = ({ onClick }) => {
  return (
    <ServiceModalBox>
      <div className="background"></div>
      <div className="mordal">
        <div className="title">
          1. 채용공고를 내고 싶은데 절차가 어떻게 되나요?
          <img src="img/x-button.svg" onClick={onClick}></img>
        </div>
      </div>
    </ServiceModalBox>
  );
};

export default ServiceModalComponent;

const ServiceModalBox = styled.div`
  .background {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .mordal {
    width: 800px;
    height: 420px;
    background-color: white;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 20px;
  }
  .title {
    display: flex;
    width: 90%;
    justify-content: space-between;
    font-size: 20px;
    padding: 20px;
    margin: auto;
    font-weight: 700;
  }

  .title img {
    width: 18px;
  }
`;
