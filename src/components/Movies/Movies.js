import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import './Movies.css'
import Preloader from "./Preloader/Preloader";
import {useEffect, useState} from "react";
import useResize from "../../utils/hooks/useResize";
import {
    ADD_MOVIES_CARD_1280, ADD_MOVIES_CARD_550,
    ADD_MOVIES_CARD_900,
    MOVIES_CARDS_1280,
    MOVIES_CARDS_550,
    MOVIES_CARDS_900, SHORTS_MOVIES
} from "../../utils/constants";


function Movies(props) {

    const [cardCounter, setCardCounter] = useState(0);
    const [isChecked, setIsChecked] = useState(false); //активирован ли чекбокс
    const [errorMessage, setErrorMessage] = useState(''); // обработка ошибок
    const [isSearch, setIsSearch] = useState(false); //выполнен ли поиск
    const [filmsArray, setFilmsArray] = useState( []);
    const [searchText, setSearchText] = useState('')
    const { currentScreen } = useResize();
    useEffect(() => {
        switch (currentScreen) {
            case "SCREEN_LG":
                setCardCounter(MOVIES_CARDS_1280);
                console.log(currentScreen)
                break;
            case "SCREEN_MD":
                setCardCounter(MOVIES_CARDS_900);
                console.log(currentScreen)
                break;
            default:
                setCardCounter(MOVIES_CARDS_550);
                console.log(currentScreen)
                break;
        }
    }, [currentScreen]);

    useEffect(() => {
        if (localStorage.getItem('films')) {
            setFilmsArray(JSON.parse(localStorage.getItem('films')))
            setIsChecked(JSON.parse(localStorage.getItem('isChecked')))
            setIsSearch(JSON.parse(localStorage.getItem('isSearch')))
            setSearchText(localStorage.getItem('searchText'))
        }
    }, [])

    const addMoviesCard = () => {
        let add = ADD_MOVIES_CARD_1280;
        if (currentScreen === "SCREEN_MD") {
            add = ADD_MOVIES_CARD_900;
        } else if (currentScreen === "SCREEN_SM") {
            add = ADD_MOVIES_CARD_550;
        }
        setCardCounter((prev) => prev + add);
    };

    const findFilms = () => {
        setErrorMessage('')
        props.setPreloader(true);
        setIsSearch(true)
        if (searchText.length === 0) {
            setFilmsArray([]);
            localStorage.setItem('films', JSON.stringify([]))
            setErrorMessage('Необходимо задать поисковый запрос')
        } else {
            let films = props.movies.filter(
                (obj) =>
                    obj.nameRU.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
                    obj.nameEN.toLowerCase().indexOf(searchText) !== -1
            )
            setFilmsArray(films)
            localStorage.setItem('films', JSON.stringify(films))
        }
        localStorage.setItem('searchText', searchText)
        localStorage.setItem('isSearch', JSON.stringify(isSearch))
        props.setPreloader(false);

    };

    useEffect( () => {
        if (filmsArray.length<=0 && searchText.length>0) {
            setErrorMessage('Ничего не найдено')
        }
    }, [filmsArray])

    const filteredMovies = isChecked
        ? filmsArray.filter((filteredMovie) => filteredMovie.duration <= SHORTS_MOVIES)
        : filmsArray;


    return (
        <>
            <Header isLoggedIn={props.isLoggedIn}/>
            <main className="movies">
                <div className="movies__container">

                    <SearchForm findFilms={findFilms} setSearchText={setSearchText} searchText={searchText} setIsChecked={setIsChecked} isChecked={isChecked}/>
                    { props.preloader ? <Preloader /> :
                        isSearch && <MoviesCardList movies={filteredMovies? filteredMovies : []} savedMovies={props.savedMovies} setSavedMovies={props.setSavedMovies} cardCounter={cardCounter} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>}
                    {cardCounter  < filteredMovies.length && <button className="movies__button" onClick={addMoviesCard}>Еще</button>}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Movies