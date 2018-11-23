if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/o-orange');
} else {
  module.exports = require('./dist/o-orange.dev');
}
