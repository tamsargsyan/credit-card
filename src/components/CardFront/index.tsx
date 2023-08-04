import CHIP from "../../assets/chip.png";
import cardTypes from "./imports";
interface CardFrontProps {
  randomImage: string;
  cardItemFocusRef: any;
  info: any;
  type: string | undefined;
  n: number | undefined;
}

const CardFront: React.FC<CardFrontProps> = ({
  randomImage,
  cardItemFocusRef,
  info,
  type,
  n,
}) => {
  const cardItemNumbersArr = new Array(type ? n : 16).fill(null);
  const renderCardItem = (index: number) => (
    <span key={index}>
      {(index - 4) % 5 === 0 && index < cardItemNumbersArr.length - 1 ? (
        <div className='cardItem-numberItem -active'></div>
      ) : (
        <div className='cardItem-numberItem'>#</div>
      )}
    </span>
  );
  const renderedItems = cardItemNumbersArr.map((_, index) =>
    renderCardItem(index)
  );
  return (
    <div className='cardItemSide -front'>
      <div className='cardItemFocus' ref={cardItemFocusRef}></div>
      <div className='cardItemCover'>
        <img src={randomImage} alt='Background' className='cardItemBg' />
      </div>
      <div className='cardItemWrapper'>
        <div className='cardItemTop'>
          <img src={CHIP} alt='Chip' className='cardItemChip' />
          <div className='cardItemType'>
            {type && (
              <img
                //@ts-ignore
                src={cardTypes[type]}
                alt='Visa'
                className='cardItemTypeImg'
              />
            )}
          </div>
        </div>
        <label htmlFor='v-card-number' className='cardItemNumber'>
          {renderedItems}
        </label>
        <div className='cardItemContent'>
          <label htmlFor='v-card-name' className='cardItemInfo'>
            <div className='cardItemHolder'>Card Holder</div>
            <div className='cardItemName'>Full Name</div>
          </label>
          <div className='cardItemDate'>
            <label htmlFor='v-card-month' className='cardItemDateTitle'>
              Expires
            </label>
            <label htmlFor='v-card-month' className='cardItemDateItem'>
              {info.month ? <span>{info.month}</span> : <span>MM</span>}
            </label>
            /
            <label htmlFor='v-card-year' className='cardItemDateItem'>
              {info.year ? <span>{info.year}</span> : <span>MM</span>}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
