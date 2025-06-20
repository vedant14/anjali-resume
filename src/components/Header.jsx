import { SocialLinks } from "./SocialLinks";

export const Header = () => (
  <div className="mt-12">
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold tracking-wide text-zinc-800 sm:text-5xl">
        Anjali Barai
      </h1>
      <p className="mt-2 text-base text-zinc-700">
        A software designer and entrepreneur based in New York
        City. I’m the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
      <SocialLinks />
    </div>
  </div>
);
