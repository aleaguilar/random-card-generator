/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomSuit = () => {
  let suits = ["diams", "hearts", "clubs", "spades"];
  let suitsIndex = Math.floor(Math.random() * suits.length); //Don't need to use the -1 because it can be zero
  return suits[suitsIndex];
};

let generateRandomNumber = () => {
  let number = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numberIndex = Math.floor(Math.random() * number.length);
  return number[numberIndex];
};
