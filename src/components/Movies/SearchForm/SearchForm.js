import './SearchForm.css'
function SearchForm () {
    return (
        <form noValidate className="search-form">
            <div className="search-form__container">
                <div className="search-form__input-logo"></div>
                <input
                    type="text"
                    name="text"
                    className="search-form__input"
                    placeholder="Фильм"
                    required
                />
                <button className="search-form__button"></button>
            </div>
            <label className="search-form__switch">
                <input className="search-form__checkbox-input" type="checkbox" />
                <div className="search-form__checkbox-custom"></div>
                <p className="search-form__shorts">Короткометражки</p>
            </label>
        </form>
    )
}
export default  SearchForm