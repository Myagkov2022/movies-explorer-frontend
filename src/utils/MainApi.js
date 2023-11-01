class MainApi {
    constructor(options) {
        this.baseURL = options.baseUrl
        this.headers = options.headers
    }

    _checkResponse(res) {
        console.log(res)
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }


    signUp( name, email, password ) {
        return fetch(`${this.baseURL}/signup`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ name, email, password }),
        }).then((res) => this._checkResponse(res));
    }

    signIn(email, password ) {
        return fetch(`${this.baseURL}/signin`, {
            method: "POST",
            headers:this.headers,
            body: JSON.stringify({ email, password }),
        }).then((res) => res.json())

    }


    getUserInfo() {
        return fetch(`${this.baseURL}/users/me`, {
            method: "GET",
            headers:this.headers
        }).then((res) => this._checkResponse(res));
    }

    updateUser({ name, email }) {
        return fetch(`${this.baseURL}/users/me`, {
            method: "PATCH",
            headers:this.headers,
            body: JSON.stringify({ name, email }),
        }).then((res) => this._checkResponse(res));
    }

    getSavedMovies() {
        return fetch(`${this.baseURL}/movies`, {
            method: "GET",
            headers:this.headers
        }).then((res) => this._checkResponse(res));
    }

    saveMovie(movie) {
        return fetch(`${this.baseURL}/movies`, {
            method: "POST",
            headers:this.headers,
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
            }),
        }).then((res) => this._checkResponse(res));
    }

    deleteMovie(movieId) {
        return fetch(`${this.baseURL}/movies/${movieId}`, {
            method: "DELETE",
            headers:this.headers
        }).then((res) => this._checkResponse(res));
    }
}


const mainApi = new MainApi({
    baseUrl: 'https://api.movies.myagkov.nomoredomainsicu.ru',
    headers: {
        authorization:   `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
});

export default mainApi