
const searchFunTable = () =>{
    let filter = document.getElementById('searchInput').value.toUpperCase();
    let myTable = document.getElementById('foodTable');
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

/*function addBtn(){
    var foodTable = document.getElementById("foodTable");
    var dietTable = document.getElementById("dietTable");
    var row = dietTable.insertRow(0);

    var name = row.insertCell(0);
    var kcal = row.insertCell(1);
    var prot = row.insertCell(2);
    var carb = row.insertCell(3);
    var fat = row.insertCell(4);
    var removeButton = row.insertCell(5);
}*/

$(document).ready(function(){
    var items = [];
    $("#foodTable tr").on("click", function(){
        var newTr = $(this).closest("tr").clone();
        removeButton = "<input type='button' value='Delete' class='deleteBtn'/>";
        
        $(".deleteBtn").click(function() {
            $(this).closest("tr").remove();
          });

        $(newTr).children("td:last").html("").html(removeButton);
        items.push(newTr);
        newTr.appendTo($("#dietTable"));
    });
})
