const businessjs = require('./src/main');

module.exports = businessjs;

if (typeof window !== 'undefined') {
  window.businessjs = businessjs;
}
