const path = require('path');
const express = require('express');
// const hbs = require('hbs');

const app = express()

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const publicDirPath = path.join(__dirname, '../public');
//If you change the folder name views to another then use below two line of codes
const viewPath = path.join(__dirname, '../templetes/views');


//setup handlebars engine and views path
app.set('view engine', 'hbs');
app.set('views', viewPath);

//setup static directory to server
app.use(express.static(publicDirPath));

app.get('', (req, res) => {
    res.render('index');      //here parameter of render function is file name of handlebars which we want to render (Ex: index.hbs);
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})