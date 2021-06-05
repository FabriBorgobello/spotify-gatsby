module.exports = {
  siteMetadata: {
    title: "Spotify Gatsby",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: { google: { families: ["Raleway"] } },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "images", path: "./src/images/" },
      __key: "images",
    },
  ],
};
