import LinkedList from './linkedList'
import { describe, it, expect, vi } from "vitest";

const numberList = new LinkedList([84, 15, 54, 25, 60, 64, 47, 2]);
const stringList = new LinkedList(['xajzo', 'dqzbtlox', 'vjod', 'uvvmxrrtcq', 'abyowrzgytv', 'rwzmnqj', 'qgi', 'hjdg']);
const mixedList = new LinkedList([84, 15, 'dqzbtlox', 'vjod', 60, 'uvvmxrrtcq', 47, 'vkf']);

const spyHelper = (
  method: "append" | "prepend" | "size" | "head" | "tail" | "at" | "pop" | "contains" | "find" | "toString" | "insertAt" | "removeAt"
) => {
  return {
    number: vi.spyOn(numberList, method),
    string: vi.spyOn(stringList, method),
    mixed: vi.spyOn(mixedList, method)
  }
}

describe('append method', () => {
  const spy = spyHelper('append')
  it('should append the value correctly', () => {
    numberList.append(1)
    expect(numberList.tail()?.value).toEqual(1)
    stringList.append('test')
    expect(stringList.tail()?.value).toEqual('test')
    mixedList.append(1)
    expect(mixedList.tail()?.value).toEqual(1)
    mixedList.append('test')
    expect(mixedList.tail()?.value).toEqual('test')
  })
  it('should have been called once', () => {
    expect(spy.number).toHaveBeenCalledOnce();
    expect(spy.string).toHaveBeenCalledOnce();
  })
  it('should have been called twice', () => {
    expect(spy.mixed).toHaveBeenCalledTimes(2);
  })
})

describe('prepend method', () => {
  const spy = spyHelper('prepend')
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
  it('should have been called once', () => {
    expect(spy.number).toHaveBeenCalledOnce();
    expect(spy.string).toHaveBeenCalledOnce();
  })
  it('should have been called twice', () => {
    expect(spy.mixed).toHaveBeenCalledTimes(2);
  })
})


