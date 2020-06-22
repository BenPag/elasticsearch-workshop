const config = require('../global.config');
const instance = require('axios').create({
  baseURL: config.elasticsearch_url,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

module.exports = instance;
