import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import './SavedMovies.css'
import {useEffect, useState} from "react";
import {SHORTS_MOVIES} from "../../utils/constants";

function SavedMovies(props) {
    const [isChecked, setIsChecked] = useState( false);
    const [errorMessage, setErrorMessage] = useState('');
    const [filmsArray, setFilmsArray] = useState( props.movies);
    const [searchText, setSearchText] = useState('')
useEffect(() => {
    setFilmsArray( props.movies)
},[props.movies])
    const findFilms = () => {
        setErrorMessage('')
        if (searchText.length === 0) {
            setFilmsArray([]);
            setErrorMessage('Необходимо задать поисковый запрос')
        } else {
            let films = props.movies.filter(
                (obj) =>
                    obj.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
                    obj.nameEN.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
            )
            if (isChecked) {
                const shortFilms = films.filter(film => film.duration <= SHORTS_MOVIES)
                setFilmsArray(shortFilms)
            } else {
                setFilmsArray(films)
            }
            if (filmsArray.length<=0) {
                setErrorMessage('Ничего не найдено')
            }

        }


    };
    return (
        <>
            <Header isLoggedIn={props.isLoggedIn}/>
            <main className="movies">
                <div className="movies__container">
                    <SearchForm findFilms={findFilms} setSearchText={setSearchText} searchText={searchText} setIsChecked={setIsChecked} isChecked={isChecked}/>
                    <MoviesCardList isSavedMovies={props.isSavedMovies} movies={filmsArray? filmsArray : []} setSavedMovies={props.setSavedMovies} errorMessage={errorMessage}/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies