import {Link} from "react-router-dom";
import './Result404.css'

function Result404() {
    return (
        <section className="result404">
            <h2 className="result404__title">404</h2>
            <p className="result404__description">Страница не найдена</p>
            <Link to="/" className="result404__button">
                Назад
            </Link>
        </section>
    )
}

export  default Result404