const pluginESbuild = require("@jamshop/eleventy-plugin-esbuild");

module.exports =  eleventyConfig => {
  eleventyConfig.setUseGitIgnore(false)

  // Aliases are in relation to the _includes folder
  eleventyConfig.addLayoutAlias("default", "layouts/default.html")
  eleventyConfig.addLayoutAlias("page", "layouts/page.html")
  eleventyConfig.addLayoutAlias("post", "layouts/post.html")

  eleventyConfig.addWatchTarget("./_tmp/style.css")
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" })

  eleventyConfig.addPlugin(pluginESbuild, {
    entryPoints: {
      main: "./js/index.js"
    },
    output: "_site/js"
  })

  eleventyConfig.addShortcode("version", () => String(Date.now()))

  return {
    dir: {
      input: "./",
      output: "./_site",
    },
  }
}

