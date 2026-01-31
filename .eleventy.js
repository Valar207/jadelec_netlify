module.exports = function(eleventyConfig) {
  // Copier les assets statiques (sauf CSS qui est géré par Tailwind)
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  
  // Watch le CSS source pour rebuild
  eleventyConfig.addWatchTarget("./src/assets/css/");
  
  // Ignorer le dossier _site/assets/css pour éviter les conflits
  eleventyConfig.watchIgnores.add("_site/assets/css/*");

  // Collections
  eleventyConfig.addCollection("services", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/services/*.md");
  });

  eleventyConfig.addCollection("realisations", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/realisations/*.md");
  });

  // Builder Pages - chargé depuis builder-pages-data/*.json
  eleventyConfig.addGlobalData("builderPages", function() {
    const fs = require('fs');
    const path = require('path');
    const dir = path.join(__dirname, 'src/builder-pages-data');
    
    if (!fs.existsSync(dir)) return [];
    
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
    return files.map(file => {
      const content = fs.readFileSync(path.join(dir, file), 'utf8');
      return JSON.parse(content);
    });
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
