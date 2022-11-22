import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Board from "./components/Board";
import styled from "styled-components";

function App() {
  const titleArr = ["SUMMER ROAD TRIP IN 35MM", "THAKOON X JAMIE CHUNG"];
  const dateArr = ["November 28,2020", "May 21, 2020"];
  const contentsArr = [
    "2020 pushed us out of our comfort zones and into our cars for weekend getaways. We tested for the virus, stayed in our small pods and got a chance to explore places a couple of hours out of the city. […]",
    "This post is sponsored by THAKOON x Shopstyle  Thakoon Panichgul is hands down one of my favorite New York based Asian American Designers.  He is known for his sleek, cool, classic runway looks; with clean lines and interesting cuts. Even […]",
  ];
  const themeArr = ["ART,LIFESTYLE,TRAVEL", "SPOTLIGHT,STYLE"];
  const [mainboard, setMainBoard] = useState({
    title: titleArr,
    date: dateArr,
    contents: contentsArr,
    theme: themeArr,
  });

  console.log(mainboard);
  // const [title, setTitle] = useState([]);
  // const [date, setdate] = useState([]);
  // const [contents, setcontents] = useState([]);
  // const [theme, settheme] = useState([]);
  return (
    <AppBox>
      <Header />
      <Slider />
      <Board mainboard={mainboard} setMainBoard={setMainBoard} />
    </AppBox>
  );
}

export default App;
const AppBox = styled.div``;
