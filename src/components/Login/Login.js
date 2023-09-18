import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";
import './Login.css'

function Login() {
    return (

        <section className="login">
            <div className="login__container">
                <div className="login__top">
                    <Link to="/" className="login__link-logo">
                        <img src={logo} alt="Логотип" className="login__logo" />
                    </Link>
                    <h2 className="login__title">Рады видеть!</h2>
                </div>

                <form noValidate className="login__form" name="login-form">
                    <div className="login__items">
                        <label>
                            <label className="login__label login__label_not-padding">E-mail</label>
                            <input className="login__input"
                                   type="email"
                                   name="email"
                                   placeholder="Введите Ваш E-mail"
                                   required={true}
                            />
                        </label>
                        <label>
                            <label className="login__label">Пароль</label>
                            <input className="login__input"
                                   type="password"
                                   name="password"
                                   placeholder="Введите Ваш Пароль"
                                   autoComplete="off"
                                   required={true}
                            />
                        </label>
                    </div>
                    <div className="login__bottom">
                        <button className="login__button" type="submit">Войти</button>
                        <Link className="login__link" to="/signup">
                            Ещё не зарегистрированы?
                            <span className="login__signup">Регистрация</span>
                        </Link>
                    </div>
                </form>
            </div>
        </section>

    )
}

export default Login