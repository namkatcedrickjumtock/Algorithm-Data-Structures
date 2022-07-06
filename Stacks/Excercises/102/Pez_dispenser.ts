// An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez
// dispenser is filled with red, yellow, and white colors and you don’t like the yellow
// ones. Write a program that uses a stack (and maybe more than one) to remove the
// yellow ones without changing the order of the other candies in the dispenser.

// steps 
// 1- iterate over stack elements
// 2- if elements equals white pop out


class PezDispenser {

    public top: number = 0
    public stack: string[] = []

    popItem(): boolean {
        this.stack.splice(--this.top, 1);
        return true
    }

    pushItem(item: string): boolean {
        this.stack[this.top++] = item
        return true;
    }

    refactorStack(item: string) {
        return this.stack.map((element, index) => {
            if (item == element) {
                // console.log(element, index);
                this.stack.splice(index, 1)
                console.log(this.stack);
            }
        })
    }
}

const pezObj = new PezDispenser()

// adding item
pezObj.pushItem('white');
pezObj.pushItem('white');
pezObj.pushItem('red');
pezObj.pushItem('black');
pezObj.pushItem('green');
pezObj.pushItem('purple');
pezObj.pushItem('blue');


//popping out elements in the stacck
pezObj.refactorStack('white');


console.log(pezObj.stack);







