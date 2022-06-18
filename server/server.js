const fs = require('fs');
const categories = require('./json/categories.json');
const items = require('./json/items.json');
const requests = require('./json/requests.json');
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser')


app.use(cors({  
      origin: '*'
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// on the request to root (localhost:3000/)
app.get('/items', function (req, res) {
    res.end(JSON.stringify(JSON.parse(fs.readFileSync('json/items.json'))));
});
app.get('/categories', function (req, res) {
    res.end(JSON.stringify(JSON.parse(fs.readFileSync('json/categories.json'))));
});
app.get('/requests', function (req, res) {
    res.end(JSON.stringify(JSON.parse(fs.readFileSync('json/requests.json'))));
});
app.post('/requests', function (req, res) {
   if(req.body.id == ''){
    let requests = JSON.parse(fs.readFileSync('json/requests.json'));
    req.body.id = requests.length+1;
    fs.writeFileSync('json/requests.json', JSON.stringify([...requests,req.body]));
    res.send(JSON.stringify([...requests,req.body]));
   }else{
    let requests = JSON.parse(fs.readFileSync('json/requests.json'));
    requests.forEach((request,index) => {
        if(request.id == req.body.id){
            requests[index]['title']= req.body.title;
            requests[index]['category']= req.body.category;
            requests[index]['item']= req.body.item;
            requests[index]['quantity']= req.body.quantity;
            requests[index]['description']= req.body.description;
            requests[index]['status']= req.body.status;
        } 
    });
    fs.writeFileSync('json/requests.json', JSON.stringify(requests));
    res.send(JSON.stringify(requests));
   }
    // res.send(true);
    
   

});
app.post('/login', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.end(JSON.stringify(true));
    // fs.writeFileSync('json/requests.json', requests);

});

app.listen(3002, function () {
    console.log('Example app listening on port 3002.');
});
// var app = http.createServer(function(req,res){
//     res.setHeader('Content-Type', 'application/json');
//     fs.readFile('json/categories.json', 'utf8', (err, data) => {
//         // debugger
//         if (err) {
//           console.error(err);
//           return;
//         }
//         // console.log(data);
//         res.end(JSON.stringify(JSON.parse(data)));
//       });
    
// });
// app.listen(3002);


