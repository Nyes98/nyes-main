import styled from "styled-components";
import facebookImg from "../img/facebook.png";
import twitterImg from "../img/twitter.png";
import instagramImg from "../img/instagram.png";
import searchImg from "../img/search.png";
import barImg from "../img/3bar.png";

export default function Header() {
  console.log("헤더실행함");
  return (
    <HeaderBox>
      <div>
        <div>
          <img src={facebookImg} alt="" />
        </div>
        <div>
          <img src={twitterImg} alt="" />
        </div>
        <div>
          <img src={instagramImg} alt="" />
        </div>
      </div>
      <div>
        <div>WHAT the CHUNG</div>
        <div>
          <div>HOME</div>
          <div>STYLE</div>
          <div>BEAUTY</div>
          <div>KARMA</div>
          <div>TRAVEL</div>
          <div>SPOTLIGHT</div>
        </div>
      </div>
      <div>
        <div>
          <img src={searchImg} alt="" />
        </div>
        <div>
          <img src={barImg} alt="" />
        </div>
      </div>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 100%;
  text-align: center;
  padding: 50px 0;
  & > div {
    width: 33%;
    display: flex;
    justify-content: center;
    align-item: center;
  }

  & > div:first-child {
    justify-content: flex-start;
    padding-left: 100px;
  }
  & > div:first-child img {
    width: 16px;
    margin: 5px;
    cursor: pointer;
  }
  & > div:nth-child(2) {
    flex-direction: column;
  }
  & > div:last-child {
    justify-content: flex-end;
    padding-right: 100px;
  }
  & > div:last-child img {
    width: 25px;
    margin: 5px;
    cursor: pointer;
  }
  & > div:nth-child(2) > div:first-child {
    padding-bottom: 20px;
    border-bottom: 2px solid gray;
    font-size: 3rem;
  }
  & > div:nth-child(2) > div:last-child {
    display: flex;
    justify-content: center;
    align-item: center;
    padding-top: 10px;
    width: 100%;
  }
  & > div:nth-child(2) > div:last-child > div {
    width: 16.6%;
    color: gray;
  }
`;
