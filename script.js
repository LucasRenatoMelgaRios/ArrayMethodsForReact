const numbersList = [1, 2, 3, 4, 5];
const foundNumber = numbersList.find(number => number > 3);

const numbersList2 = [1, 2, 3, 4, 5];
const hasGreaterThanThree = numbersList2.some(number => number > 3);

const numbersList3 = [1, 2, 3, 4, 5];
const doubledNumbers = numbersList3.map(number => (number * 2)/2); 

const numbersList4 = [1, 2, 3, 4, 5];
const includesThree = numbersList4.includes(3);
if(includesThree){
    console.log("incluye el 3")
}

const numbersList5 = [1, 2, 3, 4, 5];
const evenNumbers = numbersList5.filter(number => number % 2 === 0);

const numbersList6 = [1, 2, 3, 4, 5];
const sum = numbersList6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
