// While pushing, popping, and peeking are the primary operations associated with a stack,

class Stack {
    dataStore = []
    
    top = 0

    push = (element) => {
        this.dataStore[this.top++] = element;
    }

    // return the first elements ontop of the stack without removing.
    peek() {
        return this.dataStore[this.top - 1];
    }

    // removed the last element to enter the stack
    pop = () => {
        // returning the removed value
        // return this.dataStore[--this.top];
        // popping out the value
        this.dataStore.splice(--this.top, 1)
        console.log(this.top);
    }

    // clear out the stack
    clear() {
        this.top = 0;
    }

    // size of dataStore / array
    length() {
        return this.top;
    }
}

const StackObject = new Stack()
StackObject.push("cedrick")
StackObject.push("jr")
StackObject.push("prince")
StackObject.push("solo")
console.log(StackObject.peek());

// console.log(StackObject.dataStore);