let numbers = document.getElementById("inputtext");

let calculate = (number) =>{
    numbers.value += number;


}
 let result=()=>{
    try {
        numbers.value=eval(numbers.value);
    } 
    catch (err) {
        alert("Please Enter the valid number")
    }
 }

 let clr=()=> numbers.value = "";
 let del=()=> numbers.value=numbers.value.slice(0,-1);