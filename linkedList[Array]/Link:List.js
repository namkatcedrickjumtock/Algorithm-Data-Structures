// A list class ADT 


// Representation of List ADT 

// listSize(property)  -> Number of elements in list
// pos(property)       -> Current position in list
// length(property)    ->  Returns the number of elements in list
// clear(function)     ->  Clears all elements from list
// toString(function)  -> Returns string representation of list
// getElement(function)-> Returns element at current position
// insert(function)    -> Inserts new element after existing element
// append(function)    -> Adds new element to end of list
// remove(function)    -> Removes element from list
// front(function)     -> Sets current position to first element of list
// end(function)       -> Sets current position to last element of list
// prev(function)      -> Moves current position back one element
// next(function)      -> Moves current position forward one element
// currPos(function)   -> Returns the current position in list
// moveTo(function)    -> Moves the current position to specified position


class LinkList {
    listSize = 0;
    pos = 0 // current position in the  list
    dataStore = []

    // constructor() {
    //     this.clear = clear
    //     this.toString = toString;
    //     this.insert = insert;
    //     this.append = append;
    //     this.remove = remove;
    //     this.front = front;
    //     this.end = end;
    //     this.prev = prev;
    //     this.next = next;
    //     this.length = length;
    //     this.currPos = currPos;
    //     this.moveTo = moveTo;
    //     this.getElement = getElement;
    //     this.length = length;
    //     this.contains = contains;
    // }

    // add elements into the list
    Append(elements) {
        this.dataStore[this.listSize++] = elements
        // this.dataStore.push(elements)
    }

    // removing an element from a list 
    // first find the elemens to remove from list 
    Find(elemens) {
        for (let index = 0; index < this.dataStore.length; index++) {
            if (this.dataStore[index] == elemens) {
                return index
            }
        }
        return -1
    }

    // remove an element from a list
    RemoveFromList(elemens) {
        let foundAt = this.Find(elemens)
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1)
            --this.listSize
            return true
        }
        return false;
    }

    // retrieving the length of list
    ListSize = () => this.listSize
    toString = () => this.dataStore

    // inserting elements at any possitions in alist
    insertIntoList = (elements, position) => {
        let insertPosition = this.Find(position)
        if (insertPosition > -1) {
            this.dataStore.splice(insertPosition + 1, 0, elements)
            this.listSize++
            return true
        }
        return false;
    }

    clearList = () => {
        delete this.dataStore
        this.dataStore = []
        this.listSize = this.pos = 0
    }

    // checking if a value is found in a list
    isIncludes = (elemens) => {
        for (let index = 0; index < this.dataStore.length; index++) {
            if (this.dataStore[index] == elemens) {
                return true
            }
        }
        return false
    }

    // OTHER LIST MEHTODS FUNCTIONS 
    front() {
        this.pos = 0;
    }
    end() {
        this.pos = this.listSize - 1;
    }
    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    next() {
        if (this.pos < this.listSize - 1) {
            this.pos++;
        }
    }
    currPos() {
        return this.pos;
    }
    moveTo(position) {
        this.pos = position;
    }
    getElements() {
        return this.dataStore[this.pos];
    }


}

const LinkListObject = new LinkList()

LinkListObject.Append(2);
LinkListObject.Append(7);
LinkListObject.Append(8);
LinkListObject.Append(3);


console.log(LinkListObject.insertIntoList(30, 7));
// console.log(LinkListObject.RemoveFromList(5));
console.log(LinkListObject.dataStore);
let values = LinkListObject.dataStore;
console.log(LinkListObject.next());


