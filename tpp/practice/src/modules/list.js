import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "list",
  initialState: {
    img: "img/icon_start_1.png",
    title: "간편한 채용공고 등록",
    text: "쉽고 빠른 채용공고 등록하기 다양한 직군, 인턴/신입 경력까지 폭넓은 채용",
  },
  reducers: {},
});

export const action = counterSlice.actions;

export const reducer = counterSlice.reducer;
