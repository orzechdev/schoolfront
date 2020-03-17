module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Example School";
      args[0].description = "Example School Page";
      args[0].keywords = "Example School, page, education, learning, school, institution";
      return args;
    });
  }
};
