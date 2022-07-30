$(readyNow);

function readyNow(){
    console.log("ready now");
   $('#addition').on('click', add);
   $('#subtraction').on('click', subtraction);
   $('#multiplication').on('click', multiply);
   $('#division').on('click', divide);
   $('#clear').on('click', clear);
}



function add(){
    console.log("add");
   
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

function clear(){
    console.log('clear!');
    

}
