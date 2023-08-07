import { useState, useRef, useEffect, useMemo } from "react";
import BG_1 from "./assets/bg-1.jpg";
import BG_2 from "./assets/bg-2.jpg";
import BG_3 from "./assets/bg-3.jpg";
import BG_4 from "./assets/bg-4.jpg";
import BG_5 from "./assets/bg-5.jpg";
import BG_6 from "./assets/bg-6.jpeg";
import BG_7 from "./assets/bg-7.jpeg";
import "./App.css";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import CardInner from "./components/CardInner";

function App() {
  const cardBgArr = useMemo(
    () => [BG_1, BG_2, BG_3, BG_4, BG_5, BG_6, BG_7],
    []
  );
  const [randomImage, setRandomImage] = useState<string>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * cardBgArr.length);
    setRandomImage(cardBgArr[randomIndex]);
  }, [cardBgArr]);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const minCardYear = new Date().getFullYear();
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const cardNumberRef = useRef<HTMLLabelElement>(null);
  const cardNameRef = useRef(null);
  const cardDateRef = useRef(null);

  const focusDefualtStyle = {
    width: "100%",
    height: "100%",
    transform: "translate(0,0)",
    opacity: 0,
  };
  const [focusElementStyle, setFocusElementStyle] = useState(focusDefualtStyle);

  return (
    <div className="wrapper" id="app">
      <div className="card-form">
        <div className="card-list">
          <div className={`card-item ${isCardFlipped && "-active"}`}>
            <CardFront
              randomImage={randomImage}
              focusElementStyle={focusElementStyle}
              cardNumberRef={cardNumberRef}
              cardNumber={cardNumber}
              cardNameRef={cardNameRef}
              cardName={cardName}
              cardMonth={cardMonth}
              cardYear={cardYear}
              cardDateRef={cardDateRef}
            />
            <CardBack
              cardCvv={cardCvv}
              randomImage={randomImage}
              cardNumber={cardNumber}
            />
          </div>
        </div>
        <CardInner
          cardNumber={cardNumber}
          cardYear={cardYear}
          minCardYear={minCardYear}
          setIsCardFlipped={setIsCardFlipped}
          focusDefualtStyle={focusDefualtStyle}
          setFocusElementStyle={setFocusElementStyle}
          cardNumberRef={cardNumberRef}
          cardNameRef={cardNameRef}
          setCardMonth={setCardMonth}
          cardDateRef={cardDateRef}
          cardMonth={cardMonth}
          setCardYear={setCardYear}
          setCardCvv={setCardCvv}
          cardCvv={cardCvv}
          cardName={cardName}
          setCardNumber={setCardNumber}
          setCardName={setCardName}
        />
      </div>
    </div>
  );
}

export default App;
