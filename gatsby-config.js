const fs = require("fs-extra");
const path = require("path");

module.exports = {
  siteMetadata: {
    title: "La belle epoque",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components"),
        images: path.join(__dirname, "src/images"),
        theme: path.join(__dirname, "src/theme"),
        translations: path.join(__dirname, "src/translations"),
      },
    },
  ],
};

exports.onPostBuild = () => {
  console.log("Copying locales");
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales"),
  );
};
