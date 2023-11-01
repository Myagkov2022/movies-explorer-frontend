import {useNavigate} from "react-router-dom";
import './Result404.css'



function Result404() {

    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }

    return (
        <section className="result404">
            <h2 className="result404__title">404</h2>
            <p className="result404__description">Страница не найдена</p>
            <button className="result404__button" onClick={goBack}>
                Назад
            </button>
        </section>
    )
}

export  default Result404