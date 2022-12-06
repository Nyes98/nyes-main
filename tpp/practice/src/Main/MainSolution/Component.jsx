import styled from "styled-components";

const SolutionComponent = () => {
  return (
    <SolutionBox>
      <div className="flex">
        <div className="title">
          <span>
            잡코리아
            <br /> 채용솔루션
          </span>
          을<br /> 소개합니다.
        </div>
        <div className="flex wrap">
          <div className="solutionList">
            <img src="img/icon_start_1.png" />
            <div className="imgtitle">
              간편한
              <br /> <span>채용공고 등록</span>
            </div>
            <div className="imgtext">
              쉽고 빠른 채용공고 등록하기
              <br /> 다양한 직군, 인턴/신입, 경력까지 폭넓은 채용
            </div>
          </div>
          <div className="solutionList">
            <img src="img/icon_start_2.png" />
            <div className="imgtitle">
              쉽고 정확한
              <br /> <span>지원자 관리</span>
            </div>
            <div className="imgtext">
              한눈에 보는 지원자 현황
              <br /> 서류합격, 면접제의 관리하기
            </div>
          </div>
          <div className="solutionList">3</div>
          <div className="solutionList">4</div>
          <div className="solutionList">
            <img src="img/icon_start_3.png" />
            <div className="imgtitle">
              인턴/신입부터 경력까지
              <br /> <span>인재검색</span>
            </div>
            <div className="imgtext">
              우리기업과 잘 맞는 인재추천
              <br /> 원하는 인재 찾기
              <br /> 입사제의 포지션제안
            </div>
          </div>
          <div className="solutionList">
            <img src="img/icon_start_4.png" />
            <div className="imgtitle">
              믿고 맡기는
              <br /> <span>헤드헌팅</span>
            </div>
            <div className="imgtext">엄선된 헤드헌팅을 통한 인재추천</div>
          </div>
        </div>
      </div>
    </SolutionBox>
  );
};

export default SolutionComponent;

const SolutionBox = styled.div`
  width: 70%;
  margin: auto;
  background: url("img/background_solution.png") no-repeat 120px 61px;

  .title {
    width: 700px;
    font-size: 36px;
    position: relative;
    top: 30px;
    left: 90px;

    color: #333333;
  }

  .title span {
    font-weight: 700;
  }

  .flex {
    display: flex;
  }

  .wrap {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .solutionList {
    width: 300px;
    height: 280px;
    background-color: white;
    margin: 10px;
    border-radius: 15px;
  }

  .solutionList img {
    margin: 30px 20px;
  }

  .wrap > div:nth-child(3),
  div:nth-child(4) {
    opacity: 0;
  }

  .imgtitle {
    font-size: 20px;
    margin-left: 20px;
    margin-top: 30px;
  }

  .imgtitle span {
    font-weight: 700;
  }

  .imgtext {
    font-size: 13px;
    margin: 10px 0 20px 20px;
  }
`;
