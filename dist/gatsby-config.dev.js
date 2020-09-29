"use strict";

require("dotenv").config();

module.exports = {
  plugins: [{
    resolve: "gatsby-transformer-remark",
    options: {
      // CommonMark mode (default: true)
      commonmark: true,
      // Footnotes mode (default: true)
      footnotes: true,
      // Pedantic mode (default: true)
      pedantic: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: []
    }
  }, {
    resolve: "gatsby-source-contentful",
    options: {
      spaceId: "ms32o5otnl3a",
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    }
  }, {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "".concat(__dirname, "/src/images")
    }
  }, {
    resolve: "gatsby-plugin-scroll-reveal",
    options: {
      threshold: .001,
      // Percentage of an element's area that needs to be visible to launch animation
      once: true,
      // Defines if animation needs to be launched once
      disable: false,
      // Flag for disabling animations
      // Advanced Options
      selector: "[data-sal]",
      // Selector of the elements to be animated
      animateClassName: "sal-animate",
      // Class name which triggers animation
      disabledClassName: "sal-disabled",
      // Class name which defines the disabled state
      rootMargin: "0% 50%",
      // Corresponds to root's bounding box margin
      enterEventName: "sal:in",
      // Enter event name
      exitEventName: "sal:out" // Exit event name

    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-fontawesome-css"]
};