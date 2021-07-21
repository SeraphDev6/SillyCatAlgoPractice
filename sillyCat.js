
function sillyCat(){
    document.getElementById("print-div").innerHTML="";
    var n= parseInt(document.getElementById("num").value)
    for(var i=1;i<=n;i++){
        var output=""
        if(i%3==0){
            output+="Silly";
        }
        if(i%5==0){
            if(output!=""){output+=" ";}
            output+="Cat";
        }
        if(output==""){
            output="Not a Cat";
        }
        document.getElementById("print-div").innerHTML+=("<p>"+output+"</p>");
    }
}

function makeItBigger(){
    var arr=document.getElementById("arr-box").value.split(",");
    document.getElementById("print-div").innerHTML="";
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i])>-Infinity && arr[i]>0){
            arr[i]="big";
        }
    }
    document.getElementById("print-div").innerHTML+=`<p>${arr}</p>`;
}