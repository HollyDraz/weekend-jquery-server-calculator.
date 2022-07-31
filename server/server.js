const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

//must be added before the get and post routes
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

//history of my math problems 
let MathProblems = [];
console.log(MathProblems);

//this gets my math problem history
app.get('/MathProblems', (req, res) =>{
    res.send(MathProblems);

} );




// keep at the bottom 
app.listen(port, ( ) => {
    console.log("listening on port", port)

});

