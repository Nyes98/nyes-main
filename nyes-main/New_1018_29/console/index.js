// ES6 이전 << Javascript의 버전
// Class가 대표적인 ES6, import export
console.log("로그 남기기");
// Javascript가 갖고있는 객체 -> 내장개체
console.log(global);
// global => 전역 객체, js 파일에서 변수를 초기화하면 그 js파일 내에서만 사용이 가능한데
// 전역으로 쓰고 싶으면 global의 프로퍼티로 추가해라
// Node.js에 DOM 있을까?
// HTML 파일의 구조를 저장한 객체 => DOM 즉, document
// Node.js에 HTML 구조는 없다 => document가 없다.
// window : 브라우저의 정보를 갖고있는 객체
// Node.js는 브라우저를 쓰지 않는다. 즉, window 객체가 없다. 대신하는 객체가 global

console.warn("경고");
// 경고 출력
console.dir({ data: "구조출력" });
// 구조에 대해서 출력, 브라우저 쪽에서도 사용함
// <div>123</div> << console.log() => [Object]
// Element에 대한 정보, console.dir
console.time("시간 측정");
// 시간 확인에 대한 시작점
console.timeLog("시간 측정");
// 시간 확인에 대한 중간점 (여러개여도 상관없다)
console.timeEnd("시간 측정");
// 시간 확인 완료

console.assert(true, "참");
console.assert(false, "거짓");
// 참 일때는 아무일도 일어나지 않고, 거짓일 때만 출력한다. (오류 체크용도)

console.count("몇번?"); // 카운트 증가
console.count("몇번?");
console.countReset("몇번?"); // 카운트 리셋
console.count("몇번?");
console.table({ name: "표", data: "출력" });

console.error("에러 출력");

// let a = 12; // index.js 에서만 a가 돈다.
global.a = 12; // 같은 폴더 내 모든 파일에 a를 쓸 수 있다.
