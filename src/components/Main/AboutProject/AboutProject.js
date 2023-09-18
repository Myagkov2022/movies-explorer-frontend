import SectionTitle from "../SectionTitle/SectionTitle";
import './AboutProject.css'

function AboutProject() {
    return (
        <section className="about-project" id="about">
            <SectionTitle title="О проекте"/>
            <div className="project">
               <div className="project__item">
                   <h3 className="project__item-title">Дипломный проект включал 5 этапов</h3>
                   <p className="project__item-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
               </div>
                <div className="project__item">
                    <h3 className="project__item-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="project__item-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="project-time">
                <div className="project-time__backend">
                    <p className="project-time__title project-time__title_green">1 неделя</p>
                    <p className="project-time__item-text">Back-end</p>
                </div>
                <div className="project-time__frontend">
                    <p className="project-time__title project-time__title_grey">4 недели</p>
                    <p className="project-time__item-text">Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject