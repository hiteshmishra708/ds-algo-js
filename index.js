class Stack {
    constructor(showLog = true) {
        this.stack = [];
        this.showLog = showLog;
    }

    // Add an element to the end of the stack.
    push(item) {
        if (this.showLog) {
            console.log('Adding item ==>', item)
        }
        this.stack.push(item);
    }

    // Delete the first element of the stack.
    pop() {
        const item = this.stack.pop();
        if (this.showLog) {
            console.log('Removing item ==>', item)
        }
        return item;
    }
}

class Queue {
    constructor(showLog = true) {
        this.queue = {};
        this.tail = 0;
        this.head = 0;
        this.showLog = showLog;
    }

    // Add an element to the end of the queue.
    enqueue(element) {
        if (this.showLog) {
            console.log('Adding element ==>', element)
        }
        this.queue[this.tail++] = element;
    }

    // Delete the first element of the queue.
    dequeue() {
        if (this.tail === this.head)
            return undefined

        var element = this.queue[this.head];
        if (this.showLog) {
            console.log('Removing element ==>', element)
        }
        delete this.queue[this.head++];
        return element;
    }
}

module.exports = {
    Stack,
    Queue
}