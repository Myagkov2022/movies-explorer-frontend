import './Promo.css'

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a href="#about">
                    <button className="promo__button">Узнать больше</button>
                </a>
            </div>
        </section>
    )
}

export default Promo