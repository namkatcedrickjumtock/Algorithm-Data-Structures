// --------------------------
// Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
// data using a two-dimensional array. Create functions to display the monthly aver‐
// age, a specific week’s average, and all the weeks’ averages.
///////////


class weeklyTemps {
    
        dataStore = [];

        add = (temp) => this.dataStore.push(temp);
    

    average = () => {

        let total = 0
        for (let index = 0; index < this.dataStore.length; index++) {
            total += this.dataStore[index];
        }

        // return total / this.dataStore.length
    }
}

let thisWeek = new weeklyTemps();
thisWeek.add(34)
thisWeek.add(34)
thisWeek.add(34)
thisWeek.add(34)
console.log(this.dataStore);

// console.log(thisWeek.average())