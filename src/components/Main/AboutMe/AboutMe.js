import SectionTitle from "../SectionTitle/SectionTitle";
import './AboutMe.css'
import MyPhoto from '../../../images/myPhoto.png'
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return (
        <section className="about-me">
            <SectionTitle title="Студент"/>
            <div className="about-me__student">
                <div className="about-me__information">
                    <h3 className="about-me__name">Иван</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="about-me__github" href="https://github.com/Myagkov2022" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="about-me__img" src={MyPhoto} alt="Мягков Иван"></img>
            </div>
            <Portfolio/>
        </section>
    )
}

export default AboutMe