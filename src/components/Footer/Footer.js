import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__line"></div>
                <div className="footer__bottom">
                    <p className="footer__copyright">&copy;&nbsp;2023</p>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer_link" href="https://practicum.yandex.ru/"
                               target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer_link" href="https://github.com/Myagkov2022"
                               target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer