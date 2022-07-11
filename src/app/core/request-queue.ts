import {Request} from 'express';

export default class RequestQueue<N extends RequestNode> {
    first: N | null;
    last: N | null;
    length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(request: Request) {
        const newRequestNode = <N> new RequestNode(request);
        if (this.length === 0) {
            this.first = newRequestNode;
            this.last = this.first;
        } else {
            this.last!.next = newRequestNode;
            this.last = newRequestNode;
        }
        this.length++
    }

    dequeue(): Request | null {
        if (this.length === 0) {
            return null;
        } else if (this.length === 1) {
            const dequeuedNode = this.first;
            this.first = null;
            this.last = null;
            return dequeuedNode!.request;
        } else {
            const dequeuedNode = this.first!;
            this.first = <N>this.first!.next;
            dequeuedNode.next = null;
            return dequeuedNode!.request;
        }
    }

    peekFirst() {
        return this.first?.request;
    }
}

class RequestNode {
    request: Request;
    next: RequestNode | null;

    constructor(request: Request) {
        this.request = request;
        this.next = null;
    }
}