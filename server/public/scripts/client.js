$(readyNow);

function readyNow(){
    console.log("ready now");
   $('#addition').on('click', add);
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
        console.log("here is my response", response);
        getAnswers();
        console.log("my answer is ", answer);
        $('#answer').empty();
        $('#answer').append(`
         ${response.answer}
        `)
    }); 
}

function getAnswers(){
    console.log('in get answers');
    $.ajax({
        type: 'GET',
        url: '/mathproblems'
    }).then(function (response) {
        $('#problems').empty();
        console.log("get answers response is", response);
        for (let i = 0; i < response.length; i++){
            let answer = response[i];
            console.log(answer);
            $('#problems').append(`
            <ul>
            <li>${answer.input} ${answer.modifier} ${answer.xinput} = ${answer.answer}</li>
            </ul>
            `)
        
        }  
    })
}







function add(){
   currentModifier = '+'
}

function subtraction(){
    currentModifier = '-';
}

function multiply(){
   currentModifier = '*'
}

function divide(){
    currentModifier = '/'
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

