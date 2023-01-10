class ParentTestClass {
  #privateValue;

  constructor(value) {
    this.#privateValue = value;
    this.value = value * 10;
  }

  get privateValue() {
    // 보통은 private 키를 가져올 때 사용한다.
    return this.#privateValue;
  }

  set privateValue(value) {
    this.#privateValue = value;
  }

  static add(a, b) {
    // class.test.js 에서 TestClass.add(1,2), 15번 줄
    return a + b;
  }

  add() {
    // class.test.js 에서 test.add(), 14번 줄
    return this.#privateValue + this.value;
  }
}

class TestClass extends ParentTestClass {
  constructor(value) {
    super(value);
    // console.log(this.#privateValue);
  }
}

module.exports = TestClass;
