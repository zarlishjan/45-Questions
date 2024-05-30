let currentuser: string[ ] = [`Shahid`, `Zahid`, `Sarmad`, `Asadullah`, `Abdullah`]
let newuser: string[] = [`Bilal`, `Shahid`, `Waseem`, `Sarmad`, `Irfan`]
newuser.forEach (newusername => {
    let lowercase: string = newusername.toLowerCase();
    if (currentuser.map(c_user => c_user.toLowerCase()).includes(lowercase)){
        console.log(`The UserName ${newusername}, is not available. Please write a different username`)
    }
    else{
        console.log(`the username ${newusername} is available`);
    }
})