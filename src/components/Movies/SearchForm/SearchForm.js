import './SearchForm.css'

function SearchForm (props) {
function text (e) {
    props.setSearchText(e.target.value)
}
function changeChecked () {
    props.setIsChecked(!props.isChecked)
    localStorage.setItem('isChecked',JSON.stringify(!props.isChecked) )
}

    return (
        <form noValidate className="search-form" onSubmit={e => e.preventDefault()}>
            <div className="search-form__container">
                <div className="search-form__input-logo"></div>
                <input
                    type="text"
                    name="text"
                    className="search-form__input"
                    placeholder="Фильм"
                    value={props.searchText}
                    onChange={text}
                    required
                />
                <button className="search-form__button" onClick={() => props.findFilms()}></button>
            </div>
            <label className="search-form__switch">
                <input className="search-form__checkbox-input" type="checkbox" checked={props.isChecked} onChange={changeChecked} />

                <div className="search-form__checkbox-custom"></div>
                <p className="search-form__shorts">Короткометражки</p>
            </label>
        </form>
    )
}
export default  SearchForm