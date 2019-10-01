const express = require('express');
const {queryAsync} = require('../libs/db');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const rows = await queryAsync('select * from m_user').catch(err => {res.json(err)});
  res.json(rows);
});

module.exports = router;
