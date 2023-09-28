//EJERCICIO2

function check_seguridad(text : string) :number {
    let arr : (string | number) [] = [] 
    for (let z=0 ; z<text.length; z++){
        if(text[z]=== "0" || text[z]=== "1" || text[z]=== "2" || text[z]=== "3" || text[z]=== "4" || text[z]=== "5" || text[z]=== "6" || text[z]=== "7" || text[z]=== "8" || text[z]=== "9")
            arr.push(parseInt(text[z]))
        else{
            arr.push(text[z])
        }
    }
    let seguridad : number = 0 
    let isnumber : boolean = false
    let isstring : boolean = false
    const caract_especiales = [".",",","!","?",":","-","_","@","etc"]
    //Si tiene una letra y un numero sumará 1
    arr.forEach((elem) => {
        if (typeof elem === "number"){
            isnumber =true
            
        }
        else if (typeof elem === "string"){
            isstring =true
        }

    })
    if(isnumber && isstring){
        seguridad=+1
    }
    //Si tiene tres números seguidos restará 1
    for (let i=0 ; i< arr.length; i++){
        if(typeof arr[i] === "number" && typeof arr[i+1] === "number" && typeof arr[i+2] === "number"){
            seguridad++
            break
        }
    }
    //Si la contraseña supera los 20 caracteres sumará 2
    if(arr.length>20){ seguridad ++}
    //Si la contraseña es menor a 10 caracteres restará 1
    if(arr.length<10){ seguridad --}
    //Si tiene caracteres especiales sumará 1
    for (let i=0 ; i< caract_especiales.length; i++){
        for(let x=0 ; x<arr.length; x++){
            if(arr[x]===caract_especiales[i]){
                seguridad++
                break
            }
        }
    }

    return seguridad
}

console.log(check_seguridad("Castaputofeo111!"))
