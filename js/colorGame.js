

let qtyColors = 6
let qtyI= 5

let colors = generateRandomColors(qtyColors)


let pickedColor = colors[pickColor([qtyI])]

let colorDisplay = document.querySelector("#colorDisplay")

let divStripe= document.getElementById("stripe")

let messageDisplay=document.querySelector("#message")

let cuadrados = document.querySelectorAll(".square")

let buttonReset= document.querySelector("#reset")

let buttonHard= document.querySelector("#hard")

let buttonEasy= document.querySelector("#easy")

function pickColor(qtyI){
let random = Math.random()*qtyI
let redondeo= Math.round(random)

return (redondeo)

}


console.log(divStripe)


//Recorremos los cuadrados
function game (){
    colorDisplay.innerHTML= pickedColor

    buttonReset.addEventListener("click", function(){
        newGame()
recorrerCuadrados()
         })
   

         buttonHard.addEventListener("click", function(){
             console.log("hola")
            buttonHard.classList.add("selected")
            buttonEasy.classList.remove("selected")
 
            qtyColors=6
            qtyI=5
         newGame()
         recorrerCuadrados()
        })

         buttonEasy.addEventListener("click", function(){
            buttonEasy.classList.add("selected")
            buttonHard.classList.remove("selected")
            qtyColors= 3
            qtyI=2
        newGame()
    recorrerCuadrados()
   

        })

            recorrerCuadrados()
    
} game()
 


//cambia el color
function changeColors (color, qtyColors){
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



} 

function recorrerCuadrados(){

    for(let i = 0; i<cuadrados.length ;i++){
          if(colors[i]!==undefined){
              cuadrados[i].style.backgroundColor=colors[i] 
              cuadrados[i].classList.remove("hidden")
          }
          else{
  
              cuadrados[i].classList.add("hidden")
          }
          
          cuadrados[i].addEventListener("click", function(){
  
            let clickedColor= this.style.backgroundColor
            if(clickedColor == pickedColor){
 
             messageDisplay.textContent="Correcto!!"
             

             document.querySelector("h1").style.color = pickedColor

                divStripe.style.color=pickedColor

                 changeColors(clickedColor,qtyColors)
                 buttonReset.innerHTML="Play Again"

         } else {

             this.style.backgroundColor="#232323"
 
             messageDisplay.textContent="Try Again"
          
         }
     
     }) 
  
  }
}






























 
