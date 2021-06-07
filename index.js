function runCalculations(){

    var sumResult = addTwoNumbers(199, 201);
    console.log(sumResult);

    var differenceResult = differenceOfTwoNumbers(2000, 1555);
    console.log(differenceResult);

    var multAndDivideResult = multAndDivideThree(20, 15, 2);
    console.log(multAndDivideResult);
}

function addTwoNumbers(numberOne, numberTwo){
    var result = numberOne + numberTwo;
    return result;
}

function differenceOfTwoNumbers(numberOne, numberTwo){
    var result;
    if(numberOne > numberTwo){
        result = numberOne - numberTwo;
    }else{
        result = numberTwo - numberOne;
    }
    return result;
}

function multAndDivideThree(numberOne, numberTwo, numberThree){
    var result = numberOne * numberTwo / numberThree;
    return result;
}

runCalculations();
