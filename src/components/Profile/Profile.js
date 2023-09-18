import Header from "../Header/Header";
import './Profile.css'
function Profile({isLoggedIn}) {
    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <section className="profile">
                <div className="profile__container">
                    <h2 className='profile__greeting'>Привет, Ваня!</h2>
                    <form className='profile__form' >
                        <fieldset className='profile__fieldset'>
                            <label className='profile__label'>
                                <p className='profile__input-title'>Имя</p>
                                <input className='profile__input'
                                       type='text'
                                       name='name'
                                       placeholder='Имя'
                                       required
                                />
                            </label>

                            <label className='profile__label'>
                                <p className='profile__input-title'>E-mail</p>
                                <input className='profile__input'
                                       type='email'
                                       name='email'
                                       placeholder='E-mail'
                                       required
                                />
                            </label>
                        </fieldset>
                        <div className='profile__nav'>
                            <button className='profile__button_edit' type='submit'>Редактировать</button>
                            <button className='profile__button_sign-out' >Выйти из аккаунта</button>
                        </div>
                    </form>
                </div>
            </section>
        </>

    )
}
export default Profile