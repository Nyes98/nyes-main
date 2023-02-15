export const BoardComponent = ({ list }) => {
  return (
    <ul>
      {list.map(({ title, text }, idx) => (
        <LiComp title={title} text={text} key={`li-${idx}`}></LiComp>
      ))}
    </ul>
  );
};

const LiComp = ({ title, text }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
};
