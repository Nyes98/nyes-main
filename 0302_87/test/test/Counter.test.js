const Counter = artifacts.require("Counter");

contract("Test", (accounts) => {
  console.log(accounts);
  let counter;

  describe("Test Contract", () => {
    it("deploy", async () => {
      counter = await Counter.deployed();
    });
    it("getText", async () => {
      console.log(await counter.getCount.call());
    });
    it("increase", async () => {
      console.log(await counter.increase.call());
    });
    it("decrease", async () => {
      console.log(await counter.decrease.call());
    });
  });
});
