// Theoretical questions.
// ** DO NOT Google these questions, we will notice :) **
// 1- What is a higher order function ?
// a function that takes another function as an argument
// 2- Name all falsy values in javascript ?
//false / 0 / null / undefined /
// 3- Explain the following git-related terms in your own words:

// Fork:
// create a copy of a repository in your own github
// clone:
//create a copy of a repository in you computer
// push:
// add changes to a repoitory from your computer to github 
// 4- Why would we rather use JQuery than native DOM methods (document.getElementById, etc) ?
// the syntax is better and easier manipulation with selectors



function sumBetween(num1,num2){
    if(num2 === num1){
        return num1
    }
    if(num1 > num2){
        var x=num1
        num1=num2
        num2=x
    }
    return num2+sumBetween(num1,num2-1)
}

function joinRecursion(arr){
    if(arr.length === 0){
        return ''
    }
    return arr.shift() + joinRecursion(arr)
}

function flatten(arr){
    if(arr.length===0){
        return []
    }
    var element=arr.pop()
    if (Array.isArray(element)){
        element.concat(flatten(element))
    }
    return arr.concat(flatten(arr))
    
}