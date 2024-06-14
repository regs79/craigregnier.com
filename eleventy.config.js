'use strict'

const { format: dateFnsFormat } = require('date-fns');
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksFilter("date", function(date, dateFormat) {
    return dateFnsFormat(date, dateFormat)
  });

	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

  eleventyConfig.addPassthroughCopy({
        "./public/": "/",
    });
}