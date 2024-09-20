import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="FooterContent">
        <div className="Signatur">
          <img src="src/img/signatur_img.png" alt="Signatur" />
          <h2>Web Developer</h2>
        </div>
        <div className="FooterLinks">
          <div>
            <h2>01</h2>
            <a href="mailto:raskeanders@gmail.com">email</a>
          </div>
          <div>
            <h2>02</h2>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anders-rask-805a35274/"
            >
              linkedin
            </a>
          </div>
          <div>
            <h2>03</h2>
            <a target="_blank" href="https://www.instagram.com/a.raskstudio/">
              instagram
            </a>
          </div>
          <div>
            <h2>04</h2>
            <a target="_blank" href="https://www.youtube.com/@andersrask634">
              youtube
            </a>
          </div>
        </div>
      </div>
      <h3>
      © Copyright 2024. Rask Studio. All rights reserved.
      </h3>
    </footer>
  );
}
