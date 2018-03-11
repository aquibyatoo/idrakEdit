// THIS CODE IS FOR ADD NEW CATEGORY PAGE.........

$(document).ready(function() {

    //code for save button ..... save category
    $('.category-button').click(function() {
        if($('.category-input').val() === "") {
            swal("Check the category name!");
        }else {
                    var title = document.getElementById('category-input').value;
                    console.log("its title.....",title)
                    axios.post('/admin' + '/categories/add', {
                       title : title
                    }).then(function (response) {

                            if (response.data.Response === "OK" && response.status === 200) {
                                var res = response;

                                var table = document.getElementById("table");
                                table.innerHTML = table.innerHTML + '<tr id="' + res.data.id + '"><td>' + res.data.title + '</td><td>0</td><td><button type="button" onclick="del(' + '\'' + res.data.id + '\'' + ')" class="button">Delete</button></td></tr>';
                                swal("Added!", "Your Category has been added.", "success");
                                document.getElementById("category-input").value = "";
                            }
                        }).catch(function (error) {
                        console.log(JSON.stringify(error));
                        sweetAlert("Oops...", "Something went wrong!" + '\n' +
                            "Please check your Network Settings", "error");

                    });



        }

    });




} );
