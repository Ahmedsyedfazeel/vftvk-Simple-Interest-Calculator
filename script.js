function compute() {
    var principal = document.getElementById("principal").value;

    if(principal == ""){
        alert("Please enter the positive number");
        principal.focus();
        return false;
    }
    if(principal <= 0){
        alert("Please enter the positive number");
        principal.focus();
        return false;
    }
    //Get the values and calculate 
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var yearInTheFuture = new Date().getFullYear()+parseInt(years);
    
    
    
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark> "+rate+"% </mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+yearInTheFuture+"</mark>\<br\>"
    
    //Create the Interest text
    
}

//update ther ate value
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}




