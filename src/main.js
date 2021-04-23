import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Exchanger from "./exchanger.js";

function buildPage(response){
  if (response){
    $("#result").append(response.conversion_rates.USD);
  } else {
    $("#errors").text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $("#exchangeButton").click(function(event) {
    event.preventDefault();
    Exchanger.exchanger()
      .then(function(response){
        buildPage(response);
      })
  })
})