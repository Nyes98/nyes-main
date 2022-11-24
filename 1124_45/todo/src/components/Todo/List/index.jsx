import Item from "./item";
import styled from "styled-components";

export default function List({ list, setList, user, users }) {
  console.log(list);
  return (
    <ListTable>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Remove</th>
          <th>Writer</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <Item
            key={`Item-${index}`}
            item={item}
            index={index}
            list={list}
            setList={setList}
            user={user}
            users={users}
          />
        ))}
      </tbody>
    </ListTable>
  );
}

const ListTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  th {
    border-bottom: 1px solid black;
  }
`;
