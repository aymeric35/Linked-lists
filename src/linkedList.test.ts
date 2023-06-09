import LinkedList from './linkedList'
import { describe, it, expect } from "vitest";

const initLists = () => {
  const numberList = new LinkedList([84, 15, 54, 25, 60, 64, 47, 2]);
  const stringList = new LinkedList(['xajzo', 'dqzbtlox', 'vjod']);
  const mixedList = new LinkedList([84, 15, 'dqzbtlox', 'vkf']);

  return { numberList, stringList, mixedList }
}


describe('tail method', () => {
  it('should return the tail of the Linked List', () => {
    const { numberList, stringList, mixedList } = initLists()
    expect(numberList.tail()?.value).toEqual(2);
    expect(stringList.tail()?.value).toEqual('vjod');
    expect(mixedList.tail()?.value).toEqual('vkf');
  })
})

describe('head method', () => {
  it('should return the head of the Linked List', () => {
    const { numberList, stringList, mixedList } = initLists()
    expect(numberList.head()?.value).toEqual(84);
    expect(stringList.head()?.value).toEqual('xajzo');
    expect(mixedList.head()?.value).toEqual(84);
  })
})

describe('append method', () => {
  it('should append the value correctly with a list composed of number values', () => {
    const { numberList } = initLists()
    numberList.append(1)
    expect(numberList.tail()?.value).toEqual(1)
  });
  it('should append the value correctly with a list composed of string values', () => {
    const { stringList } = initLists()
    stringList.append('test')
    expect(stringList.tail()?.value).toEqual('test')
  });
  it('should append the value correctly with a list composed of mixed values', () => {
    const { mixedList } = initLists()
    mixedList.append(1)
    expect(mixedList.tail()?.value).toEqual(1)
    mixedList.append('test')
    expect(mixedList.tail()?.value).toEqual('test')
  })
})

describe('prepend method', () => {
  it('should append the value correctly with a list composed of number values', () => {
    const { numberList } = initLists()
    numberList.prepend(1)
    expect(numberList.head()?.value).toEqual(1)
  });
  it('should append the value correctly with a list composed of string values', () => {
    const { stringList } = initLists()
    stringList.prepend('test')
    expect(stringList.head()?.value).toEqual('test')
  });
  it('should append the value correctly with a list composed of mixed values', () => {
    const { mixedList } = initLists()
    mixedList.prepend(1)
    expect(mixedList.head()?.value).toEqual(1)
    mixedList.prepend('test')
    expect(mixedList.head()?.value).toEqual('test')
  })
})

describe('size method', () => {
  it('should return the correct size', () => {
    const { numberList, stringList, mixedList } = initLists()
    expect(numberList.size()).toEqual(8)
    expect(stringList.size()).toEqual(3)
    expect(mixedList.size()).toEqual(4)
  })
})

describe('at method', () => {
  it('should return the correct node at index 0', () => {
    const { numberList, stringList, mixedList } = initLists();
    expect(numberList.at(0)).toBe(numberList.head())
    expect(stringList.at(0)).toBe(stringList.head())
    expect(mixedList.at(0)).toBe(mixedList.head())
  })
  it('should return the correct node at the last index', () => {
    const { numberList, stringList, mixedList } = initLists();
    expect(numberList.at(numberList.size() - 1)).toBe(numberList.tail())
    expect(stringList.at(stringList.size() - 1)).toBe(stringList.tail())
    expect(mixedList.at(mixedList.size() - 1)).toBe(mixedList.tail())
  })
  it('should be a string or a number at the desired index or undefined if the index does not exist', () => {
    const { numberList, stringList, mixedList } = initLists();
    const getRandomInt = () => {
      const min = Math.ceil(0)
      const max = Math.floor(10)
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomInt = getRandomInt();
    expect(
      numberList.at(randomInt)?.value === undefined || Number.isFinite(numberList.at(randomInt)?.value)
    ).toBeTruthy()
    expect(
      stringList.at(randomInt)?.value === undefined || typeof stringList.at(randomInt)?.value === 'string'
    ).toBeTruthy()
    expect(
      mixedList.at(randomInt)?.value === undefined || typeof mixedList.at(randomInt)?.value === 'string' || Number.isFinite(mixedList.at(randomInt)?.value)
    ).toBeTruthy()
  })
})

describe('pop method', () => {
  it('should remove the last node', () => {
    const { numberList, stringList, mixedList } = initLists();
    numberList.pop()
    expect(numberList.tail()?.value).toEqual(47)
    stringList.pop()
    expect(stringList.tail()?.value).toEqual('dqzbtlox')
    mixedList.pop()
    expect(mixedList.tail()?.value).toEqual('dqzbtlox')
  })
  it('should return undefined if no nodes exist when calling head or tail methods', () => {
    const emptyNode = new LinkedList()
    emptyNode.pop()
    expect(emptyNode.tail()).toBeUndefined()
    expect(emptyNode.head()).toBeUndefined()
  })
  it('should return undefined after being called', () => {
    const emptyNode = new LinkedList()
    expect(emptyNode.pop()).toBeUndefined;
  })
})

describe('contains method', () => {
  it('should return whether the value exists in the nodes', () => {
    const { numberList, stringList, mixedList } = initLists();
    expect(numberList.contains(25)).toBeTruthy();
    expect(stringList.contains('dqzbtlox')).toBeTruthy();
    expect(mixedList.contains(15)).toBeTruthy();
    expect(numberList.contains(0)).toBeFalsy();
    expect(stringList.contains('qfwf')).toBeFalsy();
    expect(mixedList.contains('ef')).toBeFalsy();
  })
})

describe('find method', () => {
  it('should return the correct index', () => {
    const { numberList, stringList, mixedList } = initLists();
    expect(numberList.find(84)).toEqual(0);
    expect(stringList.find('vjod')).toEqual(2);
    expect(mixedList.find('vkf')).toEqual(3);
  })
  it('should return undefined if the value does not exist', () => {
    const { numberList, stringList, mixedList } = initLists();
    expect(numberList.find(100)).toBeUndefined();
    expect(stringList.find(100)).toBeUndefined();
    expect(mixedList.find(100)).toBeUndefined();
  })
})

describe('toString method', () => {
  it('should return the correct template', () => {
    const { numberList, stringList, mixedList } = initLists();
    expect(numberList.toString()).toEqual('( 84 ) -> ( 15 ) -> ( 54 ) -> ( 25 ) -> ( 60 ) -> ( 64 ) -> ( 47 ) -> ( 2 ) -> null')
    expect(stringList.toString()).toEqual('( xajzo ) -> ( dqzbtlox ) -> ( vjod ) -> null')
    expect(mixedList.toString()).toEqual('( 84 ) -> ( 15 ) -> ( dqzbtlox ) -> ( vkf ) -> null')
  })
  it('should return undefined with an empty node', () => {
    const emptyNode = new LinkedList()
    expect(emptyNode.toString()).toBeUndefined();
  })
})

describe('insertAt method', () => {
  it('should insert correctly at the head of the nodes', () => {
    const { numberList, stringList, mixedList } = initLists();
    numberList.insertAt(100, 0)
    expect(numberList.head()?.value).toEqual(100)
    stringList.insertAt('hello', 0)
    expect(stringList.head()?.value).toEqual('hello')
    mixedList.insertAt(50, 0)
    expect(mixedList.head()?.value).toEqual(50)
  })
  it('should insert correctly at the tail of the nodes', () => {
    const { numberList, stringList, mixedList } = initLists();
    const tailIndex = (l: LinkedList) => l.size()    
    numberList.insertAt(100, tailIndex(numberList))
    expect(numberList.tail()?.value).toEqual(100)
    stringList.insertAt('hello', tailIndex(stringList))
    expect(stringList.tail()?.value).toEqual('hello')
    mixedList.insertAt(50, tailIndex(mixedList))
    expect(mixedList.tail()?.value).toEqual(50)
  })
  it('should append the value when the index is superior to the size of the nodes', () => {
    const { numberList, stringList, mixedList } = initLists();
    numberList.insertAt(100, 100)
    expect(numberList.tail()?.value).toEqual(100)
    stringList.insertAt('hello', 100)
    expect(stringList.tail()?.value).toEqual('hello')
    mixedList.insertAt(50, 100)
    expect(mixedList.tail()?.value).toEqual(50)
  })
})

describe('removeAt method', () => {
  it('should remove correctly at index 0', () => {
    const { numberList, stringList, mixedList } = initLists();
    numberList.removeAt(0)
    expect(numberList.head()?.value).toEqual(15)
    stringList.removeAt(0)
    expect(stringList.head()?.value).toEqual('dqzbtlox')
    mixedList.removeAt(0)
    expect(mixedList.head()?.value).toEqual(15)
  })
  it('should remove correctly at last index', () => {
    const { numberList, stringList, mixedList } = initLists();
    numberList.removeAt(numberList.size() - 1)
    expect(numberList.tail()?.value).toEqual(47)
    stringList.removeAt(stringList.size() - 1)
    expect(stringList.tail()?.value).toEqual('dqzbtlox')
    mixedList.removeAt(mixedList.size() - 1)
    expect(mixedList.tail()?.value).toEqual('dqzbtlox')    
  })
})
