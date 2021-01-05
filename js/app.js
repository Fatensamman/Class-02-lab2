'use strict';
var score = 0
var username = prompt('Welcome to my website ^__^ What is your name?');
console.log('username:' + username);

for (var i = 0; i < 2; i++) {
    var quistion1 = prompt('Do I live in Oman? yes/no');

    if (quistion1.toLowerCase() === "yes" || quistion1.toLowerCase() === "y") {
        //console.log('Q1: ' + ' Oops its wrong');
        alert('Oops! ' + username + ' try to guess again');
    } else {
        if (quistion1.toLowerCase() === "no" || quistion1.toLowerCase() === "n") {

            // console.log('Q1: ' + ' its correct');
            alert('Correct! ' + username + ' you are the best');
            score++;

        }
        break;
        // else{ while(quistion1.toLowerCase() !=='yes' && quistion1.toLowerCase() !=='y'&& quistion1.toLowerCase() !=='no' && quistion1.toLowerCase() !=='no'){
        //   prompt ('please yes or no');
        // }
        // }
    }
}
for (var i = 0; i < 2; i++) {
    var quistion2 = prompt('Am I an Architect? yes/no');

    if (quistion2.toLowerCase() === "yes" || quistion2.toLowerCase() === "y") {
        //console.log('Q2: ' + ' its correct');
        alert('Correct! ' + username + ' you are the best');
        score++;
        break;
    } else {
        if (quistion2.toLowerCase() === "no" || quistion2.toLowerCase() === "n") {

            // console.log('Q2: ' + ' Oops its wrong');
            alert('Oops! ' + username + ' try to guess again');
        }
    }
}
for (var i = 0; i < 2; i++) {
    var quistion3 = prompt('Did I work at Semat consultant engineering company? yes/no');

    if (quistion3.toLowerCase() === "no" || quistion3.toLowerCase() === "n") {
        // console.log('Q3: ' + ' Oops its wrong');
        alert('Oops! ' + username + ' try to guess again');

    } else {
        if (quistion3.toLowerCase() === "yes" || quistion3.toLowerCase() === "y") {
            // console.log('Q3: ' + ' its correct');
            alert('Correct! ' + username + ' you are the best');
            score++;
            break;
        }
    }
}
for (var i = 0; i < 2; i++) {
    var quistion4 = prompt('Do I use softwares to show my thoughts? yes/no');
    if (quistion4.toLowerCase() === "yes" || quistion4.toLowerCase() === "y") {
        //console.log('Q4: ' + ' its correct');
        alert('Correct! ' + username + ' you are the best');
        score++;
        break;
    } else {
        if (quistion4.toLowerCase() === "no" || quistion4.toLowerCase() === "n") {
            // console.log('Q4: ' + ' Oops its wrong');
            alert('Oops! ' + username + ' try to guess again');
        }
    }
}
for (var i = 0; i < 2; i++) {
    var quistion5 = prompt('Do I like candycrush game? yes/no');
    if (quistion5.toLowerCase() === "yes" || quistion5.toLowerCase() === "y") {
        //console.log('Q5: ' + ' Oops its wrong');
        alert('Oops! ' + username + ' try to guess again');
    } else {
        if (quistion5.toLowerCase() === "no" || quistion5.toLowerCase() === "n") {
            //console.log('Q5: ' + ' its correct');
            score++;
            alert('Correct! ' + username + ' you are the best');
            break;
        }
    }
}

for (var i = 0; i < 4; i++) {
    var quistion6 = prompt('What is my favourite Number?');
    if (quistion6 === '7') {
        score++;
        alert('Thats right');
        break;
    } else {
        if (quistion6 >= '5' && quistion6 <= '9' && quistion6 !== '7') {
            alert('Thats too high');
        } else {
            alert('thats too low');
        }
    }
}
alert('The correct answer is 7');

var programsIUse = ['autocad', '3dsmax', 'revit'];
for (var i = 0; i < 6; i++) {
    var siteOwenPrograms = prompt('which is the program that I use very often? ');
    if (siteOwenPrograms.toLowerCase() === programsIUse[0] || siteOwenPrograms.toLowerCase() === programsIUse[1] || siteOwenPrograms.toLowerCase() === programsIUse[2]) {
        score++
        alert('Thats right you are the best');
        break;
    } else {
        alert('Try to guess again!');
    }
}
alert('I used to work on these programs ; ' + programsIUse);

alert('Your score is : ' + score + '/7');

document.write('<h2>' + 'Welcome ' + username + ' I am glad to see you in my website ' + '</h2>');
alert('Thank you ' + username + '^__^');
