import Header from "../Header/Header";
import './Profile.css'
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../../context/context";
function Profile({isLoggedIn, setIsLoggedIn, updateUser, errorMessage,successMessage, setSuccessMessage}) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isChanged, setIsChanged] = useState(false)

    const [errorMessagePatternName, setErrorMessagePatternName] = useState('')
    const [errorMessagePatternEmail, setErrorMessagePatternEmail] = useState('')
    const [isValid, setIsValid] = useState(false)
    useEffect(() => {
        setSuccessMessage('')
    }, [name, email])
    useEffect(() => {
            setName(currentUser.name)
        setEmail(currentUser.email)
    },[currentUser])

    useEffect(() => {
        if (name === currentUser.name && email === currentUser.email) {
            setIsChanged(false)
        } else {
            setIsChanged(true)
        }
    },[name, email])

    const navigate = useNavigate();
    const signOut = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigate("/");
    }
    function checkName(e) {
        setName(e.target.value);
        const pattern = /^[A-Za-zА-Яа-яЁё /s-]{4,}/
        if (!pattern.test(String(e.target.value).toLocaleLowerCase())) {
            setErrorMessagePatternName("Некорректное имя")
        } else {
            setErrorMessagePatternName("")
        }
    }

    function checkEmail(e) {
        setEmail(e.target.value);
        const pattern = /^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
        if (!pattern.test(String(e.target.value).toLocaleLowerCase())) {
            setErrorMessagePatternEmail("Некорректный email")
        } else {
            setErrorMessagePatternEmail("")
        }
    }

    useEffect(() => {
        if (errorMessagePatternName || errorMessagePatternEmail ) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }, [errorMessagePatternName, errorMessagePatternEmail])

    function  submitUpdate(e) {
        e.preventDefault()
        updateUser(name, email)
    }
    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <section className="profile">
                <div className="profile__container">
                    <h2 className='profile__greeting'>Привет, {name}! </h2>
                    <form className='profile__form' noValidate onSubmit={submitUpdate}>
                        <fieldset className='profile__fieldset'>
                            <label className='profile__label'>
                                <p className='profile__input-title'>Имя</p>
                                <input className='profile__input'
                                       type='text'
                                       name='name'
                                       placeholder='Имя'
                                       required
                                       value={name}
                                       minLength={4}
                                       maxLength={30}
                                       pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                                       onChange={checkName}
                                />
                            </label>
                            {( errorMessagePatternName) && <div className="profile__error">{errorMessagePatternName}</div>}
                            <label className='profile__label'>
                                <p className='profile__input-title'>E-mail</p>
                                <input className='profile__input'
                                       type='email'
                                       name='email'
                                       placeholder='E-mail'
                                       required
                                       pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                                       minLength={2}
                                       maxLength={30}
                                       value={email}
                                       onChange={checkEmail}
                                />

                            </label>
                            {( errorMessagePatternEmail) && <div className="profile__error">{errorMessagePatternEmail}</div>}
                        </fieldset>
                        <div className='profile__nav'>
                            <p className="profile__error">{errorMessage}</p>
                            <p className="profile__success">{successMessage} {isValid} {isChanged}</p>
                            <button className='profile__button_edit' type='submit' disabled={!isChanged || !isValid}>Редактировать</button>
                            <button className='profile__button_sign-out' onClick={signOut} >Выйти из аккаунта</button>
                        </div>
                    </form>
                </div>
            </section>
        </>

    )
}
export default Profile