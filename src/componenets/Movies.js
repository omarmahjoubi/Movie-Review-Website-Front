import React from 'react';
import MovieRow from './MovieRow'

const Movies = ({ movies }) => {
       
  var movieCatalogJsx = []
  var index= 0
  while ((index + 3) < movies.length) {
    var movieRow = movies.splice(0,3) ;
    var movieRowJsx = <MovieRow movies={movieRow}/> ; 
    movieCatalogJsx.push(movieRowJsx) ;
    index = index + 3  ;}     
    
    if (movies.length === 1) {
      const movieRowJsx = <MovieRow movies={movies[0]}/>
      movieCatalogJsx.push(movieRowJsx) ;
    } else if (movies.length === 2) {
      const movieRowJsx = <MovieRow movies={movies.slice(0,2)}/>
      movieCatalogJsx.push(movieRowJsx) ;
    }
  
  
  return (
        
         



        <div class="container">
        <h1 align="center">Movies Catalog</h1>
       { movieCatalogJsx }
    </div>
    )
};


export default Movies ;




