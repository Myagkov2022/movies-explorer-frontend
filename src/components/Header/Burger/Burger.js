import {useState} from "react";
import burger from '../../../images/burger.svg'
import closeIcon from '../../../images/delete.svg'
import account from '../../../images/account.svg'
import {Link, useLocation} from "react-router-dom";
import './Burger.css'

function Burger() {
    const [isBurgerActive, setIsBurgerActive] = useState(false)
    const location = useLocation()
    return (
        <div className='burger'>
            {!isBurgerActive ?
                <div className="burger__menu_not-active">
                    <button className="burger__button" onClick={()=>setIsBurgerActive(!isBurgerActive)}>
                        <img src={burger} alt="меню бургер" />
                    </button>
                </div>
                :
                <div className="burger__overlay">
                    <div className="burger__menu_active">
                        <button className="burger__button burger__button_close" onClick={()=>setIsBurgerActive(!isBurgerActive)}>
                            <img src={closeIcon} alt="закрыть меню бургер" className=" burger__close" />
                        </button>
                        <div className="burger__content">
                            <nav className="burger__nav">
                                <ul className="burger__list">
                                    <li className={`burger__item  ${location.pathname === "/" ? 'burger__item_active':''}`}>
                                        <Link to="/"  className="burger__link">
                                            Главная
                                        </Link>
                                    </li>
                                    <li className={`burger__item  ${location.pathname === "/movies" ? 'burger__item_active':''}`} >
                                        <Link to="/movies"  className="burger__link" >
                                            Фильмы
                                        </Link>
                                    </li>
                                    <li className={`burger__item  ${location.pathname === "/saved-movies" ? 'burger__item_active':''}`}>
                                        <Link to="/saved-movies" className="burger__link">
                                        Сохраненные фильмы
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <Link to="/profile" className="burger__account-link">
                                <div className="burger__bottom">
                                    <p className="burger__account">Аккаунт</p>
                                    <img src={account} alt="Логотип аккаунта" className="burger__account-icon" />
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Burger