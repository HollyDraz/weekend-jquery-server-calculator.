const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

//must be added before the get and post routes
app.use(express.urlencoded({extended: true}));
app.use(express.static('server/public'));

//history of my math problems 
let mathProblems = [];
//answer that gets pushed back to the dom 
let answer = [];
console.log(answer);



//this gets my math problem history
//
app.get('/mathProblems', (req, res) =>{
    res.send(mathProblems);
} );

app.post('/MathProblems', (req, res) => {
    const mathProblems = req.body;
    console.log(mathProblems);
    console.log(req.body);


})

//function that does the math - results
app.get('/answers', (req, res) => {
    const answer = req.body;
    console.log(req.body);
    console.log(answer);
    //need to then find a way to add the operator to the total
    mathProblems.answer = mathProblems.input - mathProblems.xinput

    mathProblems.push(answer);
    res.sendStatus(201);
    
});


// keep at the bottom 
app.listen(port, ( ) => {
    console.log("listening on port", port)

});

