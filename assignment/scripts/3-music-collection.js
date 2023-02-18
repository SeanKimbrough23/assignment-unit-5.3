console.log('***** Music Collection *****')

let collection = [];
// created new variable collection and set it to an empty array
function addToCollection (albumTitle,artist,yearPublished,genre) {
let album = {
    albumTitle: albumTitle,
    artist: artist,
    yearPublished: yearPublished,
    genre: genre,
} // created a function addToCollection that takes 4 arguments
//added object album to the function 
collection.unshift(album) // added the object (album) and added it to collection array
return album
};
addToCollection('For The Cool in You', 'Babyface', '1993', 'R&B');
console.log("Added For The Cool in You by Babyface", collection);

addToCollection('Never Say Never', 'Brandy', '1998', 'R&B');
console.log("Added Never Say Never Album by Brandy", collection);

addToCollection('Exclusive', 'Chris Brown', '2007', 'R&B');
console.log('Added Exclusive Album by Chris Brown', collection);

addToCollection('Take Care', 'Drake', '2011', 'Hip Hop');
console.log('Added Take Care Album by Drake', collection);

addToCollection('The Documentary', 'The Game', '2005','Rap');
console.log('Added The Documentary Album by The Game', collection);

addToCollection('Late Registration', 'Kanye West', '2005', 'Rap');
console.log('Added Late Registration by Kanye West', collection);
// tested addToCollection function, added 6 albums to collection array
function showCollection (array){
    for (let i=0; i <collection.length; i++ ){
      console.log(`${collection[i].albumTitle} by ${collection[i].artist}, published in ${collection[i].yearPublished}, in the  genre of ${collection[i].genre}`);  
    }
} // created new function addToCollection that can take argument for an array
//lopped thru the function so it takes info from the array and formats it

