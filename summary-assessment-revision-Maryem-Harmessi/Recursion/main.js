// YOUR CODE HERE
function sumBetween(num1,num2){
    if (num2 === num1){
        return num1
    }
    if (num1 > num2){
        
        var x=num1
        num1=num2
        num2=x
        
    }
    return num2 + sumBetween(num1,num2-1)
}