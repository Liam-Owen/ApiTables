$('#button1').click(function() {

    $.ajax({
        url: "libs/php/postcodeLookup.php",
        type: 'POST',
        dataType: 'json',
        data: {
            postalCode: $('#postalCode').val(),
            
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('postalCodeResults').show();
                $('#txtPostalCode').html(result['data'][0]['postalCode']);
                $('#txtCountry').html(result['data'][0]['countryCode']);
                $('#txtPlaceName').html(result['data'][0]['placeName']);
             

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});