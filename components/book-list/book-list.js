// THIS CODE OS FOR BOOK LIST PAGE.........
 
$(document).ready(function() {
   let table = $('#table-book-list').DataTable( {
        data: [],
        columns: [
            { data: "title" },
            { data: "author" },
            { data: "language" },
            { data: "edition" },
            { data: "published" },
            {
                render: function() {
                    return `<div class="ui submit button edit-button">
                            <a href="/admin/edit?id=`+ arguments[2].id + `">Edit</a>
                            </div>`;
            }}
        ]
    } );

    // axios call.....
    //offset = 0;
    let fetchData = function(offset) {
        console.log("keak aasun ")
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

    fetchData(0);
} );
    

