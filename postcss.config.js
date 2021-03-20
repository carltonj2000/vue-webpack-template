//const cssnano = require("cssnano");
const tailwindcss = require("@tailwindcss/jit");
const autoprefixer = require("autoprefixer");

module.exports = ({ env }) => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    //    cssnano: env === "production" ? { preset: "default" } : false,
  },
});
