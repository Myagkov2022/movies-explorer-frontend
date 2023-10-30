import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";
import './Register.css'

function Register() {
    return (

        <section className="register">
            <div className="register__container">
                <div className="register__top">
                    <Link to="/">
                        <img src={logo} alt="Логотип" className="register__logo" />
                    </Link>
                    <h2 className="register__title">Добро пожаловать!</h2>
                </div>

                <form noValidate className="register__form" name="register-form">
                    <div className="register__items">
                        <label>
                            <label className="register__label register__label_not-padding">Имя</label>
                            <input className="register__input"
                                   type="text"
                                   name="name"
                                   placeholder="Введите ваше имя"
                                   autoComplete="off"
                                   required={true}
                            />
                        </label>
                        <label>
                            <label className="register__label">E-mail</label>
                            <input className="register__input"
                                   type="email"
                                   name="email"
                                   placeholder="Введите ваш E-mail"
                                   required={true}
                            />
                        </label>
                        <label>
                            <label className="register__label">Пароль</label>
                            <input className="register__input"
                                   type="password"
                                   name="password"
                                   placeholder="Введите ваш пароль"
                                   autoComplete="off"
                                   required={true}
                            />
                        </label>
                        <p className="register__error">Что-то пошло не так...</p>
                    </div>
                    <div className="register__bottom">
                        <button className="register__button" type="submit">Зарегистрироваться</button>
                        <Link className="register__link" to="/signin">
                            Уже зарегистрированы?
                            <span className="register__signin">Войти</span>
                        </Link>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Register