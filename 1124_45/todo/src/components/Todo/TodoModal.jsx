import styled from "styled-components";
import { TodoBtn } from "../setting";
import { Link, useLocation } from "react-router-dom";
import { STATUSLIST, STATUS } from "../setting";
import { useState } from "react";

export default function TodoModal({ setList, func, user, list }) {
  // console.log(useLocation().state);
  const index = useLocation().state?.index;
  const item = useLocation().state?.item;
  const [taskName, setTaskName] = useState(item ? item.taskName : "");
  const [status, setStatus] = useState(item ? item.status : STATUS.ToDo);

  return (
    <TodoModalBox>
      <AddInnerBox>
        <div>
          <input
            type="text"
            placeholder="Task Name"
            value={taskName}
            onInput={(e) => {
              setTaskName(e.target.value);
            }}
          />
        </div>
        <div>
          {STATUSLIST.map((item, index) => (
            <TodoBtn
              className={
                STATUSLIST[index].toLowerCase().replace(" ", "-") +
                (status === index ? " on" : "")
              }
              onClick={() => {
                setStatus(index);
              }}
              key={`TodoBtn-${index}`}
            >
              {item}
            </TodoBtn>
          ))}
          {/* <TodoBtn className="todo on">Todo</TodoBtn>
          <TodoBtn className="in-progress">In Progress</TodoBtn>
          <TodoBtn className="complete">Complete</TodoBtn> */}
        </div>
        <div>
          <Link to={"/"}>
            <TodoBtn
              onClick={() => {
                if (func === "Add") {
                  setList((state) => [
                    ...state,
                    { taskName, status, writer: user },
                  ]);
                  console.log(list);
                } else if (func === "Edit") {
                  setList((list) => {
                    const before = list.slice(0, index);
                    const after = list.slice(index + 1);
                    return [
                      ...before,
                      { taskName, status, writer: list[index].writer },
                      ...after,
                    ];
                  });
                }
              }}
            >
              {func}
            </TodoBtn>
          </Link>
          <Link to={"/"}>
            <TodoBtn>Cancle</TodoBtn>
          </Link>
        </div>
      </AddInnerBox>
    </TodoModalBox>
  );
}

const TodoModalBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddInnerBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 50%;

  input {
    width: 100%;
    padding: 5px 10px;
  }

  & > div {
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;

    &:last-child {
      justify-content: space-between;
    }
  }
`;
