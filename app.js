const express = require('express');
const path = require('path'); // path lets us navigate the firs system
const hbs = require('hbs');

const sql = require('./utils/sql');


// heroky assigns a port it deploys via process (environment variables - coming)
// locally this  run ..
const port = process.env.PORT || 3000; //a double pipe - ||-  means or

const app = express();

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');



app.get ('/', (red, res) => {
  console.log('at the home route');

//res.sendFile(path.join(__dirname + '/views/index.html'));

  res.render('home', {message: "hi there", anothermessage: "this is easy! haha" } );
  
})

app.get('/contact', (req,res) => {
  console.log('at the cont route')
  // res.sendFile(path.join(__dirname + '/views/contact.html'));
  res.render('contact', {message: "What is your name?"})

})


app.get('/users', (req,res) => {
  console.log('at the users route')

  sql.getConnection((err, connections) => {
    // handle errors first
    if (err) {
      return console.log(err.message);
    }

    let query = `SELECT * FROM tbl_card`;

    sql.query(query, (err, rows) => {
      connections.release();

      if (err) 
      {return console.log(err.message);
      }

      console.log(rows);

      res.render('user', rows[0]);
    })
  })
})


app.get('/portfolio', (req,res) => {
  console.log('at the port route')
  res.send('on the portfolio page');

})

app.listen(port, () => {
  console.log(`Server running at ${port}/`);
})