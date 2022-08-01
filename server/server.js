const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

//must be added before the get and post routes
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

//history of my math problems 
let mathProblems = [];

//this gets my math problem history
app.get('/mathproblems', (req, res) =>{
    res.send(mathProblems);
} );


app.post('/mathproblems', (req, res) => { 
    const mathProblem = req.body;
    console.log(mathProblem);
    if(req.body.modifier === '-'){
        mathProblem.answer= req.body.input - req.body.xinput
    }else if(req.body.modifier === '+'){
        mathProblems.answer= req.body.input + req.body.xinput
    }
    mathProblems.push(mathProblem);
    // Send back current problem with answer
    res.send(mathProblem);
});


// keep at the bottom 
app.listen(port, ( ) => {
    console.log("listening on port", port)

});

