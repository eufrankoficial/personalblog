const i18n = require("eleventy-plugin-i18n");
const translations = require("./_data/i18n");

module.exports = function (eleventyConfig) {
  // Arquivos estáticos
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("img");


  eleventyConfig.addFilter("t", function (key, lang, page) {
  // 1️⃣ tenta usar o lang explícito
  let locale = lang;

  // 2️⃣ se não tiver lang, tenta deduzir da URL
  if (!locale && page && page.url) {
    const firstSeg = page.url.split("/").filter(Boolean)[0];
    if (["pt", "en"].includes(firstSeg)) {
      locale = firstSeg;
    }
  }

  // 3️⃣ fallback final
  if (!locale) locale = "pt";

  const translations = require("./_data/i18n");
  return translations[locale] && translations[locale][key]
    ? translations[locale][key]
    : key;
});

  eleventyConfig.addCollection("posts_pt", (api) =>
    api.getFilteredByTag("post").filter((p) => /^(\/pt\/)/.test(p.url))
  );

  eleventyConfig.addCollection("posts_en", (api) =>
    api.getFilteredByTag("post").filter((p) => /^(\/en\/)/.test(p.url))
  );

    // Coleção de posts multilíngua
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByTag("post").sort((a, b) => b.date - a.date);
  });

  // Plugin de i18n
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en',
    },
  });

  // Retorna configuração
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    // Força Eleventy a gerar URLs "limpas" tipo /pt/ e /en/
    pathPrefix: "/",
  };
};
