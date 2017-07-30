const db = require('../db/config.js');

const Todo = {
    findAll: ()=>{
        return db.query(`SELECT * FROM todos`);
    }
}

module.exports = Todo;