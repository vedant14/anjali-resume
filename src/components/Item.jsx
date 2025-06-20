import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { items } from "../data";

export function Item({ id }) {
  const { category, title } = items.find((item) => item.id === id);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
      </motion.div>
      <div className="open card-content-container">
        <motion.div
          className="card-content grid grid-col-2"
          layoutId={`card-container-${id}`}
        >
          <div>
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
          </div>
          <motion.div className="content-container" animate>
            VEDANT
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
