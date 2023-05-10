// style
import "../style/cardofkcal.css";
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
    // showQty = `${data.calorieCount}kcal`;
    // un calcul serait plus exact ?
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
