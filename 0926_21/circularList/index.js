function Node(data) {
  this.data = data;
  this.next = undefined;
}

function CircularLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

CircularLinkedList.prototype.insert = function (data) {
  if (!this.head) {
    this.head = this.tail = new Node(data);
    this.head.next = this.head;
  } else {
    this.tail.next = new Node(data);
    this.tail.next.next = this.head;
    this.tail = this.tail.next;
  }
  this.size++;
};

CircularLinkedList.prototype.remove = function (data) {
  let curr = this.head;
  if (!curr) return;
  if (curr.data === data) {
    this.head = this.head.next;
    this.tail.next = this.head;
    this.size--;
    return curr.data;
  }
  while (curr !== this.tail) {
    // head의 데이터와 맞지 않을 때 즉, head가 아닐 때
    if (curr.next.data === data) {
      const tempNode = curr.next; // 지우고싶은 곳의 다음에 tempNode를 붙여준다
      curr.next = tempNode.next;
      if (tempNode === this.tail) this.tail = curr; // 지우고싶은 곳의 다음이 tail일 경우, tail을 이전으로 옮긴다.
      // if (curr.next == this.head) this.tail = curr; // 지우고싶은 곳의 다음이 head일 경우, tail을 이전으로 옮긴다.
      --this.size;
      return curr.data;
    }
    curr = curr.next; // curr 가 삭제할 데이터가 아닐 시 다음으로 계속 넘어가면서 찾는다.
  }
};

CircularLinkedList.prototype.toString = function () {
  if (!this.head) return "";
  // head가 없으면 빈 문자열 반환
  let curr = this.head;
  let tempStr = `${this.head.data}`;
  // 임시 문자열에 head의 data 정의
  while (curr !== this.tail) {
    // curr가 tail이 아니면 실행
    tempStr += ",";
    // head의 data가 정의되었으니 한번 끊도록 , 를 추가
    tempStr += curr.next.data;
    // 임시 문자열에 다음 Node의 data를 추가
    curr = curr.next;
    // 현재 노드를 다음 노드로 정의
  }
  return tempStr;
  // 모든 문자열이 모인 tempStr을 반환
};

const testCircular = new CircularLinkedList();
testCircular.insert(1);
testCircular.insert(2);
testCircular.insert(3);
testCircular.insert(4);
testCircular.insert(5);
console.log(testCircular.toString()); // "1,2,3,4,5"
