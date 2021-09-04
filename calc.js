//Function to show the input
function dis(val) 

{ 
   
    document.getElementById("result").value+=val ;
   
} 

//Function to erase recent entry
function erase(){
   result.value = result.value.substr(0,result.value.length-1)
}

  

//Adding a feature that enables to evaluate using Enter key
var enter = document.getElementById("result"); 
enter.onkeyup = function(e){
if(e.keyCode == 13){
      solve();
 }
   }
//Function to evaluate the result
function solve() 

{ 

    var x = document.getElementById("result").value 
    var regExp = /[a-zA-Z]/g;
    var sub = x.substr(x.length-1,1);
    if(regExp.test(x) || x=="."||x=="+"||x=="-"||x=="/"||x=="*"||sub=="."||sub=="+"||sub=="-"||sub=="/"||sub=="*"){
        alert("Please enter valid numeric values to evaluate");
    }
    else{
    let y = eval(x) 

    document.getElementById("result").value = y ;
    }

} 


  

//function enabling clear button 

function clr() 

{ 

    document.getElementById("result").value = "" 

} 
// Functions for sin , cos and tan
function sin(){
    var curr = document.getElementById("result").value;
    curr = (curr*Math.PI)/180;
    if(curr==Math.PI || curr==2*Math.PI){
   document.getElementById("result").value = Math.round(Math.sin(curr));
    }
    else{
       document.getElementById("result").value = Math.sin(curr);
    }
}

function cos(){
    var curr = document.getElementById("result").value;
    curr = (curr*Math.PI)/180;
    if(curr==Math.PI/2 || curr==3*Math.PI/2){
   document.getElementById("result").value = Math.round(Math.cos(curr));
    }
    else{
       document.getElementById("result").value = Math.cos(curr);
    }
}
function tan(){
    var curr = document.getElementById("result").value;
    curr = (curr*Math.PI)/180;
    if(curr==Math.PI || curr==2*Math.PI){
   document.getElementById("result").value = Math.round(Math.tan(curr));
    }
    else{
       document.getElementById("result").value = Math.tan(curr);
    }
}