import { getCardType } from "../CardType"

interface CardBackProps {
    cardCvv: any,
    randomImage: string,
    cardNumber: string
}

const CardBack:React.FC<CardBackProps> = ({cardCvv, randomImage, cardNumber}) => {
  return (
    <div className="card-item__side -back">
            <div className="card-item__cover">
              <img
                src={randomImage}
                alt="Background"
                className="card-item__bg"
              />
            </div>
            <div className="card-item__band"></div>
            <div className="card-item__cvv">
              <div className="card-item__cvvTitle">CVV</div>
              <div className="card-item__cvvBand">
                {cardCvv.split('').map((_: string, index: number) => (
                  <span key={index}>*</span>
                ))}
              </div>
              <div className="card-item__type">
                {getCardType && (
                  <img
                    src={getCardType(cardNumber)}
                    className="card-item__typeImg"
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
  )
}

export default CardBack