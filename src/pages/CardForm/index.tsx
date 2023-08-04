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
  return (
    <div className='cardForm'>
      <div className='cardList'>
        <div className='cardItem'>
          <CardFront
            cardItemFocusRef={cardItemFocusRef}
            randomImage={randomImage}
          />
          <div className='cardItemSide -back'></div>
        </div>
      </div>
      <CardInner cardItemFocusRef={cardItemFocusRef} />
    </div>
  );
};

export default CardForm;
