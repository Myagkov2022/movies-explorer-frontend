class MoviesApi {
    constructor(options) {
        this.baseURL = options.baseURL;
        this.headers = options.headers;
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    }

    getMovies() {
        return fetch(`${this.baseURL}/beatfilm-movies`, {
            method: "GET",
            headers: this.headers,
        }).then((res) => this._checkResponse(res));
    }
}

const moviesApi = new MoviesApi({
    baseURL: "https://api.nomoreparties.co",
    headers: {
        "Content-Type": "application/json",
    },
});

export default moviesApi