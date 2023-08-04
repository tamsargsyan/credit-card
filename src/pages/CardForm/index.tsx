import { useEffect, useMemo, useRef, useState } from "react";
import BGS from "./imports";
import CardFront from "../../components/CardFront";
import CardInner from "../../components/CardInner";
import "./index.css";

const CardForm = () => {
  const cardBgArr = useMemo(
    () => [
      BGS.BG_1,
      BGS.BG_2,
      BGS.BG_3,
      BGS.BG_4,
      BGS.BG_5,
      BGS.BG_6,
      BGS.BG_7,
    ],
    []
  );
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cardBgArr.length);
    setRandomImage(cardBgArr[randomIndex]);
  }, [cardBgArr]);

  const cardItemFocusRef = useRef<HTMLDivElement>(null);
  const [info, setInfo] = useState({
    cardNumber: "",
    cardName: "",
    cvv: "",
    month: "",
    year: "",
  });
  const getCardTypes = () => {
    let re = new RegExp("^4");
    if (info.cardNumber.match(re) != null) return { type: "visa", n: 19 };

    re = new RegExp("^(34|37)");
    if (info.cardNumber.match(re) != null) return { type: "amex", n: 18 };

    re = new RegExp("^5[1-5]");
    if (info.cardNumber.match(re) != null) return { type: "mastercard", n: 19 };

    re = new RegExp("^6011");
    if (info.cardNumber.match(re) != null) return { type: "discover", n: 19 };

    re = new RegExp("^9792");
    if (info.cardNumber.match(re) != null) return { type: "troy", n: 19 };
  };
  const type = getCardTypes()?.type;
  const n = getCardTypes()?.n;
  return (
    <div className='cardForm'>
      <div className='cardList'>
        <div className='cardItem'>
          <CardFront
            cardItemFocusRef={cardItemFocusRef}
            randomImage={randomImage}
            info={info}
            type={type}
            n={n}
          />
          <div className='cardItemSide -back'></div>
        </div>
      </div>
      <CardInner
        cardItemFocusRef={cardItemFocusRef}
        info={info}
        setInfo={setInfo}
        n={n}
      />
    </div>
  );
};

export default CardForm;
