export default class StackNode<T> {

    readonly data: T;
    private next: StackNode<T>;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    };

    public setNext = (next: StackNode<T>): void => {
        this.next = next;
    };

    public getData = (): T => {
        return this.data;
    };

    public getNext = (): StackNode<T> => {
        return this.next;
    };

};
