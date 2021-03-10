const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

let app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("Hello from the web server siiiiide");
});


app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
  fs.appendFileSync("log.txt", `${req.url}\n`);
  next();
});



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));

// });

// app.get('/css/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/css/styles.css'))
// });

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact-form', (req, res) => {
console.log(req.body.email);
console.log(req.body.name);
res.send("thank you for submit");
})

app.get('/order/:name', (req, res) => {
    let name = req.params.name;
    let email = req.query.email;
    res.send('your name is ${name} and email is ${email}');
});

app.listen(3000);
