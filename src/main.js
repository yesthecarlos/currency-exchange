import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Exchanger from "./exchanger.js";

$(document).ready(function() {
  $("#exchangeButton").click(function(event) {
    event.preventDefault();
    clear();
    Exchanger.getUSDRates()
      .then(function(response) {
        setCurrencyMultiplier(response); 
      });
  });
});

function clear(){
  $("#result").empty();
}

async function setCurrencyMultiplier(response) {
  let multiplier;
  let input = Number($("#dollarAmount").val());
  await Exchanger.getUSDRates();
  if ($("#currency").val() === "USD"){
    multiplier = response.conversion_rates.USD;
    let result = input * multiplier;
    $("#result").append(result);
  } else if ($("#currency").val() === "EUR") {
    multiplier = response.conversion_rates.EUR;
    let result = input * multiplier;
    $("#result").append(result);
  } else if ($("#currency").val() === "JPY") {
    multiplier = response.conversion_rates.JPY;
    let result = input * multiplier;
    $("#result").append(result);
  } else if ($("#currency").val() === "MXN") {
    multiplier = response.conversion_rates.MXN;
    let result = input * multiplier;
    $("#result").append(result);
  }
  return multiplier;
  
}