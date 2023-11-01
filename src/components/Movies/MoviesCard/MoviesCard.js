import './MoviesCard.css'
import {useEffect, useState} from "react";
import mainApi from "../../../utils/MainApi";
function MoviesCard ({isSavedMovies, movie,savedMovies, setSavedMovies}) {
    const durationHour = Math.floor(movie.duration / 60);
    const durationMin = movie.duration % 60;
    const [isSave, setIsSave] = useState(false);
    let obj = {}
    useEffect(() => {
        if (!isSavedMovies){
            obj = savedMovies.find(o => o.movieId === movie.id);
            if (obj !== undefined) {
                setIsSave(true)
            }
        }
    },[isSave])

    function deleteMovie(id) {
        mainApi.deleteMovie(id).then(() => {
            setSavedMovies(savedMovies.filter((savedMovie) => movie.movieId !== savedMovie.movieId));
        })
    }

    function deleteSavedMovie() {
        deleteMovie(movie._id)

    }

useEffect(()=>{console.log(savedMovies)},[])

    function toggleMovieLike(movie) {
        const isLiked = savedMovies.some(
            (savedMovie) => savedMovie.movieId === movie.id
        );
        if (!isLiked) {
            mainApi
                .saveMovie(movie)
                .then((newMovie) => {
                    setIsSave(true)
                    setSavedMovies([newMovie, ...savedMovies]);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            const isLikedMovie = savedMovies.find((i) => i.movieId === movie.id)._id;
            mainApi
                .deleteMovie(isLikedMovie)
                .then(() => {
                    setIsSave(false)
                    setSavedMovies((state) => state.filter((i) => i.movieId !== movie.id));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    function  handleDelete( ) {
        toggleMovieLike(movie)
    }
    return (
        <div className="movies-card">
            <div className="movies-card__container">
                <div className="movies-card__top">
                    <a
                        className="movies-card__link"
                        href={movie.trailerLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2 className="movies-card__title">{movie.nameRU} </h2>
                    </a>
                    {
                        isSavedMovies
                            ?
                            <button className="movies-card__delete button" type="submit" onClick={deleteSavedMovie} ></button>
                            :
                            isSave
                                ?
                                <button className="movies-card__save movies-card__save_active button" type="submit" onClick={handleDelete}></button>
                                :
                                <button className="movies-card__save button" type="submit"  onClick={handleDelete}></button>

                    }
                </div>
                <a
                    className="movies-card__link"
                    href={movie.trailerLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    <p className="movies-card__duration">{`${durationHour === 0 ? '' : durationHour + 'ч'} ${durationMin} мин `}</p>
                </a>
            </div>
            <a
                className="movies-card__link"
                href={movie.trailerLink}
                target="_blank"
                rel="noreferrer"
            >
                <img src={isSavedMovies ? movie.image:`https://api.nomoreparties.co${movie.image.url}`} alt='33 слова' className="movies-card__img" />
            </a>
        </div>
    )
}
export default  MoviesCard