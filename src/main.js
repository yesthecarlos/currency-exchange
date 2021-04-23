import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Exchanger from "./exchanger.js";

function clear(){
  $("#result").empty();
}

function buildPage(response){
  if (response){
    let input = $("#dollarAmount").val();
    let currency = $("#currency").val();
    $("#result").append(input * response.conversion_rates.currency);
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
      })
  })
})