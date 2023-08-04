import { useRef } from "react";
import Date from "../Date";

interface CardInnerProps {
  cardItemFocusRef: any;
  info: any;
  setInfo: any;
  n: number | undefined;
}

const CardInner: React.FC<CardInnerProps> = ({
  cardItemFocusRef,
  info,
  setInfo,
  n,
}) => {
  const cardNumberLabelRef = useRef<HTMLLabelElement>(null);
  const cardNameLabelRef = useRef<HTMLLabelElement>(null);
  const cardCvvLabelRef = useRef<HTMLLabelElement>(null);

  const handleLabelFocus = (labelRef: React.RefObject<HTMLLabelElement>) => {
    if (labelRef.current && cardItemFocusRef.current) {
      const labelRect = labelRef.current;
      cardItemFocusRef.current.style.width = `${labelRect.offsetWidth}px`;
      cardItemFocusRef.current.style.height = `${labelRect.offsetHeight}px`;
      cardItemFocusRef.current.style.transform = `translateX(${labelRect.offsetLeft}px) translateY(${labelRect.offsetTop}px)`;
    }
  };
  // console.log(cardNameLabelRef.current?.getBoundingClientRect(), "name");
  // console.log(cardNumberLabelRef.current?.getBoundingClientRect(), "number");
  // console.log(cardCvvLabelRef.current?.getBoundingClientRect(), "cvv");

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
          maxLength={n || 19}
          data-card-field
          autoComplete='off'
          className='cardInput-input cardInput-cardNumber'
          value={info.cardNumber}
          onChange={e => {
            console.log(e.target.value);
            e.target.value.length < (n || 19) &&
              setInfo((prev: any) => ({ ...prev, cardNumber: e.target.value }));
          }}
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
          value={info.cardName}
          onChange={e => {
            (/^[A-Za-z]+$/.test(e.target.value) || e.target.value === "") &&
              setInfo((prev: any) => ({ ...prev, cardName: e.target.value }));
          }}
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
              value={info.cvv}
              onChange={e =>
                e.target.value.length <= 4 &&
                setInfo((prev: any) => ({ ...prev, cvv: e.target.value }))
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
