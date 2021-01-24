import React from 'react';

const MovieRow = ({ movies }) => {
    return (
        <div class="row">
         {movies.map((movie,index) => 
            <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src={movie.cover_url} alt=""/></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{movie.title}</a>
                </h4>
                <h5>Director : {movie.director}</h5>
                <h5>Release year : { movie.release_year}</h5>
                <h5>genre : { movie.genre}</h5>
                <p class="card-text"><h5>Synopsis : { movie.synopsis}</h5></p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
            </div>
        

    )}
    </div>
    )
};

export default MovieRow;