import styled from "styled-components";

export default function Todoboard(dolist) {
  return (
    <TodoboardBox>
      <div>
        <div>#</div>
        <div>Task Name</div>
        <div>Status</div>
        <div>Edit</div>
        <div>Remove</div>
      </div>
      <div>
        <div>테</div>
        <div>스</div>
        <div>트</div>
        <div>에</div>
        <div>여</div>
      </div>
    </TodoboardBox>
  );
}

const TodoboardBox = styled.div`
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: auto;
  }
`;
