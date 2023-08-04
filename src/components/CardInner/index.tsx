import { useRef, useState } from "react";
import Date from "../Date";

interface CardInnerProps {
  cardItemFocusRef: any;
}

const CardInner: React.FC<CardInnerProps> = ({ cardItemFocusRef }) => {
  const [info, setInfo] = useState({
    cardNumber: "",
    cardName: "",
    cvv: "",
    month: "",
    year: "",
  });
  const cardNumberLabelRef = useRef<HTMLLabelElement>(null);
  const cardNameLabelRef = useRef<HTMLLabelElement>(null);
  const cardCvvLabelRef = useRef<HTMLLabelElement>(null);

  const handleLabelFocus = (labelRef: React.RefObject<HTMLLabelElement>) => {
    if (labelRef.current && cardItemFocusRef.current) {
      const labelRect = labelRef.current.getBoundingClientRect();
      cardItemFocusRef.current.style.top = `${
        labelRect.top + window.scrollY
      }px`;
      cardItemFocusRef.current.style.left = `${
        labelRect.left + window.scrollX
      }px`;
      // cardItemFocusRef.current.style.transform = `translate(15px, ${
      //   labelRect.top - window.scrollY
      // })`;
      cardItemFocusRef.current.style.width = `${labelRect.width - 120}px`;
      cardItemFocusRef.current.style.height = `${labelRect.height + 27}px`;
    }
  };
  console.log(cardNameLabelRef.current?.getBoundingClientRect(), "name");
  console.log(cardNumberLabelRef.current?.getBoundingClientRect(), "number");
  console.log(cardCvvLabelRef.current?.getBoundingClientRect(), "cvv");

  return (
    <div className='cardFormInner'>
      <div className='cardInput'>
        <label
          htmlFor='v-card-number'
          className='cardInput-label'
          ref={cardNumberLabelRef}>
          Card Number
        </label>
        <input
          type='number'
          id='v-card-number'
          maxLength={19}
          data-card-field
          autoComplete='off'
          className='cardInput-input cardInput-cardNumber'
          onChange={e =>
            setInfo(prev => ({ ...prev, cardNumber: e.target.value }))
          }
          onFocus={() => handleLabelFocus(cardNumberLabelRef)}
        />
        <button
          disabled={!info.cardNumber}
          title='Show/Hide card number'
          className='cardInput-eye'></button>
      </div>
      <div className='cardInput'>
        <label
          htmlFor='v-card-name'
          className='cardInput-label'
          ref={cardNameLabelRef}>
          Card Name
        </label>
        <input
          type='text'
          id='v-card-name'
          data-card-field
          autoComplete='off'
          className='cardInput-input'
          onChange={e =>
            setInfo(prev => ({ ...prev, cardName: e.target.value }))
          }
          onFocus={() => handleLabelFocus(cardNameLabelRef)}
        />
      </div>
      <div className='cardFormRow'>
        <div className='cardForm-col'>
          <div className='cardForm-group'>
            <label htmlFor='cardMonth' className='cardInput-label'>
              Expiration Date
            </label>
            <Date setInfo={setInfo} />
          </div>
        </div>
        <div className='cardForm-col -cvv'>
          <div className='cardInput'>
            <label
              htmlFor='v-card-cvv'
              className='cardInput-label'
              ref={cardCvvLabelRef}>
              CVV
            </label>
            <input
              type='number'
              id='v-card-cvv'
              maxLength={4}
              data-card-field
              autoComplete='off'
              className='cardInput-input'
              onChange={e =>
                setInfo(prev => ({ ...prev, cvv: e.target.value }))
              }
              onFocus={() => handleLabelFocus(cardCvvLabelRef)}
            />
          </div>
        </div>
      </div>
      <button className='cardForm-btn'>Submit</button>
    </div>
  );
};

export default CardInner;
