const { Stack, Queue } = require('./index')

const stack = new Stack()
// const stack = new Stack(false)
// use false if don't need console logs 

stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)

console.log(stack.pop())
console.log(stack.pop())

const queue = new Queue()
// const queue = new Queue(false)
// use false if don't need console logs

queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)

console.log(queue.dequeue())
console.log(queue.dequeue())