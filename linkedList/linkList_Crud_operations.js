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

    constructor() {
        this.listSize = 0;
        this.pos = 0 // current position in the  list
        this.dataStore = []
        this.clear = clear
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.length = length;
        this.contains = contains;
        console.log('reached');
    }

}

const LinkListObject = new LinkList()