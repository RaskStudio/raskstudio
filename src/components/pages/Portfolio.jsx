import NavBar from "/src/components/NavBar.jsx";
import "/src/App.css";
import { NavLink } from "react-router-dom";
import Footer from '/src/components/Footer.jsx'

export default function Portfolio() {
  return (
    <>
      <div className="SiteNav">
        <NavBar />
      </div>
      <div className="PfContainer">
        <div className="Headliner">
          <img src="./src/img/stjerne_img.png" alt="stjerne" />
          <h1>Websites</h1>
        </div>
        <div className="PfWebsites">
          <div className="PfLink">
            <NavLink to="/ribebryghus">
              <img
                src="./src/img/pf_img/pf_ribe_bryghus.png"
                alt="Ribe Bryghus"
              />
            </NavLink>
            <h2>Ribe Bryghus</h2>
          </div>
          <div className="PfLink">
            <NavLink to="/empty">
              <img
                src="./src/img/pf_img/pf_luftfoto_ribe.png"
                alt="Luftfoto Ribe"
              />
            </NavLink>
            <h2>Luftfoto Ribe</h2>
          </div>
          <div className="PfLink">
            <NavLink to="/empty">
              <img
                src="./src/img/pf_img/pf_badstue_rock.png"
                alt="Badstue Rock"
              />
            </NavLink>
            <h2>Badstue Rock</h2>
          </div>
          <div className="PfLink">
            <NavLink to="/empty">
              <img src="./src/img/pf_img/pf_nippon.png" alt="Nippon" />
            </NavLink>
            <h2>Nippon</h2>
          </div>
          <div className="PfLink">
            <NavLink to="/empty">
              <img
                src="./src/img/pf_img/pf_troejborg_bryg.png"
                alt="Trøjborgbryg"
              />
            </NavLink>
            <h2>Trøjbor Bryg</h2>
          </div>
        </div>
      </div>
      
      <div className="PhotoContainer">
      <div className="Headliner">
          <img src="./src/img/stjerne_img.png" alt="stjerne" />
          <h1>Photography</h1>
        </div>
        <div className="PhotoContent">
        <img src="./src/img/pf_img/pf_img_1.jpg" alt="Sommerfugl" />
        <img src="./src/img/pf_img/pf_img_2.png" alt="Sommerfugl" />
        <img src="./src/img/pf_img/pf_img_3.png" alt="Sommerfugl" />
        <img src="./src/img/pf_img/pf_img_4.png" alt="Træ" />
        <img src="./src/img/pf_img/pf_img_5.png" alt="Trappe" />
        <img src="./src/img/pf_img/pf_img_6.png" alt="Bygning" />
        <img src="./src/img/pf_img/pf_img_7.png" alt="Bygning" />
        <img src="./src/img/pf_img/pf_img_8.png" alt="Basket" />
        <img src="./src/img/pf_img/pf_img_9.png" alt="Bro" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
