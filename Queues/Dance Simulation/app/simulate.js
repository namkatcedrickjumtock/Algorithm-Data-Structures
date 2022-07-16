"use strict";
// Task 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function ReadDancers(fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        let danceinfo = [];
        try {
            const content = yield fs.readFile(fileName, { encoding: 'utf8' });
            content.split(/\r?\n/).map((data) => danceinfo.push(data));
            return danceinfo;
        }
        catch (err) {
            console.log(err);
        }
    });
}
// Dancer Queue class
class Dancers {
    constructor() {
        this.femalDancers = [];
        this.maleDancers = [];
        this.length = 0;
        // slecting the first elements from the array
        this.peek = () => {
        };
        this.enqueue = () => {
            const data = ReadDancers('../data/dancers.txt');
            data.then((items) => {
                return items.map((data) => {
                    if (data[0] === "F") {
                        this.femalDancers.push(data);
                    }
                    else {
                        this.maleDancers.push(data);
                    }
                });
            });
        };
        // first element in queue
        this.front = () => this.femalDancers[0];
        // getting last element in the queue
        this.back = () => this.femalDancers[this.femalDancers.length - 1];
        this.dequeue = () => this.femalDancers.shift();
    }
}
// dancers instance
const DancersObject = new Dancers();
DancersObject.enqueue();
console.log(DancersObject.femalDancers);
