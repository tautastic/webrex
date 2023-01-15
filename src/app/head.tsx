import { NextSeo } from "next-seo";
import SEO from "next-seo.config";

const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="theme-color"
        content="#000000"
      />
      <NextSeo
        {...SEO}
        useAppDir={true}
      />
    </>
  );
};

export default Head;
