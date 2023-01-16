const TestClass = require("./class");

describe("Class Test", () => {
  it("private test", () => {
    const test = new TestClass(5);
    // test.value === test["value"]
    const temp = "#privateValue";
    test[temp] = 10; // test.#privateValue
    // #privateValue
    expect(test["#privateValue"]).toBe(10);

    expect(test.value).toBe(50);

    expect(test.add()).toBe(55);
    expect(TestClass.add(1, 2)).toBe(3);

    // test.#privateValue 로는 사용할 수 없다.
    expect(test.privateValue).toBe(5);
    // test["#privateValue"] !== test.#privateValue

    test.privateValue = 200; // set 사용
    expect(test.privateValue).toBe(200);
  });
});
