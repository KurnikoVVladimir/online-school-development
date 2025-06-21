"use strict";

var listOfSales = ['TR2025', 'GDE2022', 'TRUEKRISLOH']

/*
Данная функция-конструкция позваляет удобно создавать объекты курсов
*/

function Cours (name, about, price){
  this.name = name;
  this.about = about;
  this.price = price;
}

function sale (cours, gottenTextOfSale){
    let curretPrice = cours.price, count = 0;
    for (let arg of listOfSales){
      if (gottenTextOfSale == arg) {
        return curretPrice / 2}
      else count = count + 1
    if (count == listOfSales.length) return curretPrice
}}

function sumMarksEge (firstTest, secondTest, thirdTest){
        let sumMarks = firstTest + secondTest + thirdTest;
        if (sumMarks> 300 || sumMarks <= 0) {
          return 'Pizdets'
        } else {
            return sumMarks
        }
    };

let coursOfMath = new Cours('Курс по математике', 'Это лучший курс по математике', 2000)
console.log(sale(coursOfMath, 'GDE2022'))


