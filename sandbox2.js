class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  add(node) {
    if(!this.next) {
      this.next = node;
    } else {
      this.next.add(node);
    }
  }

  getList() {
    if(!this.next) {
      return this.data;
    } else {
      return `${this.data}, ${this.next.getList()}`;
    }
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
