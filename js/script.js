function ConvertRate() {

  var fromList = document.getElementById("ddlFromList");
  var toList = document.getElementById("ddlToList");
  var textbox = document.getElementById("txtConversion");
  var resultBox = document.getElementById("divResult");

  var fromRate = fromList.value;
  var toRate = toList.value;
  var valuetoConvert = textbox.value;

  var temp = valuetoConvert / fromRate;
  var result = temp * toRate;
  result = result.toFixed(2);

  resultBox.innerHTML = "";
  resultBox.innerHTML += result;

}

var objRate;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    objRate = JSON.parse(xhr.response);
  }
}
xhr.open("GET", "https://api.fixer.io/latest", false);
xhr.send(null);
//console.log(objRate);

var objForex = objRate.rates;
var currencyHTML = "";
var fromList = document.getElementById("ddlFromList");
var toList = document.getElementById("ddlToList");
for (var key in objForex) {
  fromList.innerHTML += "<option value=" + objForex[key] + ">" + key + "</option>";
  toList.innerHTML += "<option value=" + objForex[key] + ">" + key + "</option>";
}

document.getElementById("ddlFromList").onchange = function () {
  ConvertRate();
}

document.getElementById("ddlToList").onchange = function () {
  ConvertRate();
}

document.getElementById("txtConversion").onkeyup = function () {
  ConvertRate();
}

document.getElementById("txtConversion").onchange = function () {
  ConvertRate();
}
