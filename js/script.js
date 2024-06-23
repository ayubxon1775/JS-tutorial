   
  

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

let number = 5.6; //DAta type number
// console.log(-8 / 0);// Infinity
// console.log("ayub"/8);// NaN 

   // String
const name = "ayubxon";

   // Boolean
const isMerried = false;
const isCircleEarth = true;

    // Null yoq o'zgaruvchi
// console.log(namsj);

   // Undefined
let und;
// console.log(und);


   // Object
const thief = {
// key: value
    age: 23,
    jacket: "black",
    isLong: false,
}

// console.log(thief.jacket);
// console.log(thief["jacket"]);

    // Array
//                0        1        2     3   index raqamlari
const colors = ["red", "black", "green", 10 ]
// console.log(colors[0]);


        // 5-dars Foydalanuvchi bilan aloqa
// const place = confirm("are you here");
// console.log(place);

// const currentPlace = prompt("where are you", "ism");
// console.log(typeof currentPlace);

// const age = +prompt("How old are you", "18")
// console.log( typeof age);

const favouriteColor = [];

// favouriteColor[0] = prompt("1", "")
// favouriteColor[1] = prompt("2", "")
// favouriteColor[2] = prompt("3", "")

// console.log(typeof favouriteColor);

      // 6-dars Interpolyatsiy

// const chanel = prompt('whats your youtube chanel', "");
// console.log(`https://youtube.com/${chanel}`);

const user = 'Ayubxon'
const job = 'web developer'

// console.log(`user name ${user}`, `job ${job}`);

// const client = prompt("Hello world");
// console.log(client);

      // 7-dars Operatorlar

// console.log(6 +  '9');

// incr , decr

let incr = 10;
let decr = 10;

// console.log(++incr);
// console.log(--decr);

// console.log(10 % 3);

// console.log(5 * 5 === '25');

// && = va
// || = yoki

const  isAge = true;
const isClose = true;
const isChecked = false;

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