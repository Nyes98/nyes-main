### jset를 사용해보자

- jest는 TDD 개발에 용이하고
- 테스트 코드를 작성할 수 있다.
- 페이스북에서 만든 테스트 프레임워크이다.

- 개발용으로만 설치 (--save-dev)
- npm i --save-dev jest

- 설치 후 package.json에 가서 설치가 잘 되었는지 확인하고
- test.js 파일로 테스트 파일을 만들자, 테스트 코드를 사용하는 파일알고 명시한 것

- "scripts": {"test": "jest 테스트진행할 파일 경로(merkle.test.js)"} 수정 후
- npm test
