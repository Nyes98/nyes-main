import { useEffect, useState } from "react";
import { BoardComponent } from "../components/Board";
import { board } from "../api";

export const BoardContainer = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    board({ limit: 10, offset: 0, order: [["id", "DESC"]] }).then(
      ({ list, isError }) => {
        if (!isError) setList(list);
      }
    );
  }, []);
  return <BoardComponent list={list} />;
};
