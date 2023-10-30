import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import './Movies.css'
import Preloader from "./Preloader/Preloader";

function Movies({isLoggedIn}) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <main className="movies">
                <div className="movies__container">
                    <SearchForm/>
                     {/*<Preloader />*/}
                    <MoviesCardList/>
                    <button className="movies__button">Еще</button>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Movies