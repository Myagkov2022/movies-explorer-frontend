import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import {useEffect, useState} from "react";
import Result404 from "../Result404/Result404";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import './App.css'
import mainApi from "../../utils/MainApi";
import {CurrentUserContext} from '../../context/context'
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [preloader, setPreloader] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [movies, setMovies] = useState([]);
    const [savedMovies, setSavedMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate()
    /*  USER*/
    useEffect(() => {
        if (isLoggedIn) {
            Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
                .then(([res, savedMovies]) => {
                    setCurrentUser(res);
                    setSavedMovies(savedMovies);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [isLoggedIn]);

    function handleSignIn( email, password ) {
        mainApi
            .signIn( email, password )
            .then((user) => {
                if (user.message) {
                    setErrorMessage(user.message)
                } else {
                    setIsLoggedIn(true);
                    localStorage.setItem("token", user.token);
                    navigate("/movies", { replace: true });
                }
            })
            .catch((err) => {
                if (err) {
                    setErrorMessage(
                        "При авторизации произошла ошибка. Переданный токен некорректен."
                    );
                }
            });
    }

    function handleCheckToken() {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
            mainApi
                .getUserInfo()
                .then((user) => {
                    if (user) {
                        setCurrentUser({ name: user.name, email: user.email });
                        setIsLoggedIn(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setIsLoggedIn(false);
                    setCurrentUser(null);
                });
        }
    }
    useEffect(() => {
        handleCheckToken();
    }, []);

    function updateUser( name, email ) {
        if (email !== currentUser.email || name !== currentUser.name) {
            return mainApi
                .updateUser({ name, email })
                .then((res) => {
                    setCurrentUser({ name: res.name, email: res.email });
                    setErrorMessage("");
                    setSuccessMessage("Данные успешно обновлены");
                })

                .catch((err) => {
                    setSuccessMessage(" ");
                    setCurrentUser({ name: currentUser.name, email: currentUser.email });
                    console.log(err);
                    if (err === "Ошибка: 409") {
                        setErrorMessage("Пользователь с таким email уже существует.");
                    }
                    if (err === "Ошибка: 500") {
                        setErrorMessage("При обновлении профиля произошла ошибка.");
                    }
                });
        }
    }

    useEffect(() => {
        setErrorMessage("");
    }, [navigate]);

    function handleSignUp( name, email, password ) {
        mainApi
            .signUp( name, email, password )
            .then(() => {
                handleSignIn(email, password)
            })
            .catch((err) => {
                if (err === "Ошибка: 409") {
                    setErrorMessage("Пользователь с таким email уже существует.");
                } else if (err === "Ошибка: 400") {
                    setErrorMessage("Переданы некорректные данные при создании профиля.");
                } else {
                    setErrorMessage("При регистрации пользователя произошла ошибка.");
                }
            });
    }

    useEffect(() => {
        getMoviesHandler()
        getSavedMoviesHandler()
    }, [isLoggedIn]);

    function getMoviesHandler() {
        setPreloader(true)
        MoviesApi
            .getMovies()
            .then(movies => {
                setMovies(movies)
            }).finally(()=>
            setPreloader(false))
    }

    function getSavedMoviesHandler() {
        MainApi
            .getSavedMovies()
            .then(movies => {
                if (movies.message) {
                    setErrorMessage(movies.message)
                } else {
                    setMovies(movies)
                    setPreloader(false)
                }
            })
            .catch(err => {
                if (err) {
                    setErrorMessage(
                        "При загрузке произошла ошибка."
                    );
                }
            })
    }



    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                    <div className='App'>
                        <Routes>
                            <Route exact path="/" element={<Main isLoggedIn={isLoggedIn}/>} />
                            <Route
                                path="/signin"
                                element={
                                    isLoggedIn ? (
                                        <Navigate to="/" />
                                    ) : (
                                        <Login handleSignIn={handleSignIn} errorMessage={errorMessage} />
                                    )
                                }
                            />
                            <Route exact path="/signup" element={<Register handleSignUp={handleSignUp}  errorMessage={errorMessage}/>} />

                            <Route path="/movies" element={ <ProtectedRoute
                                element={Movies}
                                isLoggedIn={isLoggedIn}
                                isSavedMovies={true}
                                setPreloader ={setPreloader}
                                preloader={preloader}
                                movies={movies}
                                savedMovies={savedMovies}
                                setSavedMovies={setSavedMovies}
                            /> }/>

                            <Route path="/saved-movies" element={ <ProtectedRoute
                                element={SavedMovies}
                                isLoggedIn={isLoggedIn}
                                isSavedMovies={true}
                                movies={savedMovies}
                                setSavedMovies={setSavedMovies}
                            /> }/>

                            <Route exact path="/profile" element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} updateUser={updateUser}  errorMessage={errorMessage} successMessage={successMessage} setSuccessMessage={setSuccessMessage}/>} />
                            <Route exact path="*" element={<Result404/>} />
                        </Routes>
                    </div>
            </CurrentUserContext.Provider>
        </>
    )
}

export default App;