import styled from "styled-components";
import { Link } from "react-router-dom";

const BoardComponent = ({ item, remove, isCreater }) => {
  return (
    <BoardBox>
      <h1>{item.title}</h1>
      <h3>
        userName : {item.userName} - {item.createdAt}
      </h3>
      {!isCreater || (
        <span>
          <Link to={`/edit/${item.id}`}>
            <button>Edit</button>
          </Link>
          <button
            onClick={() => {
              remove();
            }}
          >
            delete
          </button>
        </span>
      )}

      <p>{item.text}</p>
    </BoardBox>
  );
};
export default BoardComponent;

const BoardBox = styled.div``;
