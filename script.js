var unit=[" ","one","two", "three", "four", "five", "six", "seven", "eight","nine"];
var ten=[" ","ten","twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var tens=["ten","eleven", "twelve","thirteen", "fourteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen "];
function result(){ 
inp=parseInt(document.getElementById("input").value);
    var out=document.getElementById("output");
    var num=inp;
   if(num==0){
        out.innerHTML="zero";
    }
    else{
    var digt=Array.from(String(num),Number);
    const digt1=digt;
    console.log(digt);
    var i;
    const lent=digt1.length;
    if(lent>12){
        out.innerHTML="invalid input";
        }
    else{
    var p=[];
    for(i=0;digt.length>=3;i++){
        p[i]=digt.splice(digt.length-3,3);
        console.log("p["+i+"] is "+p[i]);
    }
    console.log("i is"+i+"digt is"+digt+"and length is"+digt.length);
    function sum(arrr){
        var add=0;
        for(var j=0;j<arrr.length;j++){
            add=add+arrr[j];
        }
        return add;
    }//end sum
    function method(arr){
        len=arr.length;
        switch(len){
            case 1:
            return unit[arr[0]];
            case 2:
            if(arr[0]==1){
                return tens[arr[1]];
            }
            else return ten[arr[0]]+" "+unit[arr[1]];
            case 3:
            if(arr[0]==0){
                if(arr[1]==1){
                return tens[arr[2]];
            }
            else return ten[arr[1]]+" "+unit[arr[2]];
            }
            else{
                if(arr[1]==1){
                return unit[arr[0]]+" hundred "+tens[arr[2]];
            }
            else return unit[arr[0]]+" hundred "+ten[arr[1]]+" "+unit[arr[2]];
            }
             }
             }//end method
        var x="";
        if(digt.length!=0){
            console.log("digt entered");
            var x=x+method(digt);
            console.log("digt executed");  
        if(i==1){
            x=x+" thousand ";
        }
        if(i==2){
            x=x+" million ";
        }
        if(i==3){
            x=x+" billion ";
        }
        }
        if((i==4)&&(sum(p[3])!=0)){
            console.log("p3 entered");
            x=x+method(p[3])+" billion ";
            console.log("p3 executed");
        }
        if((typeof p[2]!="undefined")&&(sum(p[2])!=0)){
            console.log("p2 entered");
            x=x+method(p[2])+" million ";
            console.log("p2 executed");
        }
        if((typeof p[1]!="undefined")&&(sum(p[1])!=0)){
            x=x+method(p[1])+" thousand ";
            console.log("p1 executed");
        }
        if((typeof p[0]!="undefined")&&(sum(p[0])!=0)){
            x=x+method(p[0]);
            console.log("p0 executed");
        }
        out.innerHTML=x;
        }
       }//end else
}//end result