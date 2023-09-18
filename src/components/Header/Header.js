import './Header.css'
import {Link, useLocation} from "react-router-dom";
import logo from "../../images/logo.svg";
import account from '../../images/account.svg'
import Burger from "./Burger/Burger";

function Header ({isLoggedIn}) {
    const location = useLocation()
    return (
        <>
            {!isLoggedIn ? (
                <header className="header">
                    <div className="header__container">
                        <Link to="/">
                            <img src={logo} alt="Логотип" className="header__logo" />
                        </Link>
                        <div className="header__right">
                            <Link to="/signup" className="header__signup">
                                Регистрация
                            </Link>
                            <Link to="/signin" className="header__signin">
                                Войти
                            </Link>
                        </div>
                    </div>
                </header>
            ) :
                (
                    <header className='header'>
                        <div className={` header__container header__container-auth ${location.pathname !== "/" ? 'header__container-white':''}`}>
                            <Link to="/" className="header__logo">
                                <img src={logo} alt="логотип" />
                            </Link>
                            <div className="header__auth-nav">
                                <div className="header__auth-links">
                                    <Link to="/movies" className={`header__auth-link header__auth-link_films ${location.pathname === "/movies" ? 'header__auth-link_active':''}`}>Фильмы</Link>
                                    <Link to="/saved-movies" className={`header__auth-link ${location.pathname === "/saved-movies" ? 'header__auth-link_active':''}`}>Сохранённые фильмы</Link>
                                </div>
                            <Link to="/profile"  className="header__auth-account">Аккаунт <img src={account} alt="аккаунт" className={` header__auth-account-logo ${location.pathname !== "/" ? 'header__auth-account-logo_grey':''}`}/></Link>
                            </div>
                            <Burger/>
                        </div>
                    </header>
                )
            }
        </>
    )
}

export default Header