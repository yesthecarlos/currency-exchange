import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Exchanger from "./exchanger.js";

function clear(){
  $("#result").empty();
}

function currencyChoice(response) {
  let converted = 0
  if ($("#currency") === "USD"){
    converted = response.conversion_rates.USD.val();
  } else if ($("#currency") === "EUR") {
    converted = response.conversion_rates.EUR;
  } else if ($("#currency") === "JPY") {
    converted = response.conversion_rates.JPY;
  } else if ($("#currency") === "MXN") {
    converted = response.conversion_rates.MXN;
    }
    return converted;
  }

function buildPage(response, converted){
  if (response){
    currencyChoice();
    let input = $("#dollarAmount").val();
    $("#result").append(input * converted);
  } else {
    $("#errors").text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $("#exchangeButton").click(function(event) {
    event.preventDefault();
    clear();
    Exchanger.exchanger()
      .then(function(response){
        buildPage(response);
      });
  });
});