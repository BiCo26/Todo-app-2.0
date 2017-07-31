const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);

});

app.get('/', (req,res) =>{
    res.render('index');
});

const todoRoutes = require ('./routes/todo-routes');
app.use('/todos',todoRoutes);

app.get('*', (req,res)=>{
    res.status(404).json('Page not found');
});