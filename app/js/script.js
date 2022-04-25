console.log('HELLO');

const test = () => {
	console.log('this is a test');
};
//remove duplicate from numbers
const numbers=[1,2,3,1,4,5,6,7,7,7,8,1,2]



let uniqueNumbers = [];
numbers.forEach((element) => {
    if (!uniqueNumbers.includes(element)) {
        uniqueNumbers.push(element);
    }
});

let unique = [...new Set(numbers)];

console.log(uniqueNumbers);

console.log(unique);