import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css'
function MoviesCardList ({isSavedMovies}) {

    return (
        <section className="movieCardList">
            <div className="movieCardList__container">
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={false}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={false}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={true}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={false}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={true}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={false}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={false}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={false}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={true}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={false}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={false}/>
                <MoviesCard  isSavedMovies={isSavedMovies} isSave={false}/>
            </div>
        </section>
    )
}
export default  MoviesCardList