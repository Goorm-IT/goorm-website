import "styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCloud } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="Header" style={{ position: "relative" }}>
      <span className="logo">
        <div className="logoImage"></div>
      </span>
      <span>
        <FontAwesomeIcon
          icon={faCloud}
          style={{
            width: "48px",
            height: "48px",
          }}
        />
      </span>
      <span style={{ position: "absolute", right: "0px" }}>
        <FontAwesomeIcon
          icon={faBars}
          style={{
            width: "48px",
            height: "48px",
          }}
        />
      </span>
    </div>
  );
}

export default Header;
