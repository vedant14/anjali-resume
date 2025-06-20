import { Helmet } from "react-helmet-async";

// Your SEO component remains largely the same in terms of logic
export function SEO({ title, description }) {
  const finalTitle = title ? `${title} | Vedant Lohbare` : "Vedant Lohbare";
  const finalDescription = description || "My personal website";

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta property="og:url" content="https://www.vedantlohbare.com" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Vedant Lohbare" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
    </Helmet>
  );
}
