// assets
import zen from "../assets/zen.svg";
import nage from "../assets/nage.svg";
import velo from "../assets/velo.svg";
import haltere from "../assets/haltere.svg";

// style
import "../style/leftmenu.css";

function LeftMenu() {
  return (
    <div className="leftmenuContainer">
      <div className="leftMenuIcons">
        <div className="leftMenuIconBox">
          <img src={zen} className="leftMenuIcon" alt="Vite logo" />
        </div>
        <div className="leftMenuIconBox">
          {" "}
          <img src={nage} className="leftMenuIcon" alt="Vite logo" />
        </div>
        <div className="leftMenuIconBox">
          {" "}
          <img src={velo} className="leftMenuIcon" alt="Vite logo" />
        </div>
        <div className="leftMenuIconBox">
          {" "}
          <img src={haltere} className="leftMenuIcon" alt="Vite logo" />
        </div>
      </div>
      <div className="leftMenuCopyright">Copyright, SportSee 2020</div>
    </div>
  );
}

export default LeftMenu;
