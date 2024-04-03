function addC(){
    var a = parseInt(document.getElementById("text1").value);
    var b = parseInt(document.getElementById("text2").value);
    var result = a+b;
    document.getElementById("res").value=result;
}

function diffC(){
    var a = parseInt(document.getElementById("text11").value);
    var b = parseInt(document.getElementById("text21").value);
    var result = a-b;
    document.getElementById("res1").value=result;
}

function productC(){
    var a = parseInt(document.getElementById("text12").value);
    var b = parseInt(document.getElementById("text22").value);
    var result = a*b;
    document.getElementById("res2").value=result;
}

function divC(){
    var a = parseInt(document.getElementById("text13").value);
    var b= Math.sqrt(a);
    document.getElementById("res3").value=b;
}
