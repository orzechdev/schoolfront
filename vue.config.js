module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const newArgs = args;
      newArgs[0].title = 'Example School';
      newArgs[0].description = 'Example School Page';
      newArgs[0].keywords = 'Example School, page, education, learning, school, institution';
      return newArgs;
    });
  },
};
