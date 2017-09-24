//main applications
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//template engine
app.set('view engine', 'pug');
app.set('views', './views'); //default setting = ./views

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//route
app.get('/form_receiver', (req,res) => {
    let title = req.query.title;
    let des = req.query.description;
    res.send(title+','+des);
})

app.post('/form_receiver', (req,res) => {
    let title = req.body.title;
    let des = req.body.description;
    res.send(title+','+des);
});

app.get('/form',(req,res) => res.render('form'));

app.get('/topic/:id', function(req, res){
    var topics = [
      'Javascript is....',
      'Nodejs is...',
      'Express is...'
    ];
    var output = `
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br><br>
    ${topics[req.params.id]}
    `
    res.send(output);
  })

app.get('/topic/:id/:mode', function(req, res){
    res.send(req.params.id+','+req.params.mode)
})

app.get('/topic', (req,res) => {
    const topics =[
        'Js...',
        'Node...',
        'Express...'
    ];
    let output = `
        <a href="/topic?id=0">Js</a><br>
        <a href="/topic?id=1">Node</a><br>
        <a href="/topic?id=2">Express</a><br>
        ${topics[req.query.id]}
    `

    res.send(output);
})

app.get('/template', (req,res) =>{
    res.render('temp',{time: Date(),title: 'Temp with pug!'}); // views/temp.pug
})

app.get('/dynamic', (req,res) => {
    let output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        hello dynamic!
    </body>
    </html>`;
    res.send(output);
});

app.get('/', (req,res) => res.send('Hello home page'));

app.get('/tree', (req,res) => res.send('Hello tree, <img src="tree.jpeg">'))

app.get('/login', (req,res) => res.send('login please!'));

app.listen(3000, () => console.log('Connected 3000 port!'));