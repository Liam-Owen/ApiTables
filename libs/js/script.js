//Postal code searcher Api
$("#button1").click(function () {
  $.ajax({
    url: "libs/php/postcodeLookup.php",
    type: "POST",
    dataType: "json",
    data: {
      postalCode: $("#postalCode").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("postalCodeResults").toggle();
        $("#txtPostalCode").html(result["data"][0]["postalCode"]);
        $("#txtCountry").html(result["data"][0]["countryCode"]);
        $("#txtAdminName").html(result["data"][0]["adminName3"]);
        $("#txtPlaceName").html(result["data"][0]["placeName"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        jqXHR.status = 404;
        let errorMessage = jqXHR.status + ': ' + textStatus + ' - ' + errorThrown;
        alert (errorMessage)
    },
  });
});

//wiki api
$("#button2").click(function () {
  $.ajax({
    url: "libs/php/wikipedia.php",
    type: "POST",
    dataType: "json",
    data: {
      postalCode: $("#postalCodeTwo").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("wikiResults").toggle();
        $("#title").html(result["data"][0]["title"]);
        $("#topWikiLink").html(result["data"][0]["wikipediaUrl"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        jqXHR.status = 404;
        let errorMessage = jqXHR.status + ': ' + textStatus + ' - ' + errorThrown;
        alert (errorMessage)
    },
  });
});
//Ocean api
$("#button3").click(function () {
  $.ajax({
    url: "libs/php/ocean.php",
    type: "POST",
    dataType: "json",
    data: {
      latitude: $("#latitude").val(),
      longitude: $("#longitude").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#ocean").html(result["data"]["name"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        jqXHR.status = 404;
        let errorMessage = jqXHR.status + ': ' + textStatus + ' - ' + errorThrown;
        alert (errorMessage)
    },
  });
});
