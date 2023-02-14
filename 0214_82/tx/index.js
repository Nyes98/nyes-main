// npm i ethereumjs-tx
// - 트랜잭션 관련 라이브러리
const ethTx = require("ethereumjs-tx").Transaction;

const tx = new ethTx({
  from: "0xa4cCE3D74813f569bb17304c665Dc2E2f28F4D59",
  to: "0xEAFfa3cB6e5A17DE54e94B62e599B4Ed991EF3c0",
  value: "0x" + Math.pow(10, 18).toString(16),
});

console.log(tx);
console.log(tx.r);
console.log(tx.v);
console.log(tx.s);

tx.sign(
  Buffer.from(
    "cc4b26167cdc3e845ab0777351658e39639b3450e2d4df3628ead1e0e9dc12f1",
    "hex"
  )
);

console.log(tx);
console.log(tx.r);
console.log(tx.v);
console.log(tx.s);

console.log(tx.serialize().toString("hex"));
