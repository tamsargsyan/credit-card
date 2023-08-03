import { useEffect, useMemo, useState } from "react";
import BGS from "./imports";
import CardFront from "../../components/CardFront";
import "./index.css";
import CardInner from "../../components/CardInner";

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

  return (
    <div className='cardForm'>
      <div className='cardList'>
        <div className='cardItem'>
          <CardFront randomImage={randomImage} />
          <div className='cardItemSide -back'></div>
        </div>
      </div>
      <CardInner />
    </div>
  );
};

export default CardForm;
