const movies = [
  {
    title: "The Matrix",
    year: 1999,
    genres: ["Action", "Science Fiction"],
  },
  {
    title: "Inception",
    year: 2010,
    genres: ["Action", "Science Fiction"],
  },
  {
    title: "The Avengers",
    year: 2012,
    genres: ["Action", "Adventure"],
  },
];

function sortByYear(movies) {
  let x = movies.slice();
  // using slice to Create a shallow copy of the array to keep the original array unchanged we can use also x=[...movies]
  return x.sort((a, b) => b.year - a.year);
  // b.year - a.year to sort the movies by most recent year first
}


function sortByAlphabet(movies) {
  const Regex = /^(a |an |the )/i;
  let y = movies.slice();

  return y.sort((a, b) => {
    let titleA = "";
    let titleB = "";
    if (Regex.test(a.title)){
     titleA=a.title.replace(Regex, "");
    }
    if (Regex.test(b.title)){
        titleB= b.title.replace(Regex, "");
    }
    return titleA.localeCompare(titleB);
  });
}

const test1 = sortByYear(movies);
const test2 = sortByAlphabet(movies);

console.log('Movies Sorted by Year:', test1);
console.log('Movies Sorted by Alphabet:', test2);
