const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController')(app);
require('./controllers/placeController')(app);

app.get('/',(req,res)=>{
    res.send('ok');
});

app.listen(3000);