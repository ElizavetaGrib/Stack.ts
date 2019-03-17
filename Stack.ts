import {StackNode} from './StackNode';

export class Stack<T> {
    public top: StackNode<T>;
    public length: number;

    constructor() {
        this.top = null;
        this.length = 0;
    }

    public size(): number {
        return this.length;
    }

    public push(value: T): void {
        let node = new StackNode<T>(value);
        let current = this.top;
        node.next = this.top;
        this.top = node;
        this.length++;
    }

    public pop():  void | string {
        if (this.length) {
            this.top = this.top.next;
            this.length--;
        }
        else {
            var str: string = "stack is empty";
            return str;
        }
    }

    public tostring(): string {
        let result: string = '';
        let i: number = 0;
        let current = this.top;
        while(i != this.length) {
            result += JSON.stringify(current.data) + ', ';
            current = current.next;
            i++;
        }
        return result.slice(0, result.length - 2);
    }

    public equals(list2: Stack<T>): boolean {
        return this.tostring() === list2.tostring();
    }
}
