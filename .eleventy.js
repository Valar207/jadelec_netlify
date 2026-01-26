module.exports = function(eleventyConfig) {
  // Copier les assets statiques
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Collections
  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/services/*.md");
  });

  eleventyConfig.addCollection("realisations", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/realisations/*.md");
  });

  // Configuration
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
