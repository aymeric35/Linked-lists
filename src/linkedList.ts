type NodeValue = string | number

export default class LinkedList {
  #head: LNode | null = null;
  constructor(values?: NodeValue[]) {
    if (values) {
      values.forEach(v => this.append(v))
    }
  }
  append(value: NodeValue) {
    if (this.#head !== null) {
      let node = new LNode(value);
      let tail = this.tail();
      tail!.nextNode = node;
    } else {
      this.#head = new LNode(value)
    }
  }

  prepend(value: NodeValue) {
    if (this.#head !== null) {
      let node = new LNode(value)
      node.nextNode = this.#head
      this.#head = node;
    } else {
      this.#head = new LNode(value)
    }
  }

  size(): number {
    if (!this.#head) return 0;
    const getSize = (n: LNode): number => {
      if (n.nextNode === null) {
        return 1;
      }
      return 1 + getSize(n.nextNode)
    }
    return getSize(this.#head);
  }

  head(): LNode | undefined {
    return this.#head ? this.#head : undefined;
  }

  tail(): LNode | undefined {
    if (!this.#head) return;
    const findTail = (n: LNode | null): LNode | undefined => {
      if (!n) return
      if (n.nextNode === null) {
        return n;
      }
      return findTail(n.nextNode)
    }
    return findTail(this.#head);
  }

  at(index: number): LNode | undefined {
    const getNodeByIndex = (n: LNode | null, j: number = 0): LNode | undefined => {
      if (!n) return;
      if (j === index) return n;
      return getNodeByIndex(n.nextNode, j + 1)
    }
    return getNodeByIndex(this.#head);
  }

  pop(): void | undefined {
    if (!this.#head) return;
    let currentNode = this.#head;
    let previousNode: LNode | null = null;
    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNode === null ? this.#head = null : previousNode.nextNode = null;
  }

  contains(value: NodeValue): boolean {
    if (!this.#head) return false;
    const findValue = (n: LNode | null, value: NodeValue): boolean => {
      if (!n) return false;
      if (n.value === value) return true;
      return findValue(n.nextNode, value)
    }
    return findValue(this.#head, value);
  }

  find(value: NodeValue): number | undefined {
    if (!this.#head) return;
    const findIndex = (n: LNode | null, value: NodeValue, index: number): number | undefined => {
      if (!n) return;
      if (n.value === value) return index;

      return findIndex(n.nextNode, value, ++index)
    }
    return findIndex(this.#head, value, 0);
  }

  toString(): string | undefined {
    if (!this.#head) return;
    let result = '';
    const concatenateResult = (n: LNode | null) => {
      if (!n) return;
      if (n.value === null) return;
      result += `( ${n.value} ) -> `
      concatenateResult(n.nextNode)
    }
    concatenateResult(this.#head)
    result += 'null'
    return result;
  }

  insertAt(value: NodeValue, index: number): void {
    if (this.#head === null || index === 0) {
      return this.prepend(value)
    }
    let currentNode = this.#head;
    let previousNode: LNode | null = null;
    const insertValue = (n: LNode | null, j: number = 0): LNode | undefined => {
      if (!n) return;
      if (j === index && previousNode) {
        const insertedNode = new LNode(value)
        if (currentNode.nextNode === null) {
          return currentNode.nextNode = insertedNode;
        }
        previousNode.nextNode = insertedNode;
        return insertedNode.nextNode = currentNode;
      };
      previousNode = currentNode;
      currentNode = currentNode.nextNode!;
      return insertValue(n.nextNode, j + 1)
    }
    insertValue(this.#head)
  }

  removeAt(index: number) {
    if (this.#head === null) return;
    if (index === 0) {
      if (this.#head.nextNode === null) {
        return this.#head = null;
      }
      return this.#head = this.#head.nextNode
    }
    let currentNode = this.#head;
    let previousNode: LNode | null = null;
    const removeNode = (n: LNode | null, j: number = 0): LNode | undefined | null => {
      if (!n) return;
      if (j === index && previousNode) {
        if (currentNode.nextNode === null) {
          return previousNode.nextNode = null;
        }
        return previousNode.nextNode = currentNode.nextNode
      };
      previousNode = currentNode;
      currentNode = currentNode.nextNode!;
      return removeNode(n.nextNode, j + 1)
    }
    removeNode(this.#head)
  }
}

class LNode {
  value: NodeValue
  nextNode: LNode | null = null

  constructor(value: NodeValue) {
    this.value = value;
  }
}





