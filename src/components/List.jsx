import { Link } from "react-router-dom";
import { motion } from "motion/react";
import items from "../data";

function Card({
  id,
  title,
  category,
  isSelected,
  zIndex,
  backgroundColor,
  textColor,
}) {
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
            <img
              className="w-fit h-100 object-cover"
              src={`images/${id}.jpg`}
              alt=""
            />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span
              className="text-xs px-2 py-0.5 rounded-full"
              style={{ backgroundColor: backgroundColor, color: textColor }}
            >
              {category}
            </span>
            <p className="mt-1" style={{ color: backgroundColor }}>{title}</p>
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
