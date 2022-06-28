var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname,'public','index.html'))
// });
// app.get('/',(req,res) => {
//     res.send('Hello World')
// });

// app.get('/about',(req,res) => {
//     res.send('About Page')
// })

app.listen(port,function(){
    console.log('Server started on port 3000');
    console.log('Server - back end')
});

