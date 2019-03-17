export class StackNode<T> {
    public data: T;
    public next: StackNode<T>;

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}