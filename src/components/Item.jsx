import { motion } from "motion/react";
import { Link } from "react-router-dom";
import items from "../data";
const listContainerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const listItemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
export function Item({ id }) {
  const { category, title, backgroundColor, textColor, text } = items.find(
    (item) => item.id === id
  );
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
              <img
                className="h-100 object-cover"
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
              <p className="mt-1" style={{ color: backgroundColor }}>
                {title}
              </p>
            </motion.div>
          </div>
          <motion.div
            className="pt-[360px] px-5 pb-6 bg-gray-50"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            animate={{ opacity: 1 }}
          >
            <motion.ul
              className="list-disc ml-5"
              variants={listContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {text.map((line, i) => (
                <motion.li
                  className="mt-2 text-base"
                  key={i}
                  variants={listItemVariants}
                >
                  {line}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
