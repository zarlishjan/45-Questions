let user1 = `Shahid`;
let user2 = `Zahid`;
let number1 = 8;
let number2= 5;
let array1 = [1,2,3,4,5,6,7]

console.log (`\n Equality & not Equality`)
console.log (user1 == "Shahid")
console.log (user2 != "Zahid")

console.log (`\n Testing using lower case `)
console.log (user1.toLowerCase() === `Shahid`)
console.log (user2.toLowerCase() !== `Zahid`)

console.log (`\n Numerical tests involving equality and inequality, 
greater than and less than, greater than or equal to, and less than or equal to`)
console.log (number1 == 8);
console.log (number1 != 8);
console.log (number1 > number2)
console.log (number1 < number2)
console.log (number1 >= number2)
console.log (number1 <= number2)

console.log (`\n Tests using "and" and "or" operators`)
console.log ((number1 > 4) && (number1 <9)) 
console.log ((number1 > 9) || (number1 < 7))

console.log (`\n Test whether an item is in a array`)
console.log (array1.includes (3))
console.log (array1.includes (10))

console.log (`\n Test whether an item is not in a array`)
console.log (!array1.includes (10))
console.log (!array1.includes (4))