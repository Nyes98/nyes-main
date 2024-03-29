class Node {
  constructor(data) {
    this.data = data;
    this.prev = undefined;
    this.next = undefined;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  insert(data) {
    // console.log("입력된 데이터는 " + data);
    if (!this.head) {
      // console.log("헤드가 없다");
      this.head = this.tail = new Node(data);
      // console.log("헤드는 ", this.head);
      // console.log("테일은 ", this.tail);
    } else {
      // console.log("헤드가 있다");
      // console.log("현재 테일의 다음 노드는(새 Node 넣기 전) ", this.tail.next);
      this.tail.next = new Node(data);
      // console.log("현재 테일의 다음 노드는(새 Node 넣은 후 ", this.tail.next);
      // (tail의 다음 = 마지막) 끝에 다음 노드를 추가한다.

      this.tail.next.prev = this.tail;
      // console.log("현재 테일의 다음 노드의 이전은 ", this.tail.next.prev);
      // 위에서 추가한 것(tail.next)의 prev에 기존의 tail을 넣어준다.

      this.tail = this.tail.next;
      // console.log("현재 테일은 ", this.tail);
      // this.tail.next 가 이제 새로운 tail이 된다.
    }
    this.size++;
  }

  // (지울 노드가 뭘 가르키든 자신을 가르키는게 없으면 탈락)
  remove(data) {
    let curr = this.head;
    // if (!curr) return; // 예외처리, 아래 curr?.data와 같은 역할
    if (curr?.data === data) {
      // ?.은 curr가 객체인지 확인하고 data 프로퍼티를 가져온다.
      this.head = this.head.next;
      this.head.prev = null;
      this.size--;
      return curr.data;
    }
    while (curr !== this.tail) {
      if (curr.next.data === data) {
        const tempNode = curr.next;
        curr.next = tempNode.next;
        if (curr.next) curr.next.prev = curr;
        else this.tail = curr;
        --this.size;
        return tempNode.data;
      }
      curr = curr.next;
    }
  }
  contains(data) {
    let curr = this.data;
    while (true) {
      if (curr.data === data) return true;
      if (!curr.next) return false;
      curr = curr.next;
    }
  }
}
const testDouble = new DoubleLinkedList();
testDouble.insert("테스팅1");
testDouble.insert("테스팅2");
// testDouble.remove("테스팅2");
testDouble.insert("테스팅3");
