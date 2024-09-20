import { useState } from "react";
import NavBar from "/src/components/NavBar.jsx";
import "/src/App.css";
import Footer from '/src/components/Footer.jsx'

export default function About() {
  const [activeSkill, setActiveSkill] = useState("Coding");

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
  };

  return (
    <>
      <div className="SiteNav">
        <NavBar />
      </div>

      <div className="AboutContainer">
        <div className="AboutContent">
          <div className="Headliner">
            <img src="./src/img/stjerne_img.png" alt="stjerne" />
            <h1>About Me</h1>
          </div>
          <p>
            My name is Anders Rask. I am a Multimedia Design student at
            Erhvervsakademi Aarhus. I am a creative, energetic person who loves
            design and web development.
          </p>
        </div>
        <img src="./src/img/anders_img.png" alt="Anders" />
      </div>

      <div className="SkillsContainer">
        <div className="SkillInfo">
          <div className="Headliner">
            <img src="./src/img/stjerne_img.png" alt="stjerne" />
            <h1>Skills</h1>
          </div>
          <p>
            Generally, I am the type who quickly picks up a new skill and
            usually becomes good at it as well. In addition to the expected
            skills for multimedia designers, I am strong in photography and
            drone photography. (See portfolio)
          </p>
          <p>Below, you can see my skills marked by my level of proficiency.</p>
        </div>
      </div>

      <div className="SkillCatalog">
        <div className="SkillSelector">
          <div
            className={`Skill Coding ${
              activeSkill === "Coding" ? "activeSkill" : ""
            }`}
            onClick={() => handleSkillClick("Coding")}
          >
            <h2>Coding</h2>
          </div>
          <div
            className={`Skill Programs ${
              activeSkill === "Programs" ? "activeSkill" : ""
            }`}
            onClick={() => handleSkillClick("Programs")}
          >
            <h2>Programs</h2>
          </div>
          <div
            className={`Skill OS ${activeSkill === "OS" ? "activeSkill" : ""}`}
            onClick={() => handleSkillClick("OS")}
          >
            <h2>OS</h2>
          </div>
        </div>
        <div
          className={`SkillContent SkillCoding ${
            activeSkill === "Coding" ? "" : "hidden"
          }`}
        >
          <img src="./src/img/skills_img/html_img.png" alt="Html" />
          <img src="./src/img/skills_img/css_img.png" alt="Css" />
          <img src="./src/img/skills_img/js_img.png" alt="JavaScript" />
          <img src="./src/img/skills_img/react_img.png" alt="React" />
        </div>
        <div
          className={`SkillContent SkillPrograms ${
            activeSkill === "Programs" ? "" : "hidden"
          }`}
        >
          <img src="./src/img/skills_img/ps_img.png" alt="Photoshop" />
          <img src="./src/img/skills_img/lr_img.png" alt="LightRoom" />
          <img src="./src/img/skills_img/id_img.png" alt="Indesign" />
          <img src="./src/img/skills_img/ai_img.png" alt="Illustrator" />
          <img src="./src/img/skills_img/figma_img.png" alt="Figma" />
          <img src="./src/img/skills_img/wordpress_img.png" alt="WordPress" />
        </div>
        <div
          className={`SkillContent SkillOS ${
            activeSkill === "OS" ? "" : "hidden"
          }`}
        >
          <img src="./src/img/skills_img/apple_img.png" alt="Apple" />
          <img src="./src/img/skills_img/windows_img.png" alt="Windows" />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
