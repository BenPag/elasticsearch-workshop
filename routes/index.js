const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render(`index`, { title: 'Willkommen beim Beiboot des Elasticsearch Workshops' });
});

module.exports = router;
