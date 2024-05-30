

let userNames = [`Shahid`, `Asad`, `Abdullah`, `Zahid`, `Sarmad`]

if (userNames.length == 0){
    console.log (`\n We need to Find Some Users \n`)
}
else {
    for (let user of userNames){
        if (user === `Shahid`){
            console.log (`Hello Shahid, Would you like to see a status report?`)
        }else {
            console.log (`Hello ${user}, Thank you for logging in again`)
        }
    }
}
userNames.pop()
userNames.pop()
userNames.pop()
userNames.pop()
userNames.pop()
console.log (userNames)