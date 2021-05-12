const Controller = require('../controllers/controller.js');
const {authorise} = require('../untils')

module.exports = (server) => {
    server.get('',authorise.isAuthen, Controller.queryData);
    
}