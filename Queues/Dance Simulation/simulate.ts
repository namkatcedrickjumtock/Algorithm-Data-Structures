// Task 

// As we mentioned earlier, queues are often used to simulate situations when people have
// to wait in line. Once scenario we can simulate with a queue is a square dance for singles.
// When men and women arrive at this square dance, they enter the dance hall and stand
// in the line for their gender. As room becomes available on the dance floor, dance partners
// are chosen by taking the first man and woman in line. The next man and woman move
// to the front of their respective lines. As dance partners move onto the dance floor, their
// names are announced. If a couple leaves the floor and there is not both a man and a
// woman at the front of each line, this fact is announced.


//  step 
// 1- read dancers from text file

// read text file
const fs = require('fs/promises');

async function ReadDancers(fileName: string) {
    let danceinfo: string[] = []
    try {
        const content = await fs.readFile(fileName, { encoding: 'utf8' })
        content.split(/\r?\n/).map((data: string) => danceinfo.push(data))
        return danceinfo
    } catch (err) {
        console.log(err);
    }
}


// Dancer Queue class
class Dancers {
    femalDancers: string[] = []
    maleDancers: string[] = []
    length: Number = 0



    // slecting the first elements from the array
    peek = () => {

    }

    enqueue = () => {
        const data = ReadDancers('../data/dancers.txt')
        data.then((items: any) => {
          return  items.map((data: any) => {
                if (data[0] === "F") {
                    this.femalDancers.push(data)
                } else {
                    this.maleDancers.push(data)
                }
            });
        })
    }

    // first element in queue
    front = () => this.femalDancers[0]

    // getting last element in the queue
    back = () => this.femalDancers[this.femalDancers.length - 1]

    dequeue = () => this.femalDancers.shift()

}



// dancers instance
const DancersObject = new Dancers()

DancersObject.enqueue()
console.log(DancersObject.femalDancers);




