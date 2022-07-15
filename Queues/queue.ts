class Queues {
    dataStore: (string | Number)[] = []
    length: Number


    // slecting the first elements from the array
    peek = () => { }

    enqueue = (element: any) => {
        this.dataStore.push(element)
        this.length = this.dataStore.length
        return true
    }

    // first element in queue
    front = () => this.dataStore[0]

    // getting last element in the queue
    back = () => this.dataStore[this.dataStore.length - 1]

    dequeue = () => this.dataStore.shift()
}



const QueueObject = new Queues()
QueueObject.enqueue(23)
QueueObject.enqueue(63)
QueueObject.enqueue(83)
QueueObject.enqueue(93)
QueueObject.enqueue(13)

// console.log(QueueObject.dataStore.length);
console.log(QueueObject.front());
// console.log(QueueObject.back());
console.log(QueueObject.dequeue());





