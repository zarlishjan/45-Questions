function city_country (city: string, country: string = `Pakistan`): string {
    return (`${city}, ${country}`);
}
console.log (city_country("Karachi", "Pakistan"))
console.log (city_country("Beijeng", "China"))
console.log (city_country("Kabul", "Afghanistan"))
