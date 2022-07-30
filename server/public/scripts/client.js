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
    console.log("subtraction");
}

function multiply(){
    console.log('multiplication');
}

function divide(){
    console.log('division');
}



function total (){
    console.log('total!');

}


function clear(){
    console.log('clear!');


}
