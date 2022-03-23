const express = require("express");
const { json } = require("express/lib/response");
const router = express.Router();
const connection = require('../connect');

router.get('/', (req, res, next) => {

  connection.query('SELECT * FROM `customers` WHERE 1', function(err, results) {
    !err ? res.json(results) : res.json({err})
    
  });
  
});

module.exports = router;






