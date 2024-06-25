   
  

   //  2-dars Veriable

// let number = 10;
// const borderColor = "red";
// console.log(number);

// number = 20
// console.log(number);
// // borderColor = "blue"

// //Old version
// console.log(name);

// var name 


//      3-dars Qat'iy Rejim

// 
// "use strict";
// var name = "ayubxon"
// console.log(name);

// name = "ayubxon";
// console.log(name);
// 

//         4-dars   Data types Primitive

// let number = 5.6; //DAta type number
// console.log(-8 / 0);// Infinity
// console.log("ayub"/8);// NaN 

   // String
// const name = "ayubxon";

//    // Boolean
// const isMerried = false;
// const isCircleEarth = true;

    // Null yoq o'zgaruvchi
// console.log(namsj);

   // Undefined
// let und;
// console.log(und);


   // Object
// const thief = {
// // key: value
//     age: 23,
//     jacket: "black",
//     isLong: false,
// }

// console.log(thief.jacket);
// console.log(thief["jacket"]);

    // Array
//                0        1        2     3   index raqamlari
// const colors = ["red", "black", "green", 10 ]
// console.log(colors[0]);


        // 5-dars Foydalanuvchi bilan aloqa
// const place = confirm("are you here");
// console.log(place);

// const currentPlace = prompt("where are you", "ism");
// console.log(typeof currentPlace);

// const age = +prompt("How old are you", "18")
// console.log( typeof age);

// const favouriteColor = [];

// favouriteColor[0] = prompt("1", "")
// favouriteColor[1] = prompt("2", "")
// favouriteColor[2] = prompt("3", "")

// console.log(typeof favouriteColor);

      // 6-dars Interpolyatsiy

// const chanel = prompt('whats your youtube chanel', "");
// console.log(`https://youtube.com/${chanel}`);

// const user = 'Ayubxon'
// const job = 'web developer'

// console.log(`user name ${user}`, `job ${job}`);

// const client = prompt("Hello world");
// console.log(client);

      // 7-dars Operatorlar

// console.log(6 +  '9');

// incr , decr

// let incr = 10;
// let decr = 10;

// console.log(++incr);
// console.log(--decr);

// console.log(10 % 3);

// console.log(5 * 5 === '25');

// && = va
// || = yoki

// const  isAge = true;
// const isClose = true;
// const isChecked = false;

// console.log(isAge && isClose && isChecked);
// console.log(isAge || isClose || isChecked);

// console.log(2 + 2 * 2 !== 6);


   // 9-dars Amaliyot

// let numberOfSeries = +prompt('Nechta serial kordingiz', "");
// const seriesDB = {
//    // count : numberOfSeries,
//    series: {},
//    actors : {},
//    genres : [],
//    private: false
// }

// const a = prompt("Oxirgi ko'rgan serialingiz");
// const b = prompt("Nechi baho berdingiz");
// const c = prompt("Oxirgi ko'rgan serialingiz");
// const d = prompt("Nechi baho berdingiz");

// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// console.log(seriesDB);


   // 11-dars Sikl

let countNumber = 1;
// first sikl
// while(countNumber <= 20){
   // console.log(countNumber);
   // countNumber++
// }
// second sikl
// do {
//    console.log(countNumber);
//    countNumber++
// }while (countNumber <=10)

//  three sikl

// for(let i = 1; i <= 17; i++){
//    if(i === 8){
//       // break
//       continue
//    }
//    console.log(i);
// }

// 12-dars Amaliyot

// let numberOfSeries = +prompt('Nechta serial kordingiz', "");



// const seriesDB = {
//    count : numberOfSeries,
//    series: {},
//    actors : {},
//    genres : [],
//    private: false
// }

// for(let i = 0; i < 2; i++){
//    const a = prompt("Oxirgi ko'rgan serialingiz");
//    const b = prompt("Nechi baho berdingiz");

//    if (a != null && b != "" && a != "" && b != "") {
//       seriesDB.series[a] = b;
//       console.log("done");
//    }else {
//       console.log("error");
//       i--
//    }
   
// }
// if(seriesDB.count < 5){
//    console.log("Kam serial ko'ribsiz");
// }else if(seriesDB.count > 5 && seriesDB.count < 10 ){
//    console.log("siz klassik tomoshabin ekansiz");
// }else if (seriesDB.count > 10){
//    console.log("Siz serialchi zvezda ekansiz");
// }else{
//    console.log("error");
// }

// console.log(seriesDB);


   // 13-dars Funksiyalar

// console.log("Open modal");
// let age = 30
//    // Decloreation function
// function Myfunc(name, surname){
//    let age = 20 
//    console.log(`${name} ${surname}`);
//    console.log(age);
// }
// Myfunc("ayubxon", "Axmatxonov");
// console.log(age);

//    // Expression function

//    const logger = function(){
//       console.log("hello world");
//    }
//    logger()

//    // Error function

// const calc = (a) =>  {
//    console.log("!");
//    return a
// }
// calc()

   // 14-dars Methodlar va Hususiyatlar

// const user = "Ayubxon";
// console.log(user[2]);

// console.log(user.toUpperCase());
// console.log(user.toLowerCase());
// console.log(user);

// const greeting = 'Hello world';
// console.log(greeting.indexOf("i"));
// console.log(greeting.slice(-1));
// console.log(greeting.substring(5));
// console.log(greeting.substr(6,5));

// const num = 8.3;
// console.log(Math.round(num));

// const borderWidth = "13.8px";
// console.log(parseInt(borderWidth));
// console.log(parseFloat(borderWidth));

   //15-dars Amaliyot



// let numberOfSeries;

// function startApp(){
// numberOfSeries = +prompt('Nechta serial kordingiz', "");

// while (
//  numberOfSeries == "" ||
//  numberOfSeries == null ||
//   isNaN(numberOfSeries)
// ) {
//     numberOfSeries = +prompt('Nechta serial kordingiz', "");
// }
// }
// startApp();

// const seriesDB = {
//    count : numberOfSeries,
//    series: {},
//    actors : {},
//    genres : [],
//    private: false
// }

// function rememberMySeries(){
//    for(let i = 0; i < 2; i++){
//       const a = prompt("Oxirgi ko'rgan serialingiz");
//       const b = prompt("Nechi baho berdingiz");
   
//       if (a != null && b != "" && a != "" && b != "") {
//          seriesDB.series[a] = b;
//          console.log("done");
//       }else {
//          console.log("error");
//          i--
//       }
      
//    }
// }
// // rememberMySeries()

// function detectLevelSeries(){
//    if(seriesDB.count < 5){
//       console.log("Kam serial ko'ribsiz");
//    }else if(seriesDB.count > 5 && seriesDB.count < 10 ){
//       console.log("siz klassik tomoshabin ekansiz");
//    }else if (seriesDB.count > 10){
//       console.log("Siz serialchi zvezda ekansiz");
//    }else{
//       console.log("error");
//    }
// }
// detectLevelSeries()

// function showDB(hidden){
//    if(!hidden){
//       console.log(seriesDB);
//    }
// }
// showDB(seriesDB.private);

// function writeGenres(){
//    for (let i = 0; i <= 2; i++){
//       const genre = prompt(`Yaxshi korgan janringiz ${i + 1}`);
//       seriesDB.genres[i] = genre
//    }
// }
// writeGenres()

      // 16-dars Callback funksiya
// function Myfunc(cb) {
//    setTimeout(() => {
//       console.log(5);
//       cb();
//    },3000)
// }
// Myfunc(edu)

// function edu(subject, callback){
//    console.log(`I wanna teach ${subject}`);
//    callback();
// }
// function done(){
//    console.log("That's great");
// }
// edu("JavaScript", done);

   // 17-dars Object DEstruptizatsiya

// const theif =  {
//    jacket: "black",
//    height: 1.7,
//    colors: {
//       hair: "gray",
//       style: "curley",
//    },
//    howOut: function() {
//       console.log("Fast with help doors");
//    },
// };
// theif.howOut();

// const { hair, style } = theif.colors;

// console.log(hair);
// console.log(style);

// let count = 0;

// for (let key in theif){
   // if(typeof theif [key] === "object"){
   //    for (let i in theif[key]) {
   //       console.log(`Property ${i} has value ${theif[key][i]}`);
   //    }
   // }else {
   //    console.log(`Property ${key} has value ${theif[key]}`);
   // }
// }

   // 18-dars 


   const numbers = [5, 3, 20, 6, 2, 8, 11, 9, 16]
console.log(numbers.sort((a , b) => a - b ));



// arr[99] = 0
// console.log(arr);

// arr.forEach(function(item, index, arr){
//    console.log(`${index}: ${item} into arr ${arr}`);
// })

// arr.pop();
// arr.push(6)

// arr.shift();
// arr.unshift(0)

// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
// }

// for (let value of arr){
//    console.log(value);
// }

// const movies = prompt("What's your movies","");

// const allMovies = movies.split(", ")
// allMovies.sort()
// console.log(allMovies.join("- "));