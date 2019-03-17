import {expect} from 'chai';
import {Stack} from '../Stack';

describe('Stack', function () {
    describe('constructor', function () {
        it('must create an empty stack', function () {
            let stack: Stack<number> = new Stack<number>();
            expect(stack.length).to.equal(0);
            expect(stack.top).to.equal(null);
        });
    });
    describe('push', function () {
        it('must change size after adding items', function () {
            let stack: Stack<number> = new Stack<number>();
            stack.push(2);
            stack.push(7);
            stack.push(12);
            stack.push(11);
            expect(stack.size()).to.equal(4);
        });
    });
    describe('pop', function () {
        it('should be correct size, when delete elements: 2 of 4', function () {
            let stack: Stack<number> = new Stack<number>();
            stack.push(2);
            stack.push(7);
            stack.push(12);
            stack.push(11);
            stack.pop();
            stack.pop();
            expect(stack.size()).to.equal(2);
        });
        it('should be correct size, when delete elements: 4 of 4', function () {
            let stack: Stack<number> = new Stack<number>();
            stack.push(2);
            stack.push(7);
            stack.push(12);
            stack.push(11);
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            expect(stack.size()).to.equal(0);
        });
        it('should be correct size, when empty stack: 0', function () {
            let stack: Stack<number> = new Stack<number>();
            stack.pop();
            expect(stack.size()).to.equal(0);
        });
        it('should be \'stack is empty\', when empty stack', function () {
            let stack: Stack<number> = new Stack<number>();
            expect(stack.pop()).to.equal("stack is empty");
        });
    });
    describe('toString', function () {
        it('should return the stack as a string', function () {
            let stack: Stack<number> = new Stack<number>();
            stack.push(2);
            stack.push(7);
            stack.push(12);
            stack.push(11);
            stack.pop();
            expect(stack.tostring()).to.equal("12, 7, 2");
        });
    });
    describe('equals', function () {
        it('comparing two identical stacks: true', function () {
            let stack1: Stack<number> = new Stack<number>();
            stack1.push(2);
            stack1.push(7);
            stack1.push(12);
            stack1.push(11);
            let stack2: Stack<number> = new Stack<number>();
            stack2.push(2);
            stack2.push(7);
            stack2.push(12);
            stack2.push(11);
            expect(stack1.equals(stack2)).to.equal(true);
        });
        it('comparing two different stacks: false', function () {
            let stack1: Stack<number> = new Stack<number>();
            stack1.push(2);
            stack1.push(7);
            stack1.push(12);
            stack1.push(11);
            let stack2: Stack<number> = new Stack<number>();
            stack2.push(111);
            stack2.push(222);
            stack2.push(333);
            expect(stack1.equals(stack2)).to.equal(false);
        });
    });
    describe('different types', function () {
        it('stack with different types', function () {
            type types = string | number | boolean;
            let stack: Stack<types> = new Stack<types>();
            stack.push(111);
            stack.push("TypeScript");
            stack.push(true);
            stack.push(222);
            stack.pop();
            expect(stack.size()).to.equal(3);
            expect(stack.tostring()).to.equal("true, \"TypeScript\", 111");
        });
    });
});


