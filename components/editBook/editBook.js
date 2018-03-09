

$(document).ready(function() {

    $('.preview-btn').click(function() {  // this code is for performing click on hidden browse buttons....
        $('.show-file').click();
    });

    // code for book upload.....
    $('.book-btn').click(function() {
        $('.upload-book').click();
    });
   

    // CODE FOR RADIO BUTTON/......toggle effects with price option...
    // $(".paid-book").change(function() {
    //     if($(".free-book").prop("checked", true)) {
    //         $(".free-book").prop("checked", false);
    //     }

    //     if($(".free-book").prop("checked", false)) {
    //         $(".free-book").prop("checked", true);
    //     }
    // })

     $('.paid-book').change(function() {
         $('#price').prop('disabled', false);
     })

     $('.free-book').change(function() {
        $('#price').prop('disabled', true);
    });
     

    // CODE FOR SUBMIT BUTTON////.......
    $('.add-form').submit(function() {
        var count = 0;
        var flag = 0;
        $('.req').each(function(index, element) {
            if($(element).val() === "") {
                 flag++;
                 console.log('its flag',flag);
            }
        });

        console.log($('.show-file').val());

        if(flag >= 1) {
            swal("Input fields are empty", {
                buttons: ["Continue to fill", true],
              });
              event.preventDefault();
              return true
        }
        
        
        // this is for checkbox and price......
        if ($(".paid-book").is(":checked")) {
            let temp = $(".price-option").val();
            if(temp === ""){
                swal("Fill the price option!");
                event.preventDefault();
                return true
            }
            console.log('its for price option');
            console.log(temp);
         }
    });

});


//reset is pending/.....