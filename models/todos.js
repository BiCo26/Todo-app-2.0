const db = require('../db/config.js');

const Todo = {
    findAll: ()=>{
        return db.query(`SELECT * FROM todos`);
    },
    findById: (id) =>{
        return db.one(`SELECT * FROM todos
        WHERE id = $1`,[id]);
    },
    create: (todo) => {
        return db.one(`
          INSERT INTO todos
          (title,currentdate, content)
          VALUES
          ($1,$2,$3)
          RETURNING *          
        `,[todo.title, todo.currentdate, todo.content]);
    },
    update: (todo,id)=>{
        return db.one(`UPDATE todos 
        SET
        title = $1,
        currentdate = $2,
        content = $3
        WHERE id = $4
        RETURNING *
        `,[todo.title,todo.currentdate,todo.content,id]);
    }
}

module.exports = Todo;