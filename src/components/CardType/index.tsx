import visa from "../../assets/visa.png";
import amex from "../../assets/amex.png";
import mastercard from "../../assets/mastercard.png";
import discover from "../../assets/discover.png";
import troy from "../../assets/troy.png";

export const getCardType = (cardNumber: string) => {
  let number = cardNumber;
  let re = new RegExp("^4");
  if (number.match(re) != null) return {
    img: visa,
    type: "visa"
  };

  re = new RegExp("^(34|37)");
  if (number.match(re) != null) return {
    img: amex,
    type: "amex"
  };

  re = new RegExp("^5[1-5]");
  if (number.match(re) != null) return {
    img: mastercard,
    type: "mastercard"
  };

  re = new RegExp("^6011");
  if (number.match(re) != null) return {
    img: discover,
    type: "discover"
  };

  re = new RegExp("^9792");
  if (number.match(re) != null) return {
    img: troy,
    type: "troy"
  };

  return {
    img: visa,
    type: "visa"
  }; // default type
};
