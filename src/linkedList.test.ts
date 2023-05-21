import LinkedList from './linkedList'
import { describe, it, expect } from "vitest";

const numberList = new LinkedList([84, 15, 54, 25, 60, 64, 47, 2]);
const stringList = new LinkedList(['xajzo', 'dqzbtlox', 'vjod', 'uvvmxrrtcq', 'abyowrzgytv', 'rwzmnqj', 'qgi', 'hjdg']);
const mixedList = new LinkedList([84, 15, 'dqzbtlox', 'vjod', 60, 'uvvmxrrtcq', 47, 'vkf']);

describe('append method', () => {
  it('should append the value correctly with a list composed of number values', () => {
    numberList.append(1)
    expect(numberList.tail()?.value).toEqual(1)
  }),
  it('should append the value correctly with a list composed of string values', () => {
    stringList.append('test')
    expect(stringList.tail()?.value).toEqual('test')
  }),
  it('should append the value correctly with a list composed of mixed values', () => {
    mixedList.append(1)
    expect(mixedList.tail()?.value).toEqual(1)
    mixedList.append('test')
    expect(mixedList.tail()?.value).toEqual('test')
  })
})

describe('prepend method', () => {
  it('should append the value correctly', () => {
    numberList.prepend(1)
    expect(numberList.head()?.value).toEqual(1)
    stringList.prepend('test')
    expect(stringList.head()?.value).toEqual('test')
    mixedList.prepend(1)
    expect(mixedList.head()?.value).toEqual(1)
    mixedList.prepend('test')
    expect(mixedList.head()?.value).toEqual('test')
  })
})

// describe('size method', () => {
//   it('should return the correct size', () => {
//     console.log(numberList.size());
//     console.log(numberList.toString());
    
//     expect(numberList.size()).toEqual(10)
//   })
// })


