import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks";

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <SocialLinks />
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            Anjali Barai :)
          </p>
        </div>
      </div>
    </footer>
  );
}
