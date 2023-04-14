// style
import "../style/cardofkcal.css";

function CardOfKcal({ icon, Qty, Unit, ClassColor }) {
  return (
    <div className="CardOfKcal">
      <div className={`IconBox ${ClassColor}`}>
        <img src={icon} className="Icon" alt="calorie icon" />
      </div>
      <div className="CardText">
        <div className="CardTextQty">{Qty}</div>
        <div className="CardTextUnit">{Unit}</div>
      </div>
    </div>
  );
}

export default CardOfKcal;
