// THIS CODE IS FOR ADD NEW CATEGORY PAGE.........
 
$(document).ready(function() {
    let table = $('#type-table').DataTable( {
        data: [],
        columns: [
            { data: "title" },
            { data: "author" },
            {
                render: function() {
                    return `<div class="ui submit button type__button-del">
                            <a href="/admin/edit?id=`+ arguments[2].id + `">Delete</a>
                            </div>`;
            }}
        ]
    });

    // axios call.....
    //offset = 0;
    let fetchData = function(offset) {
        
        axios.get('http://localhost:3000/admin' + '/booklist?offset=' + offset)
                .then(function (response) {
                    data = response.data.data;
                    //let dataArr = JSON.stringify(data);
                    console.log("jason data.....",data);
                    //console.log("its after stringfY",dataArr);
                    table.rows.add(data).draw();

                    if (data.length === 30) {
                        setTimeout(function () {
                            fetchData(offset + 1);
                        }, 5000);
                    }
                
                })
                .catch(function (error) {
                    console.log("Error");
                });
    }

    fetchData(0);  // function call....

    // code for save button ..... save category
    $('.type__button').click(function() {
        //alert('save button clicked');

        var check = $('.type__input').val();

        // if($('.type__input').val() === "") {
        //     swal("Enter the type name!");
        // }

        //alert(temp);
    })



} );