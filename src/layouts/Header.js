import { NavLink } from "react-router-dom";
import myimg from "../assets/images/myimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCircleInfo,
  faEnvelope,
  faFile,
  faHardDrive,
  faHouse,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin, faSquareBehance, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <>
      <header>
        <div className="content">
          <div className="info">
            <div className="imag-profile">
              <img src={myimg} alt="" srcSet="" />
            </div>
            <div className="name">
              <h1>
                Elmharmache <span>Nassim</span>
              </h1>
            </div>
            <div className="social">
              <div className="soc">
              <FontAwesomeIcon icon={faFacebook} className="iconat"/>
              </div>
              <div className="soc">
              <FontAwesomeIcon icon={faLinkedin} className="iconat"/>
              </div>
              <div className="soc">
              <FontAwesomeIcon icon={faGithub} className="iconat"/>
              </div>
              <div className="soc">
              <FontAwesomeIcon icon={faTwitter} className="iconat"/>
              </div>
              <div className="soc">
              <FontAwesomeIcon icon={faSquareBehance} className="iconat"/>
              </div>
            </div>
          </div>
          <ul className="navbar-links">
            <li>
              <NavLink to={"/"} className="navlink">
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} className="navlink">
                <FontAwesomeIcon icon={faCircleInfo} />
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/skills"} className="navlink">
                <FontAwesomeIcon icon={faFile} />
                <span>Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/skills"} className="navlink">
                <FontAwesomeIcon icon={faSquarePollVertical} />
                <span>Skills</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/skills"} className="navlink">
                <FontAwesomeIcon icon={faHardDrive} />
                <span>Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/works"} className="navlink">
                <FontAwesomeIcon icon={faBriefcase} />
                <span>Works</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact-me"} className="navlink">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Contact Me</span>
              </NavLink>
            </li>
          </ul>
          <div className="btmnav">
            <p>ELMHARMACHE NASSIM .Copyright © 2023. CASABLANCA MOROCCO </p>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
