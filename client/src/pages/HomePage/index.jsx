import Header from '../../components/header'
import MiniCard from '../../components/MiniCard';
import ProductsHeading from '../../components/productsHeading';
import './style.scss'

import {products} from '../../data/products'
import {featured_products} from '../../data/featured-products'
import RaitingCard from '../../components/raitingCard';
import HorizontalProduct from '../../components/horizontalProducts'

const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <section className="category-sec">
        <ProductsHeading title={'Explore Categories'} />
        <section className="category-cards">
          <div className="container">
            {products.map((item) => {
              return (
                <MiniCard
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  stockCount={item.stockCount}
                  bgColor={item.bgColor}
                />
              );
            })}
          </div>
        </section>
      </section>
      <section className="featured">
        <ProductsHeading title={'Featured Products'} />
        <section className="featured-products">
          <div className="container">
            {featured_products.map((item) => {
              return <RaitingCard item={item} />;
            })}
          </div>
        </section>
      </section>

      <section className="table-products">
        <div className="container">
          <div className="column">
            <h1>Top Sells</h1>

            <div className="line">
              <span></span>
            </div>

            <div className="tableCards-wrapper">
              {featured_products.map((item, index) => {
                return <HorizontalProduct key={index} item={item} />;
              })}
            </div>
          </div>

          <div className="column">
            <h1>Top Sels</h1>

            <div className="line">
              <span></span>
            </div>

            <div className="tableCards-wrapper">
              {featured_products.map((item, index) => {
                return <HorizontalProduct key={index} item={item} />;
              })}
            </div>
          </div>

          <div className="column">
            <h1>Top Sels</h1>

            <div className="line">
              <span></span>
            </div>

            <div className="tableCards-wrapper">
              {featured_products.map((item, index) => {
                return <HorizontalProduct key={index} item={item} />;
              })}
            </div>
          </div>

          <div className="column">
            <h1>Top Sels</h1>

            <div className="line">
              <span></span>
            </div>

            <div className="tableCards-wrapper">
              {featured_products.map((item, index) => {
                return <HorizontalProduct key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage