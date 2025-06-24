import { Helmet } from "react-helmet-async";
export function SEO({ title, description }) {
  const finalTitle = title ? `${title} | Anjali Barai` : "Anjali Barai";
  const finalDescription = description || "My personal website";

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta property="og:url" content="https://www.anjalibarai.com" />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="Anjali Barai" />
      <meta property="og:title" content={finalTitle} />
      <script
        src="https://script.refix.ai/script.min.js"
        type="text/javascript"
        data-refix-token="4052d6d7-02bb-42fe-8fbb-d739a84a2024"
        defer
      ></script>
      <meta property="og:description" content={finalDescription} />
    </Helmet>
  );
}
