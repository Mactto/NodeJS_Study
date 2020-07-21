const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.get('/template', (req, res) => {
  res.render('temp', {time: Date()});
})
app.get('/', (req, res) => res.send('hello World!'));
app.get('/dynamic', (req, res) => {
  var lis = '';
  for(var i=0; i<5; i++) {
    lis = lis + `<li>coding</li>`;
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>mactto</title>
    </head>
    <body>
      Hello, Dynamic!
      <ul>
      ${lis}
      </ul>
      ${time}
    </body>
  </html>`;
  res.send(output);
});
app.listen(port, () => console.log('Example app listening at http://localhost:${port}'));
