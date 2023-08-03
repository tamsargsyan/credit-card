import CHIP from "../../assets/chip.png";
import VISA from "../../assets/visa.png";

interface CardFrontProps {
  randomImage: string;
}

const CardFront: React.FC<CardFrontProps> = ({ randomImage }) => {
  const cardItemNumbersArr = new Array(19).fill(null);
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
      <div className='cardItemFocus'></div>
      <div className='cardItemCover'>
        <img src={randomImage} alt='Background' className='cardItemBg' />
      </div>
      <div className='cardItemWrapper'>
        <div className='cardItemTop'>
          <img src={CHIP} alt='Chip' className='cardItemChip' />
          <div className='cardItemType'>
            <img src={VISA} alt='Visa' className='cardItemTypeImg' />
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
            <label htmlFor='v-card-month' className=''>
              <span>MM</span>
            </label>
            /
            <label htmlFor='v-card-year' className='cardItemDateItem'>
              <span>YY</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
