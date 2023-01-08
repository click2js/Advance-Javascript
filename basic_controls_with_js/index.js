// Add call
let result = 0;
function calculate(ctype) {

    let userInput = document.getElementById('mainInput').value;
    if(ctype === 'add' && userInput) {
        result = result + parseInt(userInput);
    } else if(ctype === 'subs' && userInput) {
        result = result - parseInt(userInput);
    } else if(ctype === 'reset') {
        if (userInput !="") {
            userInput = "";
        }
        result = 0;
    }
    defaultValue(result);
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function defaultValue(res){
    document.getElementById('showRes').innerHTML = (res===0) ? "Please enter some numeric value": parseInt(res);
    document.getElementById('mainInput').value = '';
}
