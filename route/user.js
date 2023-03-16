const {add,see} = require('../controller/user');

module.exports = function(app){
    app.post('/api/v1/add',add);
    app.get('/api/v1/see',see);
}