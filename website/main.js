"use strict";
let sumMarks = 0

function sumMarksEge (firstTest, secondTest, thirdTest){
        sumMarks = firstTest + secondTest + thirdTest
        if (sumMarks> 300 || sumMarks <= 0) {
          return 'Pizdets'
        } else {
            return sumMarks
        }
    };


console.log(sumMarksEge(0, 1, 0));