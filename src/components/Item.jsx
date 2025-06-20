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
              <img className="w-fit h-100 object-cover" src={`images/${id}.jpg`} alt="" />
            </motion.div>
            <motion.div
              className="title-container"
              layoutId={`title-container-${id}`}
            >
              <span className="category">{category}</span>
              <h2>{title}</h2>
            </motion.div>
          </div>
          <motion.div
            className="content-container bg-gray-50"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            animate={{ opacity: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
