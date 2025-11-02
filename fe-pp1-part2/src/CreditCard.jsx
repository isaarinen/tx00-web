import './CreditCard.css';
import visa from "./assets/images/visa.png";
import masterCard from "./assets/images/master-card.svg";

function CreditCard(props) {
    const card = props.type === "Visa" ? visa : masterCard;
    const color = props.color;
    const bgColor = props.bgColor;

    // simpler, "dumber" masking: remove spaces, take last 4, mask first 12 digits
    const maskNumber = (num = "") => {
        const s = String(num).split(" ").join("");
        if (s.length <= 4) return s;
        const last4 = s.slice(-4);
        return "•••• •••• •••• " + last4;
    };

    const month = String(props.expirationMonth).padStart(2, "0");
    const year = String(props.expirationYear).slice(-2);

    return (
            <div className="credit-card" style={{ backgroundColor: bgColor }}>
                <div className="credit-card__type">
                    <img src={card} alt={props.type} />
                </div>
                <div className="credit-card__number" style={{ color }}>
                    {maskNumber(props.number)}
                </div>
                <div className="credit-card__meta">
                    <div className="credit-card__expires" style={{ color }}>
                        Expires {month}/{year}
                    </div>
                    <div className="credit-card__bank" style={{ color }}>{props.bank}</div>
                </div>
                <div className="credit-card__owner" style={{ color }}>{props.owner}</div>
            </div>
    );
}

export default CreditCard;