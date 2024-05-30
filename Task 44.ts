function makesandwitch (item : string []){ 
    console.log (`Making your sandwitch with`);
    item.forEach (element => 
    console.log ("- " + element));
    console.log (`Enjoy your Sandwitch`);

}

makesandwitch ([`Chicken`, `Cheese`,`Vegetable \n`]);
makesandwitch ([`Mayo`, `ChickenMayo \n`]);
makesandwitch ([`Peanut`, `Butter \n `]);
