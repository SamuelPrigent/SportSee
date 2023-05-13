// style
import "../style/cardofkcal.css";
// Prop Types
import PropTypes from "prop-types";
// API
import { useSportSeeApi } from "../services/hooks/fetchApi.js";

function CardOfKcal({ type, userId, icon, ClassColor }) {
  // get data
  const { data } = useSportSeeApi(userId, "key-data");
  //
  let showQty = "";
  let showUnit = "";
  //
  if (type === "kcal") {
    // showQty = `${data.calorieCount}kcal`; // les kcal ne semble pas correspondre au reste
    // un calcul serait donc plus fiable plutôt que les chiffres de l'api
    showQty = `${
      (data.proteinCount + data.carbohydrateCount) * 4 + data.lipidCount * 9
    }kcal`;

    showUnit = "Calories";
  }
  if (type === "prot") {
    showQty = `${data.proteinCount}g`;
    showUnit = "Proteines";
  }
  if (type === "carb") {
    showQty = `${data.carbohydrateCount}g`;
    showUnit = "Glucides";
  }
  if (type === "lipid") {
    showQty = `${data.lipidCount}g`;
    showUnit = "Lipides";
  }

  return (
    <div className="CardOfKcal">
      <div className={`IconBox ${ClassColor}`}>
        <img src={icon} className="Icon" alt="calorie icon" />
      </div>
      <div className="CardText">
        <div className="CardTextQty">{showQty}</div>
        <div className="CardTextUnit">{showUnit}</div>
      </div>
    </div>
  );
}

export default CardOfKcal;

CardOfKcal.propTypes = {
  userId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  ClassColor: PropTypes.string.isRequired,
  // icon: PropTypes.string.isRequired,
};
