import styled from "styled-components";
import { Link } from "react-router-dom";

const ListComponent = ({ list }) => {
  return (
    <ListBox>
      <colgroup>
        <col width={"10%"} />
        <col width={"50%"} />
        <col width={"20%"} />
        <col width={"20%"} />
      </colgroup>
      <thead>
        <tr>
          <th>index</th>
          <th>title</th>
          {/* <th>text</th> */}
          <th>UserName</th>
          <th>createdAt</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={`tr-${index}`}>
            <td key={`id-${index}`}>{item.id}</td>
            <td key={`title-${index}`}>
              <Link to={`/board/${item.id}`}>{item.title}</Link>
            </td>
            <td key={`userName-${index}`}>{item.userName}</td>
            <td key={`createdAt-${index}`}>{item.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </ListBox>
  );
};
export default ListComponent;

const ListBox = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    border-bottom: 1px solid black;
  }

  td {
    border-bottom: 1px dashed black;
    text-align: center;
  }
`;
