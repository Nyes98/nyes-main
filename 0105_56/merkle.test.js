const exBlock = require("./block.js");

// 테스트 함수들을 실행하는데 묶어서 실행할 수 있다.

// describe : 테스트의 묶음(그룹을 지어줄 수 있다고 보면 된다.)
describe("테스트들의 묶음 단위 내용", () => {
  // 각각의 테스트들을 여기에 작성해주면 된다.
  //   테스트 단위

  it("이전해시 비교", () => {
    // expect 함수로 비교 함수들을 사용할 수 있게 해준다.
    // expect()의 매개변수로 비교할 값을 넣어주고
    // expect().toBe()의 toBe() 매개변수로 앞의 값과 비교할 값을 넣어준다.
    // 단순히 데이터비교 A와 B를 넣었다고 하면 A === B
    expect(exBlock.block.hash).toBe(exBlock.secondBlock.previousHash);
  });
});
