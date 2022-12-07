import { useState } from "react";
import DropdownComponent from "./Component";

const DropdownContainer = () => {
  const [isClick, setIsClick] = useState(false);

  const onClick = () => {
    setIsClick(!isClick);
  };

  return (
    <DropdownComponent onClick={onClick} isClick={isClick}></DropdownComponent>
  );
};

export default DropdownContainer;
