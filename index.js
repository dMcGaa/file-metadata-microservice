var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

var multer = require('multer');
var upload = multer();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/home', function(request, response) {
  console.log("request received", request.url);
  console.log('xhr?', request.xhr);
  response.render('pages/index')
});

app.post('/upload', function(req, res) {
  console.log("request received", req.url);
  console.log('xhr?', req.xhr);
  // res.send(request.url);
  console.log(req.body);
  res.send("POST response on 'upload'");
  // console.log("req:", req);
  // res.send("file received");
});

// app.post('/somefile', upload.single('filemetadata'), function (req, res, next) {
app.post('/somefile', upload.any(), function(req, res, next) {
  console.log("POST to /somefile");
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log("files", req.files);
  console.log("body", req.body)
  console.log("req length", req.length);
  // console.log(req.files[0]);
  // res.send(req.files[0]);
  res.send({
    originalname: req.files[0].originalname,
    size: req.files[0].size
  });
});

// app.post('/somefile', upload.array(), function (req, res, next) {
//   // req.body contains the text fields
//   console.log(req.body);
// });

app.get('/upload', function(req, res) {
  console.log(req.xhr);
  res.send("GET response on 'upload'")
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
