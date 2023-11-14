import yellowStar from '../../assets/img/icons/star_yellow.svg'
import grayStar from "../../assets/img/icons/star_gray.svg";
import turpImg from '../../assets/img/pictures/products/turp.svg'
import './style.scss'

const RaitingCard = () => {
  return (
    <div className="raitingCard">
      <div className="img-wrapper">
        <img src={turpImg} alt="" />
      </div>
      
      <span className="category">Vegetables</span>
      <h1>Redish 500g</h1>
      <div className="raiting-stars">
        <img src={yellowStar} alt="" />
        <img src={yellowStar} alt="" />
        <img src={yellowStar} alt="" />
        <img src={grayStar} alt="" />
        <img src={grayStar} alt="" />
      </div>
      <div className="soldBy">
        <p>
          By
          <span>Mr.food</span>
        </p>
      </div>
      <div className="purchase-wrapper">
        <p>
          <span>$1</span>
          $1.99
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