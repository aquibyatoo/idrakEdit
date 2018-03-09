

$(document).ready(function() {
    console.log("its ready dom..");

    $('.preview-btn').click(function() {  
        $('.show-file').click();
    });

    $('.book-btn').click(function() {
        $('.upload-book').click();
    });
   

    if ($(".free-book").is(":checked")) {
        //console.log('its done');
     }

     $('.paid-book').change(function() {
         $('#price').prop('disabled', false);
     })

     $('.free-book').change(function() {
        $('#price').prop('disabled', true);
    });
     

    $('#configure').submit(function(event) {
        var count = 0;
        var flag = 0;
        $('.req').each(function(index, element) {
            if($(element).val() === "") {
                 flag++;
                 console.log('its flag',flag);
            }
        });

        console.log($('.show-file').val());
        console.log(event);
        if(flag >= 1) {
            swal("Input fields are empty", {
                buttons: ["Continue to fill", true],
              });
            //   event.preventDefault();
              return true;
        }
        
        
        if ($(".paid-book").is(":checked")) {
            let temp = $(".price-option").val();
            if(temp === ""){
                swal("Fill the price option!");
                // event.preventDefault();
                return true;
            }
            console.log('its for price option');
            console.log(temp);
         }
    });

});
