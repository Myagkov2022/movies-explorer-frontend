import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";
import './Register.css'
import {useEffect, useState} from "react";

function Register({handleSignUp, errorMessage}) {
    const [errorMessagePatternName, setErrorMessagePatternName] = useState('')
    const [errorMessagePatternEmail, setErrorMessagePatternEmail] = useState('')
    const [errorMessagePatternPass, setErrorMessagePatternPass] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp(formValue.name, formValue.email, formValue.password)
    }



    const checkName = (e) => {
        handleChange(e)
        const pattern = /^[A-Za-zА-Яа-яЁё /s-]{4,}/
        if (!pattern.test(String(e.target.value).toLocaleLowerCase())) {
            setErrorMessagePatternName("Некорректное имя")
        } else {
            setErrorMessagePatternName("")
        }
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
        if (errorMessagePatternName || errorMessagePatternEmail || errorMessagePatternPass) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [errorMessagePatternName, errorMessagePatternEmail, errorMessagePatternPass])

    return (

        <section className="register">
            <div className="register__container">
                <div className="register__top">
                    <Link to="/">
                        <img src={logo} alt="Логотип" className="register__logo" />
                    </Link>
                    <h2 className="register__title">Добро пожаловать!</h2>
                </div>

                <form noValidate className="register__form" name="register-form" onSubmit={handleSubmit}>
                    <div className="register__items">
                        <label>
                            <label className="register__label register__label_not-padding">Имя</label>
                            <input className="register__input"
                                   type="text"
                                   name="name"
                                   placeholder="Введите ваше имя"
                                   autoComplete="off"
                                   required={true}
                                   value={formValue.name}
                                   onChange={checkName}
                                   minLength={4}
                                   maxLength={30}
                                   pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                            />
                            {(errorMessagePatternName) && <div className="register__error">{errorMessagePatternName}</div>}
                        </label>
                        <label>
                            <label className="register__label">E-mail</label>
                            <input className="register__input"
                                   type="email"
                                   name="email"
                                   placeholder="Введите ваш E-mail"
                                   required={true}
                                   pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                                   minLength={2}
                                   maxLength={30}
                                   value={formValue.email}
                                   onChange={checkEmail}
                            />
                            {( errorMessagePatternEmail) && <div className="register__error">{errorMessagePatternEmail}</div>}
                        </label>
                        <label>
                            <label className="register__label">Пароль</label>
                            <input className="register__input"
                                   type="password"
                                   name="password"
                                   placeholder="Введите ваш пароль"
                                   autoComplete="off"
                                   minLength={4}
                                   maxLength={8}
                                   required={true}
                                   value={formValue.password}
                                   onChange={checkPassword}
                            />
                            {( errorMessagePatternPass) && <div className="register__error">{errorMessagePatternPass}</div>}
                        </label>
                    </div>
                    <div className="register__bottom">
                        <p className="register__error register__error_center">{errorMessage}</p>
                        <button className="register__button" type="submit" disabled={!isValid}>Зарегистрироваться</button>
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