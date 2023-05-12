// style
import "../style/profile.css";
// component
import LeftMenu from "../components/LeftMenu.jsx";
import CardOfKcal from "../components/CardOfKcal.jsx";
import ProfileName from "../components/ProfileName.jsx";
// assets
import kcal from "../assets/burn.svg";
import meat from "../assets/meat.svg";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";
// components
import Activity from "../components/recharts/Activity.jsx";
import Average from "../components/recharts/Average.jsx";
import Performance from "../components/recharts/Performance.jsx";
import Score from "../components/recharts/Score.jsx";
import { useParams } from "react-router-dom"; // get id
// for redirection
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//
// use API for refresh title
import { useSportSeeApi } from "../services/hooks/fetchApi.js";

//
function Profile() {
  let userId = useParams().id;
  // if undefined use user/12
  if (!userId) {
    userId = 12;
  }

  // Short-cut for userId
  if (useParams().id == 1) {
    userId = 12;
  }
  if (useParams().id == 2) {
    userId = 18;
  }

  // TEST API ? error on hooks call ?
  // const { error } = useSportSeeApi(userId, "firstName");
  // console.log("error :", error);

  // Methode de gestion d'erreur pour la redirection ?
  // R si userId ne correspond à aucun utilisateur ? (comment faire)
  // R si erreur 404 lors d'une requête test du firstName ?

  // ==== REDIRECTION ====
  // Redirection if bad Calls, if Error ? in API;
  // const navigate = useNavigate();
  // if (error) {
  // if (userId != 12 && userId != 18) {
  //   useEffect(() => {
  //     navigate("/error");
  //   }, [userId, navigate]);
  // } else
  return (
    <div className="mainContainer">
      <LeftMenu />
      <div className="rightContainer">
        <div className="profileName">
          <div>Bonjour</div>
          <ProfileName userId={userId} />
        </div>
        <div className="profileMessage">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </div>
        <div className="gridContainer">
          <div className="gridContainerLeft">
            <div className="activityGraph">
              <Activity userId={userId} />
            </div>
            <div className="bottomGraphs">
              <div className="bottomGraph">
                <Average userId={userId} />
              </div>
              <div className="bottomGraph">
                <Performance userId={userId} />
              </div>
              <div className="bottomGraph">
                <Score userId={userId} />
              </div>
            </div>
          </div>
          <div className="gridContainerRight">
            <CardOfKcal
              // data
              userId={userId}
              type="kcal"
              // color
              icon={kcal}
              ClassColor="TotalColor"
            />
            <CardOfKcal
              // data
              userId={userId}
              type="prot"
              // color
              icon={meat}
              ClassColor="ProtColor"
            />
            <CardOfKcal
              // data
              userId={userId}
              type={"carb"}
              // color
              icon={apple}
              ClassColor="CarbColor"
            />
            <CardOfKcal
              // data
              userId={userId}
              type={"lipid"}
              // color
              icon={cheeseburger}
              ClassColor="FatColor"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
