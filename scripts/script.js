
function calcBMR(){
    var myAge = document.getElementById("age").value;
    var myHeight = document.getElementById("height").value;
    var myWeight = document.getElementById("weight").value;
    
    var gender = document.getElementsByName('sexname');
    //var activity = document.getElementsByName('act');
    var bmr;
    if(document.getElementById('male').checked){
        bmr = 88.362 + (13.397 * myWeight) + (4.799*myHeight) - (5.677 * myAge);
    }else if(document.getElementById('female').checked){
        bmr = 447.593 + (9.247 * myWeight) + (3.098*myHeight) - (4.330 * myAge);
    }
    document.getElementById('score').value = Math.floor(bmr);
    //alert(bmr);


}