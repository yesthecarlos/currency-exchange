import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Exchanger from "./exchanger.js";

$(document).ready(function() {
  $("#exchangeButton").click(function(event) {
    let multiplier = $("#currency");
    event.preventDefault();
    clear();
    Exchanger.getUSDRates()
      .then(function(response) {
        setCurrencyMultiplier(response); 
        buildPage(response, multiplier);
      });
  });
});

function clear(){
  $("#result").empty();
}

async function setCurrencyMultiplier(response) {
  let multiplier;
  await Exchanger.getUSDRates();
  if ($("#currency").val() === "USD"){
    multiplier = response.conversion_rates.USD;
  } else if ($("#currency").val() === "EUR") {
    multiplier = response.conversion_rates.EUR;
  } else if ($("#currency").val() === "JPY") {
    multiplier = response.conversion_rates.JPY;
  } else if ($("#currency").val() === "MXN") {
    multiplier = response.conversion_rates.MXN;
  }
  // console.log(converted)
  return multiplier;
}

async function buildPage(response, multiplier){
  if (response){
    setCurrencyMultiplier(response);
    let input = $("#dollarAmount").val();
    $("#result").append(input * multiplier);
  } else {
    $("#errors").text(`There was an error: ${response.message}`);
  }
}

