'use strict'

var username = prompt('Welcome to my website ^__^ What is your name?')
console.log('username:' + username)

var quistion1 = prompt('Do I live in Oman? yes/no')

if (quistion1.toLowerCase() === "yes" || quistion1.toLowerCase() === "y") {
    //console.log('Q1: ' + ' Oops its wrong')
    alert('Oops! ' + username + ' try to guess again')
} else {
    if (quistion1.toLowerCase() === "no" || quistion1.toLowerCase() === "n") {

        // console.log('Q1: ' + ' its correct')
        alert('Correct! ' + username + ' you are the best')
    }
}

var quistion2 = prompt('Am I an Architect? yes/no')

if (quistion2.toLowerCase() === "yes" || quistion2.toLowerCase() === "y") {
    //console.log('Q2: ' + ' its correct')
    alert('Correct! ' + username + ' you are the best')
} else {
    if (quistion2.toLowerCase() === "no" || quistion2.toLowerCase() === "n") {

        // console.log('Q2: ' + ' Oops its wrong')
        alert('Oops! ' + username + ' try to guess again')
    }
}

var quistion3 = prompt('Did I work at Semat consultant engineering company? yes/no')

if (quistion3.toLowerCase() === "no" || quistion3.toLowerCase() === "n") {
    // console.log('Q3: ' + ' Oops its wrong')
    alert('Oops! ' + username + ' try to guess again')

} else {
    if (quistion3.toLowerCase() === "yes" || quistion3.toLowerCase() === "y") {
        // console.log('Q3: ' + ' its correct')
        alert('Correct! ' + username + ' you are the best')
    }
}

var quistion4 = prompt('Do I use softwares to show my thoughts? yes/no')
if (quistion4.toLowerCase() === "yes" || quistion4.toLowerCase() === "y") {
    //console.log('Q4: ' + ' its correct')
    alert('Correct! ' + username + ' you are the best')
} else {
    if (quistion4.toLowerCase() === "no" || quistion4.toLowerCase() === "n") {
        // console.log('Q4: ' + ' Oops its wrong')
        alert('Oops! ' + username + ' try to guess again')
    }
}
var quistion5 = prompt('Do I like candycrush game? yes/no')
if (quistion5.toLowerCase() === "yes" || quistion5.toLowerCase() === "y") {
    //console.log('Q5: ' + ' Oops its wrong')
    alert('Oops! ' + username + ' try to guess again')
} else {
    if (quistion5.toLowerCase() === "no" || quistion5.toLowerCase() === "n") {
        //console.log('Q5: ' + ' its correct')
        alert('Correct! ' + username + ' you are the best')
    }
}
//console.log('Ilive in Amman,Iam an architect,and I worked at Semat Consultant Engineering Company, I use alot of softwares to show my thoughts, I dont like candycrushgame')

document.write('<h2>' + 'Welcome ' + username + ' I am glad to see you in my website ' + '</h2>')
alert('Thank you ' + username + '^__^')
