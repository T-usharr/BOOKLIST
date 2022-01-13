
var bn=document.querySelector(".submit")

var row=1;

bn.addEventListener("click",function(e){

    
    var tb=document.querySelector("#tab")
    var newrow=tb.insertRow(row)
    var cel1=newrow.insertCell(0);
    var cel2=newrow.insertCell(1);
    var cel3=newrow.insertCell(2);
    let t=document.querySelector("#Title_input").value
    let a=document.querySelector("#Author_input").value
    let p=document.querySelector("#price_input").value
    if(!t ||!a || !p){
        alert("Fill All Boxes")
        return;
    }
    cel1.innerHTML=t
    cel2.innerHTML=a
    cel3.innerHTML=p
    row++;


   


})

