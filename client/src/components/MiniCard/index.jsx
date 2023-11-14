import "./style.scss";


const MiniCard = (props) => {
  return (
    <div className={`miniCard-wrapper ${props.bgColor}`}>
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <span>{props.stockCount} Items</span>
    </div>
  );
};

export default MiniCard;
