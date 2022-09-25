import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(public data: number) { }
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  private count: number = 0;

  get length(): number {
    return this.count;
  }

  /**
   *
   * @param data
   */
  add(data: number): void {
    const node = new Node(data);

    this.count++;
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  /**
   *
   * @param index
   */
  private at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bound");
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    throw new Error("Index out of bound");
  }

  /**
   *
   * @param leftIndex
   * @param rightIndex
   */
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is Empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  /**
   *
   * @param leftIndex
   * @param rightIndex
   */
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
