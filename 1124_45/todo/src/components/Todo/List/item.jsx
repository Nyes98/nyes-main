import styled from "styled-components";
import { TodoBtn } from "../../setting";
import penImg from "./pen-solid.svg";
import trashImg from "./trash-solid.svg";
import { STATUSLIST } from "../../setting";
import { Link } from "react-router-dom";

export default function Item({ item, index, setList, user, list }) {
  console.log(user);
  console.log(list);
  return (
    <ItemTr>
      <td>{index + 1}</td>
      <td>{item.taskName}</td>
      <td>
        <TodoBtn
          style={{ cursor: "default" }}
          className={STATUSLIST[item.status].toLowerCase().replace(" ", "-")}
        >
          {STATUSLIST[item.status]}
        </TodoBtn>
      </td>
      <td>
        <Link
          to={user !== list[index].writer ? "/" : "/edit"}
          state={{ index, item }}
        >
          <TodoBtn
            onClick={() => {
              if (user !== list[index].writer) console.log("내가아니야");
            }}
          >
            <img
              src={penImg}
              alt="penImg"
              style={{
                filter:
                  "invert(57%) sepia(84%) saturate(1831%) hue-rotate(151deg) brightness(107%) contrast(90%)",
              }}
            ></img>
          </TodoBtn>
        </Link>
      </td>
      <td>
        <TodoBtn
          onClick={() => {
            if (user !== list[index].writer) return;
            setList((list) => {
              const before = list.slice(0, index);
              const after = list.slice(index + 1);
              return [...before, ...after];
            });
          }}
        >
          <img
            src={trashImg}
            alt="trashImg"
            style={{
              filter:
                "invert(31%) sepia(55%) saturate(2657%) hue-rotate(336deg) brightness(104%) contrast(101%)",
            }}
          ></img>
        </TodoBtn>
      </td>
      <td>{item.writer}</td>
    </ItemTr>
  );
}

const ItemTr = styled.tr`
  text-align: center;
  height: 50px;
  td {
    border-bottom: 1px solid lightgray;
  }
  img {
    width: 15px;
    filter: invert(57%) sepia(84%) saturate(1831%) hue-rotate(151deg)
      brightness(107%) contrast(90%);
  }
`;
