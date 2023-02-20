import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8081/api",
});

export const callAllBlock = async () => {
  return await request.post("/block/all", 1);
};

export const callRecentBlock = async () => {
  return await request.post("/block/recent", 1);
};

export const callBlockInfo = async (blockNumber) => {
  return await request.post("/block/info", { blockNumber: blockNumber });
};

export const callTxInfo = async (txHash) => {
  return await request.post("/block/txInfo", { txHash: txHash });
};
