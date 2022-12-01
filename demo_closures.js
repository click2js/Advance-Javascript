let globalValue = 1;

function closureOuter() {
    let globalValue = 2;
    function closureInner() {
        console.log(globalValue, "checking");
    }
    closureInner();
}
closureOuter();

// When inner function is called inside outer function the local variable is printed that is log inside of inner function

