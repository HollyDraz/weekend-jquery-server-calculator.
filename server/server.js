const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

//must be added before the get and post routes
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

//history of my math problems 
let mathProblems = [];
let answer = [];




//this gets my math problem history
//
app.get('/mathProblems', (req, res) =>{
    res.send(mathProblems);
} );

//function that does the math - results
app.get( (req, res) => {
    
})



app.post('/MathProblems', (req, res) => {
    const MathProblems = req.body;
    console.log(req.body);


})




// keep at the bottom 
app.listen(port, ( ) => {
    console.log("listening on port", port)

});

