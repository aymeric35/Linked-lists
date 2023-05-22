import LinkedList from './linkedList'
import { describe, it, expect } from "vitest";

const initLists = () => {
  const numberList = new LinkedList([84, 15, 54, 25, 60, 64, 47, 2]);
  const stringList = new LinkedList(['xajzo', 'dqzbtlox', 'vjod']);
  const mixedList = new LinkedList([84, 15, 'dqzbtlox', 'vkf']);

  return {numberList, stringList, mixedList}
}


describe('tail method', () => {
  it('should return the tail of the Linked List', () => {
    const {numberList, stringList, mixedList} = initLists()
    expect(numberList.tail()?.value).toEqual(2);
    expect(stringList.tail()?.value).toEqual('vjod');
    expect(mixedList.tail()?.value).toEqual('vkf');
  })
})

describe('head method', () => {
  it('should return the head of the Linked List', () => {
    const {numberList, stringList, mixedList} = initLists()
    expect(numberList.head()?.value).toEqual(84);
    expect(stringList.head()?.value).toEqual('xajzo');
    expect(mixedList.head()?.value).toEqual(84);
  })
})

describe('append method', () => {
  it('should append the value correctly with a list composed of number values', () => {
    const {numberList} = initLists()
    numberList.append(1)
    expect(numberList.tail()?.value).toEqual(1)
  });
  it('should append the value correctly with a list composed of string values', () => {
    const {stringList} = initLists()
    stringList.append('test')
    expect(stringList.tail()?.value).toEqual('test')
  });
  it('should append the value correctly with a list composed of mixed values', () => {
    const {mixedList} = initLists()
    mixedList.append(1)
    expect(mixedList.tail()?.value).toEqual(1)
    mixedList.append('test')
    expect(mixedList.tail()?.value).toEqual('test')
  })
})

describe('prepend method', () => {
  it('should append the value correctly with a list composed of number values', () => {
    const {numberList} = initLists()
    numberList.prepend(1)
    expect(numberList.head()?.value).toEqual(1)
  });
  it('should append the value correctly with a list composed of string values', () => {
    const {stringList} = initLists()
    stringList.prepend('test')
    expect(stringList.head()?.value).toEqual('test')
  });
  it('should append the value correctly with a list composed of mixed values', () => {
    const {mixedList} = initLists()
    mixedList.prepend(1)
    expect(mixedList.head()?.value).toEqual(1)
    mixedList.prepend('test')
    expect(mixedList.head()?.value).toEqual('test')
  })
})

describe('size method', () => {
  it('should return the correct size', () => {
    const {numberList, stringList, mixedList} = initLists()
    expect(numberList.size()).toEqual(8)
    expect(stringList.size()).toEqual(3)
    expect(mixedList.size()).toEqual(4)
  })
})


