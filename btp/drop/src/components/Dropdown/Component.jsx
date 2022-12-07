import styled from "styled-components";

const DropdownComponent = ({ onClick, isClick }) => {
  return (
    <>
      <div onClick={onClick}>드롭다운</div>
      <DropBox>
        <div className={`${isClick ? "on" : "off"}`}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </DropBox>
    </>
  );
};

export default DropdownComponent;

const DropBox = styled.div`
  overflow: hidden;

  .off {
    animation: dropdownout 0.5s ease;
    animation-fill-mode: forwards;
  }
  .on {
    animation: dropdownin 0.5s ease;
  }

  @keyframes dropdownin {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes dropdownout {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }
`;
