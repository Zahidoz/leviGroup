import yellowStar from '../../assets/img/icons/star_yellow.svg'
import grayStar from "../../assets/img/icons/star_gray.svg";
import './style.scss'

const RaitingCard = ({item}) => {
  return (
    <div className="raitingCard">
      <div className="img-wrapper">
        <img src={item.img} alt="" />
      </div>
      
      <span className="category">{item.category }</span>
      <h1>{ item.title}</h1>
      <div className="raiting-stars">
        {[...Array(item.raitingBy5)].map((x, index) => (
          <img key={index} src={yellowStar} alt="" />
        ))}

        {[...Array(5 - item.raitingBy5)].map((x, index) => (
          <img key={index + item.raitingBy5} src={grayStar} alt="" />
        ))}
        

       
      </div>
      <div className="soldBy">
        <p>
          By
          <span>{ item.seller}</span>
        </p>
      </div>
      <div className="purchase-wrapper">
        <p>
          <span id='currentPrice'>${item.currentPrice}</span>
          
          {
            item.hasDiscount && (
              <span id="discountLine">
                ${ item.beforePrice}
              </span>
            )
          }
        </p>
        <button>
          <img src="" alt="" />
          Add
        </button>
      </div>
    </div>
  );
}

export default RaitingCard