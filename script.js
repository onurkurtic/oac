var sliderVal;
var inputVal;

$("#slider").slider({
  range: "min",
  value: 25,
  min: 1,
  max: 100,
  //this gets a live reading of the value and prints it on the page
  slide: function(event, ui) {
    $("#slider-value").text(ui.value + "%");
  },
  //this updates the value of your hidden field when user stops dragging
  change: function(event, ui) {
    $("#rateToPost").attr("value", ui.value);
  }
});



$("#sales").on("keyup", function(){
    inputVal = $(this).val();
    calculate();
});

$("#slider").slider({
  change: function() {
      sliderVal = $("#slider").slider("option", "value");
      calculate();
  }
});


function calculate(){
  if (!sliderVal){
    var result = (inputVal * 25 / 100) + ((inputVal * 25 / 100)/2);
    $("#output").html(formatMoney(result));
    $("#result").html(formatMoney(result));
  } else {
    var result = (inputVal * sliderVal / 100) + ((inputVal * sliderVal / 100)/2);
    $("#output").html(formatMoney(result));
    $("#result").html(formatMoney(result));
  }
    
}

function formatMoney(num){
    return "$" + num
        .toFixed(2)
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};