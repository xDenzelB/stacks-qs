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

//   remove(node) {
//     if(this === node) {
//       return this.next;
//     } if (!this.next) return this.data;
//     this.data = this.data.next;
//     return this.data;
//   }
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


class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if(this.value === node.value) {
      return;
    }
    if(node.value < this.value) {
      if(!this.left) this.left = node;
      else this.left.add(node);
    }
    else {
      if(!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}
const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);


class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
  
  add(node) {
    if(this.value > node.value) {
      !this.left ? this.left === node : this.left.add(node);
    } else {
      !this.right ? this.right === node : this.right.add(node);
    }
  
  }
  // implemented as in previous challenge

  
  
  findPerson(name) {
    if(this.value === name) return this.person;
    
    const dir = name.value < this.value ? 'left' : 'right';

    if(!this[dir]) return null;

    return this[dir].findPerson(name);
    //find person needs to look by name 
    // Implement me!
  }
}
// "root" is the node at the root of the tree (the tree)
const person = root.find('Nelson');
// person looks like
// { 
//   name: 'Nelson', 
//   phone: '555-1212', 
//   address: '123 Main St' 
// }

const person2 = root.find('Foo');
// person2 is null

 
