import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8081/api",
});

export const newBlock = async (blockData) => {
  return await request.post("/block/new", blockData);
};

// export const board = async (options) => {
//   return (await request.post("/board", options)).data;
// };

// export const signIn = async (registData) => {
//   return (await request.post("/user/regist", registData)).data;
// };

// export const logIn = async (logInData) => {
//   return (await request.post("/user/login", logInData)).data;
// };
