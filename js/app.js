// 'use strict';
// var score = 0
// var username = prompt('Welcome to my website ^__^ What is your name?');
// console.log('username:' + username);
// //1
// var quistion1;
// attemptCountNo('Do I live in Oman? yes/no', 2);
// //2
// var quistion2;
// attemptCountYes('Am I an Architect? yes/no', 2);
// //3
// var quistion3;
// attemptCountYes('Did I work at Semat consultant engineering company? yes/no', 2);
// //4
// var quistion4;
// attemptCountYes('Do I use softwares to show my thoughts? yes/no', 2);
// //5
// var quistion5;
// attemptCountNo('Do I like candycrush game? yes/no', 2);
// //6
// var quistion6;
// attemptCount('What is my favourite Number?', 4);
// alert('The correct answer is 7');
// // quistion 7 
// var programsIUse = ['autocad', '3dsmax', 'revit', 'photoshop'];
// q7('which is the program that I use very often? ', 7);

// alert('I used to work on these programs ; ' + programsIUse);
// alert('Your score is : ' + score + '/7');
// document.write('<h2>' + 'Welcome ' + username + ' I am glad to see you in my website ' + '</h2>');
// alert('Thank you ' + username + '^__^');


// // functions declaration
// function attemptCountNo(message, num) {
//     var questionX;
//     for (var i = 0; i < num; i++) {
//         questionX = prompt(message);
//         if (questionX.toLowerCase() === "no" || questionX.toLowerCase() === "n") {
//             alert('Correct! ' + username + ' you are the best');
//             score++;
//             break;
//         } else if (questionX.toLowerCase() === "yes" || questionX.toLowerCase() === "y") {
//             alert('Oops! ' + username + ' try to guess again');
//         }
//     }
// }
// function attemptCountYes(message, num) {
//     var questionX;
//     for (var i = 0; (i < num); i++) {
//         questionX = prompt(message);
//         if (questionX.toLowerCase() === "yes" || questionX.toLowerCase() === "y") {
//             alert('Correct! ' + username + ' you are the best');
//             score++;
//             break;
//         } else if (questionX.toLowerCase() === "no" || questionX.toLowerCase() === "n") {
//             alert('Oops! ' + username + ' try to guess again');
//         }
//     }
// }

// function attemptCount(message, num) {
//     var questionX;
//     for (var i = 0; i < num; i++) {
//         questionX = prompt(message);
//         if (questionX === '7') {
//             score++;
//             alert('Thats right');
//             break;
//         } else {
//             if (questionX > 7) {
//                 alert('Thats too high');
//             } else {
//                 alert('thats too low');
//                 // if (questionX >= '5' && questionX <= '9' && questionX !== '7') {
//                 //     alert('Thats too hot');
//                 // } else {
//                 //     alert('thats too cold');
//                 // }
//             }
//         }
//     }
// }

// function q7(message, num) {
//     var questionX;
//     var siteOwenPrograms;
//     var j = 0;
//     var correctanswer = false;
//     while (j < num && !correctanswer) {
//         siteOwenPrograms = prompt('which is the program that I use very often? ');
//         for (var i = 0; i < programsIUse.length; i++) {
//             if (programsIUse[i] === siteOwenPrograms.toLowerCase()) {
//                 score++;
//                 alert('Thats right you are the best');
//                 correctanswer = true;
//                 break;
//             }
//         }
//         j++;  
//     }
    
// }
