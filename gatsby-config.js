require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "My Shop",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: `0a7d800f96ba6a135f35ab6b52170e` },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey:
          "YTdkNjU2ZDQtNjg5ZS00MmFmLWFlZjItNDk1ZDdmOGRjNTg5NjM3MzYwMTMyNTMxNzEwNDk4",
        autopop: true,
      },
    },
  ],
};
