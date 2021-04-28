import Graph from "components/Graph";
import { useRef } from "react";
import cloudImg from "resources/cloud_background.png";
import "styles/Home.css";

function Home() {
  const nav = useRef(false);

  const onClick = () => {
    nav.current.style.display =
      nav.current.style.display === "none" ? "" : "none";
    console.log();
  };

  return (
    <div className="home">
      <div className="home__background">
        <img className="background__image" />
      </div>
      <div className="home__logo">
        <div className="logo__text">
          <span>goorm</span>
        </div>
        <div className="logo__slogan">
          <svg>
            <text x="0%" y="1rem">
              안양대학교 IT동아리
            </text>
          </svg>
        </div>
      </div>
      <button onClick={onClick}>hamburger</button>
      <div ref={nav} style={{ display: "none" }}>
        <ul>
          <li>
            <a href="http://localhost:3000/">HOME</a>
          </li>
          <li>
            <a href="http://localhost:3000/#projects">PROJECT</a>
          </li>
          <li>
            <a href="http://localhost:3000/#members">MEMBERS</a>
          </li>
          <li>
            <a href="http://localhost:3000/#recruit">RECRUIT</a>
          </li>
          <li>
            <a href="http://localhost:3000/#admin">ADMIN</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
