const express = require('express');
const {queryAsync} = require('../libs/db');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const rows = await queryAsync('select * from m_user').catch(err => {res.status(500).json(err)});
  res.json(rows);
});

router.get('/:userId', async (req, res, next) => {
  const rows = await queryAsync('select * from m_user where id = ?', req.params.userId).catch(err => {res.status(500).json(err)});
  res.json(rows[0]);
});

router.post('/', async (req, res, next) => {
  const result = await queryAsync('insert into m_user (name) values (?)', req.body.name).catch(err => {res.status(500).json(err)});
  res.json({id: result.insertId});
});

router.put('/:userId', async (req, res, next) => {
  await queryAsync('update m_user set name = ? where id = ?', [req.body.name, req.params.userId]).catch(err => {res.status(500).json(err)});
  res.json({});
});

router.delete('/:userId', async (req, res, next) => {
  await queryAsync('delete from m_user where id = ?', req.params.userId).catch(err => {res.status(500).json(err)});
  res.json({});
});

module.exports = router;
