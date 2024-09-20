import SlideShow from "../SlideShow";
import NavBar from "/src/components/NavBar.jsx";
import "/src/App.css"
import { NavLink } from "react-router-dom";
import Footer from '/src/components/Footer.jsx'


export default function Home() {
  
    return (
        <>
      <div className="home_container">
        <NavBar />
        <SlideShow/>
        <div className="PortfolioBtn">
        <NavLink to="/portfolio">
            <h1>Check out Portfolio</h1>
        </NavLink>
        </div>
      </div>
      <Footer></Footer>
      </>
    )
  }

