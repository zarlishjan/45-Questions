let guestlist: string [] = [`Asadullah`, `Abdullah`, `Zaheer`, `Mazhar`, `Fareed`, `Subhan`]
for (let i=0; i<guestlist.length; i++){
    console.log (`Dear ${guestlist[i]} you are invited today dinner`)
}
console.log (`\n\n Extremely Sorry table is not arranged \n\n`)
while (guestlist.length>2){
   let notinvited = guestlist.pop()
   console.log (`Sorry due to limited seats we cant invited to you in dinner ${notinvited}`)
}
console.log (`\n\n Only You both special are invited to dinner\n \n `)
for (let i=0; i<guestlist.length; i++){
    console.log (`Dear ${guestlist[i]} you are Still Invited `)
}
guestlist.pop()
guestlist.pop()

console.log (guestlist)