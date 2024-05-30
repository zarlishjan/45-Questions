let guestlist: string[] =[`Akhter`, `Irfan`, `Majid`]
for (let i=0; i<guestlist.length; i++){
    console.log (`Dear ${guestlist[i]} You are invited to Dinner`)
}
console.log(`\n GOOD NEWS WE FOUND A BIGGER TABLE TO INVITE MORE 3 FRIENDS \n`)
guestlist.unshift(`Shahid`);
guestlist.splice(2,0, `Zulifqar`);
guestlist.push(`Waseem`);
for (let j=0; j<guestlist.length; j++){
    console.log (`Dear ${guestlist[j]} you are invited to Dinner`)
}
