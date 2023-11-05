import './style.scss'
import logo from '../../assets/img/icons/logo.svg'

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
            </select>

            <div className="line"></div>
         
            <input type="text" placeholder="Search for items..." />
          </div>

          <button></button>
        </div>
      </div>
      <div className="links-header"></div>
    </header>
  );
}

export default Header