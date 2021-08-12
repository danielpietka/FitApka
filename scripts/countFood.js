
/*const searchFunTable = () =>{
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
*/

//filter elements
const searchFunElements = () =>{
    var input = document.getElementById("searchInput")
    input.addEventListener("input", myFunction);

    function myFunction(e){
        var filter = e.target.value.toUpperCase();

        var list = document.getElementById("foodCards");
        var divs = list.getElementsByClassName("cards");

        for(var i = 0; i < divs.length; i++){
            var a = divs[i].getElementsByTagName("b")[0];

            if(a){
                if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
                    divs[i].style.display = "";
                }else {
                    divs[i].style.display = "none";
                }
            }
        }
    }
}

/*$(window).ready(function(){
    var items = [];

    $("#tableList tbody tr").on("click", function() {
        var newTr = $(this).closest("tr").clone();
        items.push(newTr);
        newTr.appendTo($("#tableCount"));
        console.log(tableCount);
    });
    
    // $("#tableCount tbody tr").on("click", function() {
    //     $(this).closest("tr").remove();
    // });

    
});*/

const addButton = () => {
    var name = document.getElementById('name').innerHTML;
    var kcal = parseFloat($("#kcal").text(), 10);
    var protein = parseFloat($("#protein").text(), 10);
    var carbs = parseFloat($("#carbs").text(), 10);
    var fat = parseFloat($("#fat").text(), 10);

    var rowCnt = foodTable.rows.length;    // get the number of rows.
        var tr = foodTable.insertRow(rowCnt); // table row.
        tr = foodTable.insertRow(rowCnt);
    
    for(var i = 0; i < 6; i++){
        var td = document.createElement('td');
        td = tr.insertCell(i);

        if(i == 0){
            //add remove button
            var button = document.createElement('input');
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');
            button.setAttribute('onclick', 'removeRow(this)');
            td.appendChild(button);
        }else{
            var ele = document.createElement('td')
            switch(i){
                case 1:
                    var nameText = name.;
                    td.appendChild(nameText);
            }
        }
    }

    console.log(kcal +" "+ protein +" "+ carbs +" " + fat + " " + name);
}

const removeRow = () => {
    return 0;
}