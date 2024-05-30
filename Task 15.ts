let guestlist: string []= [`Akhter`, `Irfan`, `Imran`,`Majid`]
for (let i=0; i<guestlist.length; i++){
    console.log(`Dear ${guestlist[i]} you are invited to day Dinner`)
}
console.log (`\n\t\n Unfortunately ${guestlist[1]} is not comming today Dinner \n`)
guestlist[1]= "Asadullah";
console.log (`NEW INVITATION LIST\n`);

for (let j=0; j<guestlist.length; j++){
    console.log(`Dear ${guestlist[j]} you are invited to dinner`)
}