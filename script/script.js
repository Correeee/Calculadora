const sonido_btn_comun = new Audio("./multimedia/sonidos/btn.wav")
const sonido_resultado = new Audio("./multimedia/sonidos/resultado.wav")
const sonido_clear = new Audio ("./multimedia/sonidos/clear.wav")

let display = document.getElementById("display")


let btn = document.getElementsByClassName("btn")
let btn_array = Array.from(btn)


console.log("<-----Botones----->" , "\n" , ...btn_array)

btn_array.forEach(boton => {
    boton.addEventListener("click" , ()=>{
        sonido_btn_comun.play()

        btn = boton.value
        console.log("Boton presionado:" , btn)

        display.value += boton.value

        // display.value = new Intl.NumberFormat().format(display.value)
        
        console.log("DISPLAY:" , display.value)
    })
})


let btn_operador = document.getElementsByClassName("btn__operador")

let btn_array_operador = Array.from(btn_operador)

//////INTRODUCIR//////

btn_array_operador.forEach(boton => {
    boton.addEventListener("click" , ()=>{
        sonido_btn_comun.play()

        btn_operador = boton.value

        console.log(btn_operador)

        display.value += boton.value
        
    })
})


//////BORRAR///////

let btn_clear = document.getElementById("btn_clear")

btn_clear.addEventListener("click" , ()=>{
    sonido_clear.play()
    display.value = "";
})


//////IGUAL///////
let resultado = []
let btn_resultado = document.getElementById("btn_resultado")

btn_resultado.addEventListener("click" , ()=>{
    let visor = document.getElementById("display")
    sonido_resultado.play()
    display.value = eval(display.value)


    visor.value = parseFloat(display.value)

    if(isNaN(visor.value)){
        visor.value = "";
    }

    resultado.push(visor.value)
    
    console.log("RESULTADO:" , visor.value)
})


