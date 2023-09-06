/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let red = [".com", ".net", ".com.ve"];

  for (let pro of pronoun) {
    for (let ad of adj) {
      for (let sust of noun) {
        for (let dns of red)
        console.log(pro+ad+sust+dns);
      }
    }
  }
  

