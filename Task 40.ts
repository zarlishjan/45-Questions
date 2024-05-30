function myAlbum (artistName: string, albumTitle: string){
    return {artistName, albumTitle}
}
let album1 = myAlbum ("Teri yadein", "Atif Aslam");
let album2 = myAlbum ("Ayaz", "Mausam-e-Dil");
let album3 = myAlbum ("Madad", "Roshan Andhera");

console.log (album1);
console.log (album2);
console.log (album3);


console.log (`\n \t with Number of Tracks \n \t `)
function myAlbum2 (artistName: string, albumTitle: string, numberofTracks? : number){
    return {artistName, albumTitle,numberofTracks}
}
let album4 = myAlbum2 ("Teri yadein", "Atif Aslam", 33);
let album5 = myAlbum2 ("Ayaz", "Mausam-e-Dil", 43);
let album6 = myAlbum2 ("Madad", "Roshan Andhera", 66);

console.log (album4);
console.log (album5);
console.log (album6);
