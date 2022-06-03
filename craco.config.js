module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    babel: {
      // plugins: ["transform-remove-console"]
      plugins: process.env.REACT_APP_IS_PROD === "true" ? ["transform-remove-console"] : []
    }
  }