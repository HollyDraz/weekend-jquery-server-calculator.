$(readyNow);

function readyNow(){
    console.log("ready now");
   $('#addition').on('click', add);
   $('#subtraction').on('click', subtraction);
   $('#multiplication').on('click', multiply);
   $('#division').on('click', divide);
   $('#clear').on('click', clear);
   $('#equal').on('click', serverAnswer);
   postAnswers();
}


function serverAnswer(){
    $.ajax({
        type: 'POST',
        url: '/MathProblems',
        data: {
            input: $('#first-input').val(),
            modifier: currentModifier,
            xinput: $('#second-input').val()
        }
    }).then(function (response){
        console.log(response);
        postAnswers();
    });
}

let currentModifier = [];
console.log(currentModifier);
//function for modifier
function newMod(){
    $(this).data("+")

}



function postAnswers(){
    console.log('in post answers');
    $.ajax({
        type: 'GET',
        url: '/answers'
    }).then(function (response) {
        for (let i =0; i > response.length; i++){
            let answer = response[i];
            console.log(answer);
            $('#problems').append(`
            <tr>
                <td>${mathProblems}</td>
            </tr>
            `)
        }
    });
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





function clear(){
    console.log('clear!');
    $('#first-input').val('');
    $('#second-input').val('');
}

// old function I wanted to include to show where my logic started at



//function total (){
   // console.log('total!');
    //let equations ={
        //swap out plus sign with the modifier
       // problem: 
        //input: "input",
        //second: 
        //answer: ''
    //}
    //MathProblems.push(equations);
    //console.log(MathProblems);
    //console.log(equations);
    //$('#problems').append(`
    //<ul>
     //   <li>${equations.problem} ${equations.input} ${equations.second}</li>
   // </ul>
    //`);

