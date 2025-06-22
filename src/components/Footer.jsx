import { motion } from "motion/react";
import { Flower1, Flower2, Flower3, Flower4, Flower5, Flower6 } from "./Flower";

const AnimatedFlower = ({ FlowerComponent }) => {
  return (
    <motion.div
      whileHover={{ rotate: 720 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <FlowerComponent className="h-[150px] w-[150px] p-3" />
    </motion.div>
  );
};

export default function Footer() {
  return (
    <footer className="my-24 space-y-6 overflow-hidden md:overflow-visible">
      <div className="flex justify-center items-center gap-4">
        <AnimatedFlower FlowerComponent={Flower1} />
        <AnimatedFlower FlowerComponent={Flower2} />
        <AnimatedFlower FlowerComponent={Flower3} />
        <AnimatedFlower FlowerComponent={Flower4} />
        <AnimatedFlower FlowerComponent={Flower5} />
        <AnimatedFlower FlowerComponent={Flower6} />
      </div>
      <div className="flex justify-center items-center gap-4">
        <AnimatedFlower FlowerComponent={Flower6} />
        <AnimatedFlower FlowerComponent={Flower4} />
        <p className="min-w-48 text-2xl m-auto text-center font-zain">
          From Anjali :)
        </p>
        <AnimatedFlower FlowerComponent={Flower1} />
        <AnimatedFlower FlowerComponent={Flower5} />
      </div>
      <div className="flex justify-center items-center gap-4">
        <AnimatedFlower FlowerComponent={Flower5} />
        <AnimatedFlower FlowerComponent={Flower1} />
        <AnimatedFlower FlowerComponent={Flower6} />
        <AnimatedFlower FlowerComponent={Flower2} />
        <AnimatedFlower FlowerComponent={Flower3} />
        <AnimatedFlower FlowerComponent={Flower4} />
      </div>
    </footer>
  );
}
