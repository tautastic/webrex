// eslint-disable-next-line import/no-anonymous-default-export
export default {
  useAppDir: true,
  title: "rex",
  titleTemplate: "%s: build, test, and debug regex",
  description:
    "Regular expression tester with syntax highlighting, explanation and cheat sheet.",
  defaultTitle: "rex",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/img/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/img/apple-touch-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
  openGraph: {
    site_name: "rex",
    url: "https://rex-iota.vercel.app/",
    type: "website",
    locale: "en_IE",
    images: [],
  },
};
