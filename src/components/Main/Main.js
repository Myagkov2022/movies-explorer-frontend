import Header from "../Header/Header";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import AboutMe from "./AboutMe/AboutMe";
import Techs from "./Techs/Techs";
import Footer from "../Footer/Footer";


function Main({isLoggedIn}) {

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <main>
                <Promo/>
                <AboutProject/>
                <Techs/>
                <AboutMe/>
            </main>
            <Footer/>
        </>
    )

}

export default Main