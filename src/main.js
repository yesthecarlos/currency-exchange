import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
  let input = Number($("#dollarAmount").val());
  await Exchanger.getUSDRates();
  if (response.result === "success") {
    if ($("#currency").val() === "USD"){
      let result = input * response.conversion_rates.USD;
      $("#result").append(result);
    } else if ($("#currency").val() === "EUR") {
      let result = input * response.conversion_rates.EUR;
      $("#result").append(result);
    } else if ($("#currency").val() === "JPY") {
      let result = input * response.conversion_rates.JPY;
      $("#result").append(result);
    } else if ($("#currency").val() === "MXN") {
      let result = input * response.conversion_rates.MXN;
      $("#result").append(result);
    } else if ($("#currency").val() === "KRW") {
      let result = input * response.conversion_rates.KRW;
      $("#result").append(result);
    } else if ($("#currency").val() === "CAD") {
      let result = input * response.conversion_rates.CAD;
      $("#result").append(result);
    }
    return;
  
  } else {
    $("#errors").append(`There was an error: ${response['error-type']}`);
  }
}