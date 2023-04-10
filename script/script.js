const sonido_btn_comun = new Audio("./multimedia/sonidos/btn.wav")
const sonido_resultado = new Audio("./multimedia/sonidos/resultado.wav")
const sonido_clear = new Audio ("./multimedia/sonidos/clear.wav")

let display = document.getElementById("display")


let btn = document.getElementsByClassName("btn")
let btn_array = Array.from(btn)


//////NUMEROS//////

btn_array.forEach(boton => {
    boton.addEventListener("click" , ()=>{
        sonido_btn_comun.play()
        sonido_btn_comun.currentTime = 0

        btn = boton.value
        console.log("Boton presionado:" , btn)

        display.value += boton.value

        // display.value = new Intl.NumberFormat().format(display.value)
        
        console.log("DISPLAY:" , display.value)
    })
})


//////OPERADORES//////

let btn_operador = document.getElementsByClassName("btn__operador")

let btn_array_operador = Array.from(btn_operador)

btn_array_operador.forEach(boton => {
    boton.addEventListener("click" , ()=>{
        btn_operador = boton.value

        if(display.value[display.value.length-1] == btn_operador || display.value == ""){ //SI EL ÚLTIMO CARACTER DEL DISPLAY ES UN OPERADOR, NO AGREGA EL OPERADOR.

        }
        else{
            sonido_btn_comun.play()
            sonido_btn_comun.currentTime = 0
            display.value += btn_operador //SINO SI
        }

    })
})


//////BORRAR///////

let btn_clear = document.getElementById("btn_clear")

let form = document.getElementById("calculadora")

btn_clear.addEventListener("click" , ()=>{
    clear();
})

function clear(){
    if(display.value != ""){
        sonido_clear.play()
        sonido_clear.currentTime = 0
    }

    form.reset()
}


//////IGUAL///////

let resultado = []
let btn_resultado = document.getElementById("btn_resultado")
let visor = document.getElementById("display")

btn_resultado.addEventListener("click" , ()=>{
    resolver();
})

function resolver(){
    if(display.value != ""){
        sonido_resultado.play()
        sonido_resultado.currentTime = 0
        display.value = eval(display.value)
    
        visor.value = parseFloat(display.value)
    
        if(isNaN(visor.value)){
            visor.value = "";
        }
    
        resultado.push(visor.value)
        
        console.log("RESULTADO:" , visor.value)
    }
}

/////// TECLADO ///////

document.addEventListener("keypress" , (e) =>{
    let tecla = e.key
    
    if(tecla == 0 || tecla == 1 || tecla == 2 || tecla == 3 || tecla == 4 || tecla == 5 || tecla == 6 || tecla == 7 || tecla == 8 || tecla == 9){
        sonido_btn_comun.play()
        sonido_btn_comun.currentTime = 0
        tecla = parseInt(tecla)
        display.value += tecla
    }

    else if(tecla == "/" || tecla == "*"  || tecla == "-" || tecla == "+"){

        if(display.value[display.value.length-1] == tecla || display.value == ""){ //SI EL ÚLTIMO CARACTER DEL DISPLAY ES UN OPERADOR, NO AGREGA EL OPERADOR.
        }
        else{
            sonido_btn_comun.play()
            sonido_btn_comun.currentTime = 0
            display.value += tecla //SINO SI
        }
    }

    else if(tecla == "Enter" && display.value != ""){

            sonido_resultado.play()
            sonido_resultado.currentTime = 0
    
            display.value = eval(display.value)
            visor.value = parseFloat(display.value)
    
            if(isNaN(visor.value)){
                visor.value = "";
            }
            
            resultado.push(visor.value)
            console.log(display.value)
            console.log("RESULTADO:" , visor.value)

        
    }

})

