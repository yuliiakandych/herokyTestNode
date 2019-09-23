const express = require('express');
const path = require('path'); // path lets us navigate the firs system

// heroky assigns a port it deploys via process (environment variables - coming)
// locally this  run ..
const port = process.env.PORT || 3000; //a double pipe - ||-  means or

const app = express();

app.use (express.static('public'));



app.get ('/', (red, res) => {
  console.log('at the home route')
  res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get('/contact', (req,res) => {
  console.log('at the cont route')
  res.sendFile(path.join(__dirname + '/views/contact.html'));

})

app.get('/portfolio', (req,res) => {
  console.log('at the port route')
  res.send('on the portfolio page');

})

app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});