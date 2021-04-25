import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Exchanger from "./exchanger.js";

function clear(){
  $("#result").empty();
}

function currencyChoice(response) {
  let converted;
  if ($("#currency").val() === "USD"){
    converted = response.conversion_rates.USD;
  } else if ($("#currency").val() === "EUR") {
    converted = response.conversion_rates.EUR;
  } else if ($("#currency").val() === "JPY") {
    converted = response.conversion_rates.JPY;
  } else if ($("#currency").val() === "MXN") {
    converted = response.conversion_rates.MXN;
  }
  // console.log(converted)
  return converted;
}

function buildPage(response, converted){
  if (response){
    currencyChoice(converted);
    let input = $("#dollarAmount").val();
    $("#result").append(input * converted);
  } else {
    $("#errors").text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $("#exchangeButton").click(function(event) {
    let converted = $("#currency");
    event.preventDefault();
    clear();
    Exchanger.exchanger()
      .then(function(response){
        buildPage(response, converted);
      });
  });
});