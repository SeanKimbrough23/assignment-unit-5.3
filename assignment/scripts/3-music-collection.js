console.log('***** Music Collection *****')

let collection = [];
// created new variable collection and set it to an empty array
function addToCollection (albumTitle,artist,yearPublished,genre) {
let album = {
    albumTitle,
    artist,
    yearPublished,
    genre,
} ;// created a function addToCollection that takes 4 arguments
//added object album to the function 
collection.unshift(album); // added the object (album) and added it to collection array
return album;
}
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
} console.log(collection);

// created new function addToCollection that can take argument for an array
//lopped thru the function so it takes info from the array and formats it
showCollection(collection);

function findByArtist (artistName) { //created new function findByArtist
    return collection.filter(album => album.artist === artistName); // should return to a new array by artistName
}
console.log('Looking for artist: Kanye West', findByArtist('Kanye West')); //Test will find artist Kanye West in collection
console.log('Looking for artist: Chris Brown', findByArtist('Chris Brown')); // Test will find artist Chris Brown in collection
console.log('Looking for artist Adele', findByArtist('Adele')); // Test will look for Adele but will not find her since she is not in array
// Stretch Goals///
function search(searchParameters) {
    const searchResults = [];
    
  //  If there is no search object or an empty search object provided as input,
  //  then return all albums in the `collection`.
if (searchParameters === undefined || searchParameters === {}) {
      return collection;
    }
 for (i = 0; i < collection.length; i++) {
    let isAllConditionMatch = true;{
  }for (const [key, value] of Object.entries(searchParameters)) {
        if (key === 'trackName') {
          const tracks = collection[i].tracks;
          let trackMatch = false;
          for (let j = 0; j < tracks.length; j++) {
            if (tracks[j].name === value) {
              foundTrack = true;
            }
          }
          if (!trackMatch) {
            isAllConditionMatch = false;
          }
        else if (collection[i][key] !== value) {
          isAllConditionMatch = false;
          break;
        }
      } 
      if (isAllConditionMatch) {
        searchResults.push(collection[i]);
      }
    }
    return searchResults
}
}