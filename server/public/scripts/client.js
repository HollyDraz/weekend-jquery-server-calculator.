$(readyNow);

function readyNow(){
    console.log("ready now");
    $('#addition').on('click', add);
    $('#subtraction').on('click', subtraction);
    $('#multiplication').on('click', multiply);
    $('#division').on('click', divide);


}

//function for all my calculations
// is there a way to use this so I can make 
//all my calculations a $this? 
function add(){
    console.log("adding");
}

function subtraction(){
    console.log("minus");
}

function multiply(){
    console.log('multiplication');
}

function divide(){
    console.log('division');
}