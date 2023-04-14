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
            <div className="activityGraph"></div>
            <div className="bottomGraphs">
              <div className="bottomGraph"></div>
              <div className="bottomGraph"></div>
              <div className="bottomGraph"></div>
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
              Qty="150g"
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
