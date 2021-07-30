
const searchFun = () =>{
    let filter = document.getElementById('searchInput').value.toUpperCase();
    let myTable = document.getElementById('tableList');
    let tr = myTable.getElementsByTagName('tr');

    for(var i = 0; i < tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textValue = td.textContent || td.innerHTML;

            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

$(window).ready(function(){
    var items = [];

    $("#tableList tbody tr").on("click", function() {
        var newTr = $(this).closest("tr").clone();
        items.push(newTr);
        newTr.appendTo($("#tableCount"));

    });
    
    // $("#tableCount tbody tr").on("click", function() {
    //     $(this).closest("tr").remove();
    // });

    
});

