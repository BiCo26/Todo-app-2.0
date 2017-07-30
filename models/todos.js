const db = require('../db/config.js');

const Todo = {
    findAll: ()=>{
        return db.query(`SELECT * FROM todos`);
    },
    findById: (id) =>{
        return db.one(`SELECT * FROM todos
        WHERE id = $1`,[id]);
    }
}

module.exports = Todo;