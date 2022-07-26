import React  from "react";
import Header from './components/Header/Header.jsx'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experiance/Experiance'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/footer'


const App = () =>{
    return(
        <>
            <Header/>
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />

        </>
        
    )
}

export default App;