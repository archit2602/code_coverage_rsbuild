module.exports = {
  include: ["src/**/*.js"],
  exclude: ["rsbuild.config.ts", "**/*.spec.js"],
  reporter: ["html", "text", "lcov"],
};
