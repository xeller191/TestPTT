const express = require("express")
const router = express.Router()
const controller = require('../controllers/controller.js');
const {authorise} = require('../untils')

router.get("/", controller.queryData)
// module.exports = (server) => {
//     server.get('',authorise.isAuthen, Controller.queryData);
    
// }

module.exports = router