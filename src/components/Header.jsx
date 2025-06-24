import { motion } from "motion/react";
import { Flower1 } from "./Flower";
import { classNames } from "./Helper";
import { SocialLinks } from "./SocialLinks";
import avatarImage from "/avatar.jpeg";

export const Header = () => (
  <div className="mt-12">
    <div className="max-w-3xl">
      <div className="flex gap-2 items-center">
        <Avatar />
        <h1 className="text-4xl font-bold tracking-wide text-zinc-800 sm:text-5xl mt-2.5">
          Anjali Barai
        </h1>
        <motion.div
          animate={{
            rotate: 1440,
          }}
          whileHover={{ rotate: 720 }}
          transition={{ duration: 4, ease: "linear" }}
        >
          <Flower1 className="h-6 w-6" />
        </motion.div>
      </div>
      <div className="mt-2">
        <p className="italic text-zinc-500 font-zain text-lg">
          "I think that women wear so many hats, that we're not just one thing."
        </p>
        <p className="text-zinc-600 text-sm">
          There have been days when I have worked hand-in-hand with CEOs and
          business leaders to do sales, marketing, partnerships, lead fundraising
          efforts and scale digital platforms.
          <br />
          And by nights & on weekends, I've dabbled in with my paper & paints.
        </p>
      </div>
      <SocialLinks />
    </div>
  </div>
);

function Avatar({ large = false, className, ...props }) {
  return (
    <div
      className={classNames(
        className,
        "h-14 w-14 p-1 rounded-full bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
      )}
    >
      <img
        src={avatarImage}
        alt=""
        sizes={large ? "8rem" : "14.25rem"}
        className={classNames(
          "rounded-full bg-zinc-100 object-cover hover:shadow-lg",
          large ? "h-24 w-24" : "h-12 w-12"
        )}
        priority="true"
      />
    </div>
  );
}
