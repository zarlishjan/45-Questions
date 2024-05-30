let magician = [`Usman`, `Waheed`, `Faazil`, `Imran`];

function copyArray (arr: string[]){
    return [...arr]
}
function makeGreat (magicianArry: string[]){
for (let i=0; i<magicianArry.length; i++){
    magicianArry [i] = `The Great ` + magicianArry [i]
}
};

console.log (`Only Names of Magician`);


function show_magicians (magician:string[]){
magician.forEach(element => {
    console.log (element);
});
}
const copymagicianArray = copyArray(magician)
makeGreat (copymagicianArray);
console.log (`This is my Original Array:`)
show_magicians (magician)


console.log (`\n \n This is my modified :`)
show_magicians (copymagicianArray)