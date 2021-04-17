import Graph from "components/Graph";

function Home() {
  return (
    <div className="wrapper">
      <div className="imgWrapper">
        <div className="mainImage"></div>

        {/* <Graph /> */}
      </div>
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
  );
}

export default Home;
