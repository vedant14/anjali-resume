import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function Card({ id, title, category, isSelected, zIndex }) {
  console.log(isSelected);
  return (
    <li
      className={`card`}
      style={{
        zIndex: isSelected ? zIndex : 0,
      }}
    >
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }) {
  return (
    <ul className="card-list">
      {items.map((card) => {
        const cardZIndex = 1;
        return (
          <Card
            key={card.id}
            {...card}
            isSelected={card.id === selectedId}
            zIndex={cardZIndex}
          />
        );
      })}
    </ul>
  );
}
