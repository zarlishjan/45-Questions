

let userNames = [`Shahid`, `Asad`, `Abdullah`, `Zahid`, `Sarmad`]
for (let i=0; i<userNames.length; i++){
if (userNames[i] === `Shahid`){
    console.log (`\nHello \t admin, would you like to see a status report? \n`)
}
else {
    console.log (`Hello \t ${userNames[i]}, thank you for logging in again \n` )
}
}