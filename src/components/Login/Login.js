import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";
import './Login.css'
import {useEffect, useState} from "react";

function Login({handleSignIn, errorMessage}) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })
    const [errorMessagePatternEmail, setErrorMessagePatternEmail] = useState('')
    const [errorMessagePatternPass, setErrorMessagePatternPass] = useState('')
    const [isValid, setIsValid] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    const checkEmail = (e) => {
        handleChange(e)

        const pattern = /^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
        if (!pattern.test(String(e.target.value).toLocaleLowerCase())) {
            setErrorMessagePatternEmail("Некорректный email")
        } else {
            setErrorMessagePatternEmail("")
        }
    }

    const checkPassword = (e) => {
        handleChange(e)
        if (e.target.value.length < 4 || e.target.value.length > 8) {
            setErrorMessagePatternPass("Пароль должен содержать от 4 до 8 символов")
            if (!e.target.value) {
                setErrorMessagePatternPass("Пароль не может быть пустым")
            }
        } else {
            setErrorMessagePatternPass("")
        }
    }

    useEffect(() => {
        if ( errorMessagePatternEmail || errorMessagePatternPass) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [errorMessagePatternEmail, errorMessagePatternPass])


    const handleSubmit = (e) => {
        e.preventDefault();

        handleSignIn(formValue.email,formValue.password)
    }
    return (

        <section className="login">
            <div className="login__container">
                <div className="login__top">
                    <Link to="/" className="login__link-logo">
                        <img src={logo} alt="Логотип" className="login__logo" />
                    </Link>
                    <h2 className="login__title">Рады видеть!</h2>
                </div>

                <form noValidate className="login__form" name="login-form" onSubmit={handleSubmit}>
                    <div className="login__items">
                        <label>
                            <label className="login__label login__label_not-padding">E-mail</label>
                            <input className="login__input"
                                   type="email"
                                   name="email"
                                   placeholder="Введите Ваш E-mail"
                                   pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                                   minLength={2}
                                   maxLength={30}
                                   required={true}
                                   value={formValue.email} onChange={checkEmail}
                            />
                            {( errorMessagePatternEmail) && <div className="login__error">{errorMessagePatternEmail}</div>}
                        </label>
                        <label>
                            <label className="login__label">Пароль</label>
                            <input className="login__input"
                                   type="password"
                                   name="password"
                                   placeholder="Введите Ваш Пароль"
                                   minLength={4}
                                   maxLength={8}
                                   autoComplete="off"
                                   required={true}
                                   value={formValue.password} onChange={checkPassword}
                            />
                            {( errorMessagePatternPass) && <div className="login__error">{errorMessagePatternPass}</div>}
                        </label>
                    </div>
                    <div className="login__bottom">
                        <p className="login__error login__error_center">{errorMessage}</p>
                        <button className="login__button" type="submit" disabled={!isValid}>Войти</button>
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