let colors = ["rgb(240, 14, 128)", "rgb(100, 30, 160)", "rgb(100, 100, 100)", "rgb(30, 240, 98)", "rgb(73, 29, 99)", "rgb(40, 2, 222)"]


//devuelve un color al azar de nuetros arreglo de colores
let pickedColor = pickColor()
//toma el span de el titulo
let colorDisplay = document.querySelector("#colorDisplay")
//mensaje que expresa si es correcto o incorrecto
let messageDisplay=document.querySelector("#message")
//toma los cuadros
let cuadrados = document.querySelectorAll(".square")


//Inserta un color en el span del titulo
colorDisplay.innerHTML= pickedColor


//Recorremos los cuadrados
    for(let i = 0; i<cuadrados.length ;i++){
      
       //le asigana un color a cada cuadrado[i]
        cuadrados[i].style.backgroundColor=colors[i]

        //funcion que se activa con el click de un cuadrado determinado
        cuadrados[i].addEventListener("click", function() {

               // toma el color inicial del cuadrado
           let clickedColor= this.style.backgroundColor
       
            //si el valor inicial es igaul al color a adivinar, entonces...
           if(clickedColor == pickedColor){
               //Nos muestra el correcto
            messageDisplay.textContent="Correcto!!"
            //cambia el titulo de color
            document.querySelector("h1").style.color = clickedColor

            //cambia de color los cuadrados, para el color correcto
                changeColors(clickedColor)
              
             

        } else {

            //si elegis mal, el cuadrado se vuelve eel color del fondo 
            // y te muestra el texto de try again
            this.style.backgroundColor=" #232323";
            messageDisplay.textContent=("try again")
        }
    
    })

}


//cambia el color
function changeColors (color){
    for(let i = 0; i<cuadrados.length ;i++){

        cuadrados[i].style.backgroundColor = color
    }
}

//crea un color random al azar
function pickColor(){

    let random = Math.random()*5
    let random2 = Math.round(random)


  return colors[random2]

}
 


 function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
   
    console.log(letras[numero])
	return letras[numero];
                                                   
} generarLetra()



// function colorHEX(){
// 	var coolor = "";
// 	for(let i=0;i<6;i++){
// 		coolor = coolor + generarLetra() ;
// 	}
// console.log(coolor)
// 	return "#" + coolor;
// } colorHEX()


let array= []

function generateRandomColors(numero){
 
    for(let i= 0; i<numero.length;i++){

 array.push(numero[i])

console-log(numero[i])

    }

    console.log(array)

   return array

}
generateRandomColors(6)




























 
//  function randomColor(){

//     let random1 = Math.random()*255
//     let n1 = Math.round(random1)

//     let random2 = Math.random()*255
//     let n2=Math.round(random2)

//     let random3 = Math.random()*255
//     let n3= Math.round(random3)


    
// return (n1, n2, n3)


//  }  randomColor()