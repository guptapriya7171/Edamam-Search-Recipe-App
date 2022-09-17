import PropTypes from "prop-types";
import styles from "../Styles/card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img className={styles.img} src={props.image} alt={props.title} />
      </div>
      <div className={styles.right}>
        <a href="props.url">
          <h2>{props.title}</h2>
        </a>
        {/* <ul className="badges">
          <li className="badge">{props.dishType}</li>
          <li className="badge">{props.mealType}</li>
          <li className="badge">{props.cuisineType}</li>
        </ul> */}
        <a href={props.url}>
          <button className={styles.btn}>See More...</button>
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired
};

export default Card;
