// style
import "../style/error.css";
// component
import LeftMenu from "../components/LeftMenu.jsx";

function Error() {
  return (
    <div className="mainContainer">
      <LeftMenu />
      <div className="rightContainer">
        <div className="errorText">Erreur 404</div>
      </div>
    </div>
  );
}

export default Error;
