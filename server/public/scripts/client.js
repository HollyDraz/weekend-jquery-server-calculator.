$(readyNow);

function readyNow(){
    console.log("ready now");
   $('#addition').on('click', add);
   $('#subtraction').on('click', subtraction);
   $('#multiplication').on('click', multiply);
   $('#division').on('click', divide);
   $('#clear').on('click', clear);
   $('#equals').on('click', total);
}


var one;
var two;
function add(){
    console.log("add");
    var one = document.getElementById('first-input').value;
    var two = document.getElementById('second-input').value;
   console.log(one);
   console.log(two);
}


function subtraction(){
    var one = document.getElementById('first-input').value;
    var two = document.getElementById('second-input').value;
    console.log(one);
    console.log(two);
    console.log("subtraction");
}

function multiply(){
    var one = document.getElementById('first-input').value;
    var two = document.getElementById('second-input').value;
    console.log(one);
    console.log(two);
    console.log('multiplication');
}

function divide(){
    var one = document.getElementById('first-input').value;
    var two = document.getElementById('second-input').value;
    console.log(one);
    console.log(two);
    console.log('division');
}


//when i hit equal i want to append my answer and the whole 
// equation to my DOM 
// also on click I want to replace whatever I have in the answers 
//div with the most recent computer calculation
let MathProblems = [];
let result = [];
let input = [];


function total (){
    console.log('total!');
    let equations ={
        //swap out plus sign with the modifier
        problem: $('#first-input').val(),
        input: 'modifier',
        second: $('#second-input').val(),
        answer: ''
    }
    MathProblems.push(equations);
    console.log(MathProblems);
    console.log(equations);
    $('#problems').append(`
    <ul>
        <li>${equations.problem} ${equations.input} ${equations.second}</li>
    </ul>
    `);
}


function clear(){
    console.log('clear!');
    $('#first-input').val('');
    $('#second-input').val('');
}
