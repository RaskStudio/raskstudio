import NavBar from "/src/components/NavBar.jsx";
import { useNavigate } from 'react-router-dom';
import "/src/App.css";
import Footer from '/src/components/Footer.jsx'

export default function RibeBryghus() {
    const navigate = useNavigate();
  return (
    <>
      <div className="SiteNav">
        <NavBar />
      </div>
      <div className="RbContiner">
        <div className="RbNav">
        <div className="Headliner">
          <img src="./src/img/stjerne_img.png" alt="stjerne" />
          <h1>Ribe Bryghus</h1>
        </div>
        <button onClick={() => navigate(-1)}>Back</button>
        </div>
        
        <p>
          Exam project in the 2nd semester. The goal for Mathias Risom and me
          was to redesign and optimize Ribe Bryghus old, outdated website. This
          involved a lot of field and desk research, photography, and
          videography of products, location, and staff. The website was fully
          programmed from scratch, and ended up being purchased by Ribe Bryghus.
        <br />
        <br />
          The website is currently being converted into a WordPress site to make
          it easier for Ribe Bryghus.
          </p>
          <div className="Headliner">
          <img src="./src/img/stjerne_img.png" alt="stjerne" />
          <h1>Example</h1>
        </div>
          <img src="./src/img/ribe_bryghus_forside.png" alt="Ribe Bryghus" />
      </div>
      <Footer></Footer>
    </>
  );
}
