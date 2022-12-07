import styled from "styled-components";

function DropDown() {
  return (
    <DropdownBox>
      <div className="flex">
        <div>
          <div>공고,지원자 관리</div>
          <ul>
            <li>전체 채용공고</li>
            <li>지원자관리</li>
            <li>차단내역</li>
          </ul>
        </div>
        <div>
          <div>인재검색</div>
        </div>
        <div>
          <div>헤드헌팅 의뢰</div>
        </div>
        <div>
          <div>유료서비스 내역</div>
        </div>
        <div>
          <div>기업정보</div>
        </div>
        <div>
          <div>기업라운지</div>
        </div>
        <div>
          <div>기업서비스 안내</div>
        </div>
      </div>
    </DropdownBox>
  );
}

export default DropDown;

const DropdownBox = styled.div`
  height: 350px;
  width: 100%;
  background-color: white;
  position: absolute;
  z-index: 1;
  padding: 0 300px;
  box-shadow: 0 1px 3px black;

  .flex {
    display: flex;
  }

  .flex > div {
    width: 10%;
  }

  ul {
    list-style: none;
    padding-left: 0px;
  }
`;
