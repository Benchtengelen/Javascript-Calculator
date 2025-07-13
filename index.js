let button = document.getElementsByTagName("button");
let screen = document.getElementsByClassName("screen")[0];
let count = document.getElementById("count");
let clean = document.getElementById("clean");




   for( var i =0; i<17; i++){
     if(i!=15 && i!=16){
        button[i].addEventListener("click",print);
     }
   }
   function print(){
      screen.value = screen.value + this.value;
   }

   count.addEventListener("click", counted);
   function counted(){
    screen.value = eval(screen.value);
   }
   clean.addEventListener("click", cleaned);
   function cleaned(){
    screen.value ="";
   }