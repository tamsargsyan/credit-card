import CHIP from "../../assets/chip.png";
import { getCardType } from "../CardType";
interface CardFrontProps {
  randomImage: string;
  focusElementStyle: Object;
  cardNumberRef: any;
  cardNumber: any;
  cardNameRef: any;
  cardName: any;
  cardMonth: any;
  cardYear: any;
  cardDateRef: any;
}

const CardFront: React.FC<CardFrontProps> = ({
  randomImage,
  focusElementStyle,
  cardNumberRef,
  cardNumber,
  cardNameRef,
  cardName,
  cardMonth,
  cardYear,
  cardDateRef,
}) => {
  const amexCardMask = "#### ###### #####";
  const otherCardMask = "#### #### #### ####";

  return (
    <div className={`card-item__side -front`}>
      <div className="card-item__focus" style={focusElementStyle}></div>
      <div className="card-item__cover">
        <img src={randomImage} alt="Background" className="card-item__bg" />
      </div>
      <div className="card-item__wrapper">
        <div className="card-item__top">
          <img src={CHIP} alt="Chip" className="card-item__chip" />
          <div className="card-item__type">
            <img
              src={getCardType(cardNumber)}
              alt="Card Type"
              className="card-item__typeImg"
            />
          </div>
        </div>
        <label
          htmlFor="cardNumber"
          className="card-item__number"
          ref={cardNumberRef}
        >
          {getCardType(cardNumber) === "amex" ? (
            <span>
              {amexCardMask.split("").map((char, index) => (
                <span
                  key={index}
                  className={
                    index > 4 &&
                    index < 14 &&
                    cardNumber.length > index &&
                    char.trim() !== ""
                      ? "card-item__numberItem"
                      : `card-item__numberItem ${
                          char.trim() === "" ? "-active" : ""
                        }`
                  }
                >
                  {index > 4 &&
                  index < 14 &&
                  cardNumber.length > index &&
                  char.trim() !== ""
                    ? "*"
                    : cardNumber[index] || "#"}
                </span>
              ))}
            </span>
          ) : (
            <span>
              {otherCardMask.split("").map((char, index) => (
                <span
                  key={index}
                  className={
                    index > 4 &&
                    index < 15 &&
                    cardNumber.length > index &&
                    char.trim() !== ""
                      ? "card-item__numberItem"
                      : `card-item__numberItem ${
                          char.trim() === "" ? "-active" : ""
                        }`
                  }
                >
                  {index > 4 &&
                  index < 15 &&
                  cardNumber.length > index &&
                  char.trim() !== ""
                    ? "*"
                    : cardNumber[index] || "#"}
                </span>
              ))}
            </span>
          )}
        </label>
        <div className="card-item__content">
          <label
            htmlFor="cardName"
            className="card-item__info"
            ref={cardNameRef}
          >
            <div className="card-item__holder">Card Holder</div>
            {cardName.length ? (
              <div className="card-item__name" key="1">
                <span className="card-item__nameItem">
                  {cardName.replace(/\s\s+/g, " ")}
                </span>
              </div>
            ) : (
              <div className="card-item__name" key="2">
                Full Name
              </div>
            )}
          </label>
          <div className="card-item__date" ref={cardDateRef}>
            <label htmlFor="cardMonth" className="card-item__dateTitle">
              Expires
            </label>
            <label htmlFor="cardMonth" className="card-item__dateItem">
              <span key={cardMonth}>{cardMonth || "MM"}</span>
            </label>
            /
            <label htmlFor="cardYear" className="card-item__dateItem">
              <span key={cardYear}>
                {cardYear ? cardYear.slice(2, 4) : "YY"}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
