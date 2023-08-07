import { getCardType } from "../CardType";

interface CardInnerProps {
  cardNumber: any;
  cardYear: any;
  minCardYear: any;
  setIsCardFlipped: any;
  focusDefualtStyle: any;
  setFocusElementStyle: any;
  cardNumberRef: any;
  cardNameRef: any;
  setCardMonth: any;
  cardDateRef: any;
  cardMonth: any;
  setCardYear: any;
  setCardCvv: any;
  cardCvv: any;
  cardName: any;
  setCardNumber: any;
  setCardName: any;
}

const CardInner: React.FC<CardInnerProps> = ({
  cardNumber,
  cardYear,
  minCardYear,
  setIsCardFlipped,
  focusDefualtStyle,
  setFocusElementStyle,
  cardNumberRef,
  cardNameRef,
  setCardMonth,
  cardDateRef,
  cardMonth,
  setCardYear,
  setCardCvv,
  cardCvv,
  cardName,
  setCardNumber,
  setCardName,
}) => {
  const minCardMonth = () => {
    if (+cardYear === minCardYear) return new Date().getMonth() + 1;
    return 1;
  };

  const flipCard = (status: boolean | ((prevState: boolean) => boolean)) => {
    setIsCardFlipped(status);
  };

  const generateCardNumberMask = () => {
    return getCardType(cardNumber) === "amex" ? 15 : 16;
  };
  const blurInput = () => {
    setFocusElementStyle(focusDefualtStyle);
  };
  const focusInput = (
    _:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<HTMLSelectElement, Element>,
    targetRef: React.RefObject<HTMLLabelElement>
  ) => {
    const target = targetRef.current;
    target &&
      setFocusElementStyle({
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
        opacity: 1,
      });
  };
  return (
    <div className="card-form__inner">
      <div className="card-input">
        <label htmlFor="cardNumber" className="card-input__label">
          Card Number
        </label>
        <input
          type="number"
          id="cardNumber"
          className="card-input__input"
          value={cardNumber}
          onChange={(e) => {
            e.target.value.length <= generateCardNumberMask() &&
              setCardNumber(e.target.value);
          }}
          onFocus={(e) => focusInput(e, cardNumberRef)}
          onBlur={blurInput}
          data-ref={cardNumberRef}
          autoComplete="off"
        />
      </div>
      <div className="card-input">
        <label htmlFor="cardName" className="card-input__label">
          Card Holders
        </label>
        <input
          type="text"
          id="cardName"
          className="card-input__input"
          value={cardName}
          onChange={(e) =>
            (/^[A-Za-z]+$/.test(e.target.value) || e.target.value === "") &&
            setCardName(e.target.value)
          }
          onFocus={(e) => focusInput(e, cardNameRef)}
          onBlur={blurInput}
          data-ref={cardNameRef}
          autoComplete="off"
        />
      </div>
      <div className="card-form__row">
        <div className="card-form__col">
          <div className="card-form__group">
            <label htmlFor="cardMonth" className="card-input__label">
              Expiration Date
            </label>
            <select
              className="card-input__input -select"
              id="cardMonth"
              defaultValue={cardMonth}
              onChange={(e) => setCardMonth(e.target.value)}
              onFocus={(e) => focusInput(e, cardDateRef)}
              onBlur={blurInput}
              data-ref={cardDateRef}
            >
              <option disabled>Month</option>
              {Array.from({ length: 12 }).map((_, index) => (
                <option
                  key={index}
                  defaultValue={index < 9 ? "0" + (index + 1) : index + 1}
                  disabled={index + 1 < minCardMonth()}
                >
                  {index < 9 ? "0" + (index + 1) : index + 1}
                </option>
              ))}ß
            </select>
            <select
              className="card-input__input -select"
              id="cardYear"
              defaultValue={cardYear}
              onChange={(e) => setCardYear(e.target.value)}
              onFocus={(e) => focusInput(e, cardDateRef)}
              onBlur={blurInput}
              data-ref={cardDateRef}
            >
              <option defaultValue="" disabled>
                Year
              </option>
              {Array.from({ length: 12 }).map((_, index) => (
                <option key={index} defaultValue={minCardYear + index}>
                  {minCardYear + index}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="card-form__col -cvv">
          <div className="card-input">
            <label htmlFor="cardCvv" className="card-input__label">
              CVV
            </label>
            <input
              type="text"
              className="card-input__input"
              id="cardCvv"
              value={cardCvv}
              onChange={(e) => setCardCvv(e.target.value)}
              onFocus={() => flipCard(true)}
              onBlur={() => flipCard(false)}
              maxLength={4}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
      <button className="card-form__button">Submit</button>
    </div>
  );
};

export default CardInner;
