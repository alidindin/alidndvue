// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-simple-vars': {},
    'postcss-conditionals': {},
    'postcss-calc':{},
    'postcss-utilities': {}
  }
};
