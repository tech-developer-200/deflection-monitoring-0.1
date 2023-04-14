const express = require('express')
const {getdata, feeddata, postdata} = require('../controller/datacontroller.js')
const router = express.Router();

router.route('/s').get(getdata).post(feeddata,postdata);

module.exports = router;