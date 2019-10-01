const express = require('express');
const {queryAsync} = require('../libs/db');
const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const rows = await queryAsync('select * from m_user').catch(err => {throw err});
  console.log(rows);
  res.json(rows);
});

module.exports = router;
