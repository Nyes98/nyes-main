# clef

- 기존에 personal 객체를 사용하던 지갑 계정 기능을 외부로 추출
- 수업으로는 계정 생성만 할 생각

```sh
clef newaccount --keystore ~/myGeth/keystore
# 입력 시 사용할 것인지 물어본다, ok 입력해야 넘어간다.
# 10글자 이상의 비밀번호를 입력해야 계정이 생성된다.
```

- /myGeth/keystore에 방금 생성한 계정 정보 파일이 있다.

- 왜 사용할 것인지 묻는가?
  - personal 객체를 없애면서 만들고 있는 도중이라 오류가 많다.
