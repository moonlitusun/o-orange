if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/o-orange');
} else {
  module.exports = require('./lib/o-orange.dev');
}
