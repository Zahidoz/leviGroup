import Header from '../../components/header'
import MiniCard from '../../components/MiniCard';
import ProductsHeading from '../../components/productsHeading';
import './style.scss'

import {products} from '../../data/products'
import RaitingCard from '../../components/raitingCard';



const HomePage = () => {
  return (
    <div className="homePage">
      <Header />
      <section className="category-sec">
        <ProductsHeading title={"Explore Categories"} />
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
        <ProductsHeading title={"Featured Products"} />
        <section className="featured-products">
          <div className="container">
            <RaitingCard />
            <RaitingCard />
            <RaitingCard />
            <RaitingCard />
            <RaitingCard />
          </div>
        </section>
      </section>
    </div>
  );
}

export default HomePage