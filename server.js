// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
//var validateDate = require("validate-date");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api", function (req, res) {
  
      date = new Date()
     const finaldateempty = { 
            unix: date.getTime(), 
            utc: date.toUTCString() 
        }
        console.log(finaldateempty)
        return res.json(finaldateempty)
  
 });

app.get('/api/:date', (req, res) => {
          let date
          date = !isNaN(req.params.date)
          ? new Date(Number(req.params.date))
          : new Date(req.params.date)
  
         // Recode edilecek //
  const timeStamp = {
        error : date.toUTCString(),
        unix: date.getTime(),
        utc: date.toUTCString()
    }
    console.log(timeStamp)

    res.json(timeStamp)
  
  /*
    var ctime =  req.params.date;
  if(ctime)
    res.json({unix: qtime});

  */

   
});



app.get('/now', function(req, res, next) {
req.time = new Date().toString();
    next();
}, function(req, res) {
 res.send({
      time: req.time
    });

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
