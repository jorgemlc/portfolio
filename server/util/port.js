const argv = require('./argv');

module.exports = parseInt(argv.port || process.env.PORT || '9100', 10);
