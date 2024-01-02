const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");
const arr = [
    {
        value: "",
        warning: "Please enter a valid number."
    },
    { 
        value: "0",
    warning: "Please enter a number greater than or equal to 1"
    },
    { 
        value: 4000,
        warning: "Please enter a number less than or equal to 3999"
        }
]
let warningColor = {
    border : "2px solid #ffadad",
    color : "#ffadad",
    backgroundColor : "#ffadad;"
 }
 let sucessColor = {
    color : "rgb(210, 201, 201)",
    bgColor: "rgb(74, 71, 71)",
    border : "3px solid rgb(210, 201, 201)"
 }
const romNumeralPattern = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], 
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10],
    ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
] 

button.onclick = ()=>{
   let res = "";
   for(let i = 0; i < arr.length; i++ ){
    
    if(input.value == arr[i].value){
        output.style.visibility = "visible"
        output.style.border = warningColor.border;
        output.style.color = warningColor.color;
        output.style.backgroundColor = warningColor.backgroundColor;
        return output.innerText = arr[i].warning;
    }
    else if (input.value < 4000 && input.value > 0){
        let numbered = Number(input.value);
            for (let j = 0; j <= numbered; j++){
                  let found =  romNumeralPattern.find(el=> 
                   numbered >= el[1] 
                  )
                  numbered -= found[1];
                  res += found[0];
                  j = 0;
            }
            output.style.visibility = "visible"
            output.style.border = sucessColor.border;
            output.style.color = sucessColor.color;
            output.style.backgroundColor = sucessColor.bgColor;
          return output.innerText = res;
    }
    else if(input.value >= 4000 && arr[i].value === 4000) {
        input.value = "";
        output.style.visibility = "visible"
        return output.innerText = arr[i].warning;
    }
   }
}