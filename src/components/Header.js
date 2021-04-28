import "styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCloud } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header">
      <div className="header__item">
        <div className="logoWrapper">
          <span className="logo-image">
            <span className="logoImage"></span>
            <img src="../resources/background1.png" />
          </span>
          <span className="logo-text">
            <FontAwesomeIcon
              icon={faCloud}
              style={{
                width: "48px",
                height: "48px",
              }}
            />
          </span>
        </div>
      </div>
      <div className="header__item">
        <button className="bar" type="button">
          <div className="icon bar_icon">
            <span className="l1 line"></span>
            <span className="l2 line"></span>
            <span className="l3 line"></span>
            <small className="menu">menu</small>
          </div>
          {/* <div className="icon close_icon">
          <span className="l1"></span>
          <span className="l2"></span>
        </div> */}
        </button>
      </div>
    </div>
  );
}

export default Header;
