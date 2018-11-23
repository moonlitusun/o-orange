if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/o-orange.production.min');
} else {
  module.exports = require('./dist/o-orange.development');
}
