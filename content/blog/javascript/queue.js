class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }
  enqueue(newValue) {
    const newNode = new Node(newValue)
    if (this.head === null) {
      this.head = this.tail = newNode
    } else {
      this.tail = newNode
      this.tail.next = newNode
    }
  }
  dequeue() {
    const value = this.head.value
    this.head = this.head.next
    return value
  }
  peek() {
    return this.head.value
  }
}
