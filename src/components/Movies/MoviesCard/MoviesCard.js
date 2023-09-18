import film1 from '../../../images/film1.png'
import './MoviesCard.css'
function MoviesCard ({isSavedMovies, isSave}) {
    return (
        <div className="movies-card">
            <div className="movies-card__container">
                <div className="movies-card__top">
                    <h2 className="movies-card__title">33 слова о дизайне</h2>
                    {
                        isSavedMovies
                            ?
                            <button className="movies-card__delete button" type="submit"></button>
                            :
                                isSave
                                    ?
                                    <button className="movies-card__save movies-card__save_active button" type="submit"></button>
                                    :
                                    <button className="movies-card__save button" type="submit"></button>

                    }
                </div>
                <p className="movies-card__duration">1ч 47м</p>
            </div>
            <img src={film1} alt='33 слова' className="movies-card__img" />
        </div>
    )
}
export default  MoviesCard