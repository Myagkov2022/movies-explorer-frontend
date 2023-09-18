import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import './SavedMovies.css'

function SavedMovies({isLoggedIn,isSavedMovies}) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <main className="movies">
                <div className="movies__container">
                    <SearchForm/>
                    {/*<Preloader />*/}
                    <MoviesCardList isSavedMovies={isSavedMovies}/>
                    <button className="movies__button">Еще</button>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default SavedMovies