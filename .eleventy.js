module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("img");


    eleventyConfig.addCollection("posts", (collectionApi) => {
        return collectionApi.getFilteredByTag("post").sort((a, b) => {
            return b.date - a.date;
        });
    });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site",
        },
        markdownTemplateEngine: "njk",
    };
};