module.exports = {

  devIndicators: {
    // remove lightning bolt icon
    autoPrerender: false,
  },

  // Re-map environment vars to work with next
  env: {
    API_TEST: process.env.API_TEST,
  }
}
