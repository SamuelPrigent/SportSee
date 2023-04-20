// style
import "../style/profile.css";
// component
import LeftMenu from "../components/LeftMenu.jsx";
import CardOfKcal from "../components/CardOfKcal.jsx";
// assets
import kcal from "../assets/burn.svg";
import meat from "../assets/meat.svg";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";
// components
import Activity from "../components/recharts/Activity.jsx";
import Average from "../components/recharts/Average.jsx";
import Radar from "../components/recharts/Radar.jsx";
import Score from "../components/recharts/Score.jsx";

function Profile() {
  return (
    <div className="mainContainer">
      <LeftMenu />
      <div className="rightContainer">
        <div className="profileName">
          <div>Bonjour</div>
          <div className="profileNameColor">Thomas</div>
        </div>
        <div className="profileMessage">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </div>
        <div className="gridContainer">
          <div className="gridContainerLeft">
            <div className="activityGraph">
              <Activity />
            </div>
            <div className="bottomGraphs">
              <div className="bottomGraph">
                <Average />
              </div>
              <div className="bottomGraph">
                <Radar />
              </div>
              <div className="bottomGraph">
                <Score />
              </div>
            </div>
          </div>
          <div className="gridContainerRight">
            <CardOfKcal
              icon={kcal}
              Qty="1,930kcal"
              Unit="Kcal"
              ClassColor="TotalColor"
            />
            <CardOfKcal
              icon={meat}
              Qty="155g"
              Unit="Proteines"
              ClassColor="ProtColor"
            />
            <CardOfKcal
              icon={apple}
              Qty="290g"
              Unit="Glucides"
              ClassColor="CarbColor"
            />
            <CardOfKcal
              icon={cheeseburger}
              Qty="50g"
              Unit="Lipides"
              ClassColor="FatColor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
