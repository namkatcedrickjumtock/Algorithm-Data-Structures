var Queues = /** @class */ (function () {
    function Queues() {
        var _this = this;
        this.dataStore = [];
        // slecting the first elements from the array
        this.peek = function () { };
        this.enqueue = function (element) {
            _this.dataStore.push(element);
            _this.length = _this.dataStore.length;
            return true;
        };
        // first element in queue
        this.front = function () { return _this.dataStore[0]; };
        // getting last element in the queue
        this.back = function () { return _this.dataStore[_this.dataStore.length - 1]; };
        this.dequeue = function () { return _this.dataStore.shift(); };
    }
    return Queues;
}());
var QueueObject = new Queues();
QueueObject.enqueue(23);
QueueObject.enqueue(63);
QueueObject.enqueue(83);
QueueObject.enqueue(93);
QueueObject.enqueue(13);
// console.log(QueueObject.dataStore.length);
console.log(QueueObject.front());
// console.log(QueueObject.back());
console.log(QueueObject.dequeue());
console.log(QueueObject.dataStore);

