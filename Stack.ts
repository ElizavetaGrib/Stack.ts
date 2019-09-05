import StackNode from './StackNode';

export default class Stack<T> {

    private top: StackNode<T>;
    private length: number;

    constructor() {
        this.top = null;
        this.length = 0;
    }

    public size = (): number => {
        return this.length;
    };

    public peek = (): StackNode<T> => {
        return this.top;
    };

    public push = (value: T): void => {
        const node: StackNode<T> = new StackNode<T>(value);
        node.setNext(this.top);
        this.top = node;
        this.length += 1;
    };

    public pop = (): void | string => {
        if (this.length) {
            this.top = this.top.getNext();
            this.length -= 1;

        } else {
            return `Stack is empty`;
        }
    };

    public toString = (): string => {
        let current: StackNode<T> = this.top;
        let result: string = '';
        for (let i: number = 0; i < this.length; i += 1) {
            result += `${JSON.stringify(current.getData())}, `;
            current = current.getNext();
        }
        return result.slice(0, result.length - 2);
    };

    public equals = (stack: Stack<T>): boolean => {
        return this.toString() === stack.toString();
    };

};
