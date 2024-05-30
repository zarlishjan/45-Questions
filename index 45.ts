type car = {
    manufacture: string,
    model : string,
    [key: string]: any;
}
function createCar (manufacture:string, model: string, optional: Record< string, any>): car {
    return {manufacture, model, ...optional}
} 
const myCar: car = createCar (`Suzuki`, `Mehan`, {color: `Silver`, year : `2018`})
console.log (myCar)