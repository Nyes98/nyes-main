import Component from "./Component";
import { useEffect, useState } from "react";

function Container() {
  const [nameItems, setNameItems] = useState({
    first: [
      "눈치가없고 ",
      "몸이좋고 ",
      "눈치빠르고 ",
      "재수없고 ",
      "상처가많고 ",
      "옷잘입고 ",
      "잘먹고 ",
      "집이가깝고 ",
      "운이좋고 ",
      "운이없고 ",
      "공부잘하고 ",
      "운동잘하고 ",
      "잘놀고 ",
      "친구가없고 ",
      "예의바르고 ",
      "외로움을 잘타고 ",
    ],
    middle: [
      "멋진 ",
      "예쁜 ",
      "못생긴 ",
      "웃긴 ",
      "짜증나는 ",
      "아픈 ",
      "재미있는 ",
      "센스있는 ",
      "모자른 ",
      "귀여운 ",
      "마른 ",
      "뚱뚱한 ",
      "건강한 ",
      "아픈 ",
      "목소리 큰 ",
      "돈 많은 ",
    ],
    last: [
      "사기꾼",
      "고양이",
      "강아지",
      "기린",
      "국가대표",
      "오빠",
      "누나",
      "코끼리",
      "산적",
      "기사",
      "대통령",
      "이웃",
      "연예인",
      "물고기",
      "수달",
      "사람",
    ],
  });

  return (
    <div>
      <Component></Component>
    </div>
  );
}
export default Container;
