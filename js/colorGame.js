
let arrayDificult=["0", "1", "2", "3", "4", "5"]

let arrayEasy= ["0", "1", "2"]

let qtyColors = 6
let qtyI= 5

let colors = generateRandomColors(qtyColors)


let pickedColor = colors[pickColor([qtyI])]

let colorDisplay = document.querySelector("#colorDisplay")

let messageDisplay=document.querySelector("#message")

let cuadrados = document.querySelectorAll(".square")

let buttonReset= document.querySelector("#reset")

let buttonHard= document.querySelector("#hard")

let buttonEasy= document.querySelector("#easy")

function pickColor(qtyI){
let random = Math.random()*qtyI
let redondeo= Math.round(random)
console.log(redondeo)
return (redondeo)

}





//Recorremos los cuadrados
function game (){
    colorDisplay.innerHTML= pickedColor

    buttonReset.addEventListener("click", function(){
        newGame()
recorrerCuadrados()
         })
   

         buttonHard.addEventListener("click", function(){
            buttonHard.classList.add("selected")
            buttonEasy.classList.remove("selected")
            console.log("entre en hard")
            qtyColors=6
            qtyI=5
         newGame()
         recorrerCuadrados()
        })

         buttonEasy.addEventListener("click", function(){
             console.log("entre en easy")
            buttonEasy.classList.add("selected")
            buttonHard.classList.remove("selected")
            qtyColors= 3
            qtyI=2
        newGame()
    recorrerCuadrados()
   

        })

      

         //cuadrados y colores iniciales
            recorrerCuadrados()
    
} game()
 


//cambia el color
function changeColors (color){
    for(let i = 0; i<cuadrados.length ;i++){

        cuadrados[i].style.backgroundColor = color
    }
}

function generarNumero (numero){

    return (Math.random()*numero).toFixed(0)
}

function randomColors(){
let coolor= "("+generarNumero(255)+ ", " + generarNumero(255) + ", " + generarNumero(255)+ ")";

return "rgb" + coolor
}



function generateRandomColors(qty) {

    let array = []
    for(let i= 0; i<qty;i++){
 array.push(randomColors())

    }
   return array
}



function newGame() {

colors= generateRandomColors(qtyColors)
pickedColor = colors[pickColor([qtyI])]
colorDisplay.innerHTML= pickedColor
document.querySelector("h1").style.color = "white"    
buttonReset.innerHTML="New Colors"     
messageDisplay.textContent=""
console.log(pickedColor)

} 

function recorrerCuadrados(){

    for(let i = 0; i<cuadrados.length ;i++){
          if(colors[i]!==undefined){
              cuadrados[i].style.backgroundColor=colors[i]  
          } else{
              cuadrados[i].style.backgroundColor= "#232323"
          }
          
          cuadrados[i].addEventListener("click", function() {
  
             let clickedColor= this.style.backgroundColor
             if(clickedColor == pickedColor){
  
              messageDisplay.textContent="Correcto!!"
              document.querySelector("h1").style.color = pickedColor
                  changeColors(clickedColor)
                  buttonReset.innerHTML="Play Again"
          } else {
  
              this.style.backgroundColor=" #232323";
  
              messageDisplay.textContent=("try again")
          }
      
      })
  
  }
}






























 
