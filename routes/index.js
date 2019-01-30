var express = require('express');
var router = express.Router();
var Insert = require('../controller/data')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.post('/insert',Insert.insertUserDetails);
router.post('/findUserDetail',Insert.findUserDetail);
router.post('/findUserOneDetail',Insert.findUserOneDetail);
router.post('/count',Insert.count);
router.post('/deleteOne',Insert.deleteOne);
router.post('/distinct',Insert.distinct);
router.post('/update',Insert.update);
module.exports = router;
