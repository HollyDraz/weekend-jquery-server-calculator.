const express = require('express');

const app = express();
//const port = 5000;

const port = process.env.PORT || 5001;


app.use(express.urlencoded({extended: true}));



app.use(express.static('server/public'));

app.listen(port, ( ) => {
    console.log("listening on port", port)

});

