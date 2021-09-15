const numFilms = +prompt('Сколько фильмов глянул?', '');

const personalDB= {
     count: numFilms,
     movies: {},
     actors: {},
     genres: [],
     private: false
};

const a = prompt('Последний фильм?', ''),
      b = prompt('На сколько оценишь?', ''),
      c = prompt('Последний фильм?', ''),
      d = prompt('На сколько оценишь?', '');

      personalDB.movies[a]=b;
      personalDB.movies[c]=d;
      
      console.log(personalDB);