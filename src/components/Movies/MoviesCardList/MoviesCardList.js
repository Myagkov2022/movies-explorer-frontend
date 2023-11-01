import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'
function MoviesCardList ({movies, isSavedMovies, savedMovies,setSavedMovies, cardCounter, errorMessage}) {
    let films =[]
    if( movies.length>0) {
        films = movies.slice(0, cardCounter)
    }

    return (
        <section className="movieCardList">
            {errorMessage && <p className="movieCardList__not-found"> {errorMessage}</p>}
            <div className="movieCardList__container">
                {films.map(movie => <MoviesCard  key={movie.id} movie={movie} savedMovies={savedMovies} isSavedMovies={isSavedMovies} setSavedMovies={setSavedMovies}/>)}

            </div>
        </section>
    )
}
export default  MoviesCardList