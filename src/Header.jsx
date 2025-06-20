import { SocialLinks } from "./components/SocialLinks";

export const Header = () => (
  <div className="mt-12">
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
        Software designer, founder, and amateur astronaut.
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I’m Spencer, a software designer and entrepreneur based in New York
        City. I’m the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
      <SocialLinks />
    </div>
  </div>
);
