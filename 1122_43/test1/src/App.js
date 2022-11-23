import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Board from "./components/Board";
import styled from "styled-components";

function App() {
  const descriptions = [
    {
      title: "SUMMER ROAD TRIP IN 35MM",
      date: "November 28,2020",
      contents:
        "2020 pushed us out of our comfort zones and into our cars for weekend getaways. We tested for the virus, stayed in our small pods and got a chance to explore places a couple of hours out of the city. […]",
      theme: "ART,LIFESTYLE,TRAVEL",
    },
    {
      title: "THAKOON X JAMIE CHUNG",
      date: "May 21, 2020",
      contents:
        "This post is sponsored by THAKOON x Shopstyle  Thakoon Panichgul is hands down one of my favorite New York based Asian American Designers.  He is known for his sleek, cool, classic runway looks; with clean lines and interesting cuts. Even […]",
      theme: "SPOTLIGHT,STYLE",
    },
  ];
  // const titleArr = ["SUMMER ROAD TRIP IN 35MM", "THAKOON X JAMIE CHUNG"];
  // const dateArr = ["November 28,2020", "May 21, 2020"];
  // const contentsArr = [
  //   "2020 pushed us out of our comfort zones and into our cars for weekend getaways. We tested for the virus, stayed in our small pods and got a chance to explore places a couple of hours out of the city. […]",
  //   "This post is sponsored by THAKOON x Shopstyle  Thakoon Panichgul is hands down one of my favorite New York based Asian American Designers.  He is known for his sleek, cool, classic runway looks; with clean lines and interesting cuts. Even […]",
  // ];
  // const themeArr = ["ART,LIFESTYLE,TRAVEL", "SPOTLIGHT,STYLE"];

  return (
    <AppBox>
      <Header />
      <Slider />
      {descriptions.map((item, index) => {
        return (
          <Board
            title={item.title}
            date={item.date}
            contents={item.contents}
            theme={item.theme}
          ></Board>
        );
      })}

      {/* <Board
        title={descriptions[0].title}
        date={descriptions[0].date}
        contents={descriptions[0].contents}
        theme={descriptions[0].theme}
      >
        {" "}
      </Board> */}
    </AppBox>
  );
}

export default App;
const AppBox = styled.div``;
