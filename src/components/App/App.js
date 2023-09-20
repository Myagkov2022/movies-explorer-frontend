import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import {useState} from "react";
import Result404 from "../Result404/Result404";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import './App.css'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route exact path="/" element={<Main isLoggedIn={isLoggedIn}/>} />
                    <Route exact path="/signup" element={<Register/>} />
                    <Route exact path="/signin" element={<Login/>} />
                    <Route exact path="/movies" element={<Movies isLoggedIn={isLoggedIn}/>} />
                    <Route exact path="/saved-movies" element={<SavedMovies isLoggedIn={isLoggedIn} isSavedMovies={true}/>} />
                    <Route exact path="/profile" element={<Profile isLoggedIn={isLoggedIn}/>} />
                    <Route exact path="*" element={<Result404/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;