'use strict'

const { format: dateFnsFormat } = require('date-fns');

module.exports = function(eleventyConfig) {
    eleventyConfig.addNunjucksFilter("date", function(date, dateFormat) {
    return dateFnsFormat(date, dateFormat)
  });

  eleventyConfig.addPassthroughCopy({
        "./public/": "/",
    });
}