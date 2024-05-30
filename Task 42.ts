let magician = [`Usman`, `Waheed`, `Faazil`, `Imran`];
function makeGreat (magicianArry: string[]){
for (let i=0; i<magicianArry.length; i++){
    magician [i] = `The Great ` + magicianArry [i]
}
};

console.log (`Only Names of Magician`)


function show_magicians (magician:string[]){
magician.forEach(element => {
    console.log (element);
});
}

makeGreat (magician)
show_magicians (magician)