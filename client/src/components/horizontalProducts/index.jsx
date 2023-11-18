import './style.scss'
import yellowStar from '../../assets/img/icons/star_yellow.svg';
import grayStar from '../../assets/img/icons/star_gray.svg';

const HorizontalProduct = ({item}) => {
  return (
    <div className="horizontal-product">
      <div className="img-wrap">
        <img src={item.img} alt="" />
      </div>
      <div className="txt-wrapper">
        <h2>Orange 1kg</h2>

        <div className="raiting-stars">
          {[...Array(item.raitingBy5)].map((x, index) => (
            <img key={index} src={yellowStar} alt="" />
          ))}

          {[...Array(5 - item.raitingBy5)].map((x, index) => (
            <img key={index + item.raitingBy5} src={grayStar} alt="" />
          ))}
        </div>

        <div className="purchase-wrapper">
          <p>
            <span id="currentPrice">${item.currentPrice}</span>

            {item.hasDiscount && (
              <span id="discountLine">${item.beforePrice}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HorizontalProduct