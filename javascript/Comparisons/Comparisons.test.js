
const { sortByYear, sortByAlphabet } = require('./Comparisons'); 

const sampleMovies = [
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
  
  describe('Sorting functions', () => {
    test('sorts by year in descending order', () => {
      const sortedByYear = sortByYear([...sampleMovies]);
      expect(sortedByYear).toEqual([
        { title: 'The Avengers', year: 2012, genres: ['Action', 'Adventure'] },
        { title: 'Inception', year: 2010, genres: ['Action', 'Science Fiction'] },
        { title: 'The Matrix', year: 1999, genres: ['Action', 'Science Fiction'] }
      ]);
    });
  });

  
    test('sorts by alphabeti', () => {
      const sortedByAlphabet = sortByAlphabet([...sampleMovies]);
      expect(sortedByAlphabet).toEqual([
        { title: 'Inception', year: 2010, genres: [ 'Action', 'Science Fiction' ] },
        { title: 'The Avengers', year: 2012, genres: [ 'Action', 'Adventure' ] },
        { title: 'The Matrix', year: 1999, genres: [ 'Action', 'Science Fiction' ] }
    ]);
    });
  
  