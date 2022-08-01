$(readyNow);

function readyNow(){
    console.log("ready now");
  // $('#addition').on('click', add);
   $('#subtraction').on('click', subtraction);
   $('#multiplication').on('click', multiply);
   $('#division').on('click', divide);
   $('#clear').on('click', clear);
   $('#equal').on('click', serverAnswer);
   getAnswers();
}

let currentModifier = ('');
console.log(currentModifier);
function serverAnswer(){
    $.ajax({
        type: 'POST',
        url: '/mathproblems',
        data: {
            input: $('#first-input').val(),
            modifier: currentModifier,
            xinput: $('#second-input').val()
        }
    }).then(function (response){
        console.log(response);
        getAnswers();
    });
}



function getAnswers(){
    console.log('in get answers');
    $.ajax({
        type: 'GET',
        url: '/mathproblems'
    }).then(function (response) {
        console.log(response);
        for (let i =0; i < response.length; i++){
            let answer = response[i];
            console.log(answer);
            $('#problems').append(`
            
                <div>${answer.input} ${answer.modifier} ${answer.xinput} = ${answer.answer}</div>
           
            `)
        }
    });
}



var one;
var two;
//function add(){
   //currentModifier = "+"
//}


function subtraction(){
    currentModifier = "-";
}

function multiply(){
   
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

