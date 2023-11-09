import './style.scss';
import logo from '../../assets/img/icons/logo.svg';
import searchIcon from '../../assets/img/icons/search.svg';
import whishList from '../../assets/img/icons/whishList.svg';
import myCart from '../../assets/img/icons/myCart.svg';
import profPic from '../../assets/img/pictures/prof-pic.png';
import downIcon from '../../assets/img/icons/down.svg';

const Header = () => {
  return (
    <header>
      <div className="main-header">
      
        <div className="header-logo">
          <img src={logo} alt="" />
          <div className="logo-txt">
            <h2>Groceyish</h2>
            <h3>GROCERY</h3>
          </div>
        </div>

        <div className="search-wrapper">
          <div className="search-container">
            <select name="" id="">
              <option value="">All Categories</option>
              <option value="">vegetables</option>
              <option value="">Fruits</option>
            </select>

            <div className="line"></div>

            <input type="text" placeholder="Search for items..." />
          </div>

          <button>
            <img src={searchIcon} alt="" />
          </button>
        </div>

        <div className="my-counters">
          <div className="counter-box">
            <img src={whishList} alt="" />
            <div className="txt-wrapper">
              <h3>Wishlistt</h3>
            </div>
          </div>

          <div className="counter-box">
            <img src={myCart} alt="" />
            <div className="txt-wrapper">
              <h3>My cart</h3>
              <p>$21</p>
            </div>
          </div>
        </div>

        <div className="toggle-menu">
          <img id='profPicture' src={profPic} alt="" />
          <h3>Ramzi Cherif</h3>
          <img id='toggleArrow' src={downIcon} alt="" />
        </div>

      </div>

      <div className="links-header"></div>
    
    </header>
  );
};

export default Header;
