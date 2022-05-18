module.exports = {
  title: "Learn Notes",
  lang: "zh-CN",
  description: "Learn Notes",
  head: [
    // ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    // ["script", { src: "", async: "" }],
  ],
  vue: {
    reactivityTransform: true,
  },
  themeConfig: {
    // logo: "/logo.svg",
    docsBranch: "main",
    editLinks: true,
    nav: [
      { text: "Vue", link: "/vueDoc/" },
      { text: "React", link: "/reactDoc/" },
      { text: "Javascript", link: "/JSDoc/" },
      { text: "Css", link: "/cssDoc/" },
      // {
      //   text: "相关链接",
      //   items: [
      //     {
      //       text: "",
      //       link: "",
      //     },
      //   ],
      // },
    ],

    sidebar: {
      "/vueDoc":"auto",
      "/reactDoc": "auto",
      "/JSDoc": "auto",
      "/cssDoc": "auto",
      "/": [
        {
          text: "指引",
          children: [
            // {
            //   text: "",
            //   link: "",
            // },
          ],
        },
      ],
    },
  },

  // markdown: {
  //   anchor: {
  //     renderPermalink: require("./render-perma-link"),
  //   },
  //   config: (md) => {
  //     md.use(require("./markdown-it-custom-anchor"));
  //   },
  // },
};
