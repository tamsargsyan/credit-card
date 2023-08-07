import visa from "../../assets/visa.png";
import amex from "../../assets/amex.png";
import mastercard from "../../assets/mastercard.png";
import discover from "../../assets/discover.png";
import troy from "../../assets/troy.png";

export const getCardType = (cardNumber: string) => {
  let number = cardNumber;
  let re = new RegExp("^4");
  if (number.match(re) != null) return visa;

  re = new RegExp("^(34|37)");
  if (number.match(re) != null) return amex;

  re = new RegExp("^5[1-5]");
  if (number.match(re) != null) return mastercard;

  re = new RegExp("^6011");
  if (number.match(re) != null) return discover;

  re = new RegExp("^9792");
  if (number.match(re) != null) return troy;

  return visa; // default type
};
