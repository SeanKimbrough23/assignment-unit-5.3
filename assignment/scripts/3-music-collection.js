console.log('***** Music Collection *****')

let collection = [];
// created new variable collection and set it to an empty array
function addToCollection (albumTitle,artist,yearPublished,genre,tracks) {
const album = {
    albumTitle,
    artist,
    yearPublished,
    genre,
    tracks,
} ;// created a function addToCollection that takes 4 arguments
//added object album to the function 
collection.unshift(album); // added the object (album) and added it to collection array
return album;
}
addToCollection('For The Cool in You', 'Babyface', '1993', 'R&B',[
{ name: 'When Can I see You', duration: '3:50' },
{ name: 'For The Cool in You', duration: '4:54' }]);
console.log("Added For The Cool in You by Babyface", collection);

addToCollection('Never Say Never', 'Brandy', '1998', 'R&B',[
    { name: 'Angel in Disguise', duration: '4:45' },
    { name: 'Put That On Everything', duration: '4:51' }]);
console.log("Added Never Say Never Album by Brandy", collection);

addToCollection('Exclusive', 'Chris Brown', '2007', 'R&B',[
    { name: 'Take You Down', duration: '4:06' },
    { name: 'With You', duration: '4:06' }]);
console.log('Added Exclusive Album by Chris Brown', collection);

addToCollection('Take Care', 'Drake', '2011', 'Hip Hop',[
    { name: `Marvin's Room`, duration: '5:47' },
    { name: 'For The Cool in You', duration: '4:54' }]);
console.log('Added Take Care Album by Drake', collection);

addToCollection('The Documentary', 'The Game', '2005','Rap',[
    { name: 'Dreams', duration: '4:46' },
    { name: 'Start From Scratch', duration: '4:07' }]);
console.log('Added The Documentary Album by The Game', collection);

addToCollection('Late Registration', 'Kanye West', '2005', 'Rap',[
    { name: 'Drive Slow', duration: '4:33' },
    { name: 'Hey Mama', duration: '4:21' }]);
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
console.log('Testing the search function', search()); // output collection array
console.log('Search for Artist Chris Brown:',search({artist:'Chris  Brown'})); // output was Kanye West (wrong)
console.log('Search for Artist Babyface',search({artist:'Babyface'}));
console.log('Search for Artist Drake',search({artist:'Drake'}));
console.log('Search for Artist The Game',search({artist:'Chris  Brown'}));
console.log('Search for Artist Kanye West',search({artist:'Chris  Brown'}));
console.log('Search for Artist Brandy',search({artist:'Chris  Brown'}));
// all returned artist Kanye West.. must find the problem