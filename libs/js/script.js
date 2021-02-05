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

                $('postalCodeResults').toggle();
                $('#txtPostalCode').html(result['data'][0]['postalCode']);
                $('#txtCountry').html(result['data'][0]['countryCode']);
                $('#txtAdminName').html(result['data'][0]['adminName3']);
                $('#txtPlaceName').html(result['data'][0]['placeName']);
             

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // your error code
        }
    }); 


});