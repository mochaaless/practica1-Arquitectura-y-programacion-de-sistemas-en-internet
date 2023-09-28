//EJERCICIO3

type hora_12h1 = `${number}:${number} am`
type hora_12h2 = `${number}:${number} pm`

function cambiarhora(hora_12 : hora_12h1 | hora_12h2){
    const sep = hora_12.split(":")
    const hora = parseInt(sep[0]) 
    const sep2 = sep[1].split(" ")
    const minuto = parseInt(sep2[0])
    const franja = sep2[1]
    let hora_final = ""
    let minuto_final = ""

    if(franja==="am"){
        if(hora<12){
            if(hora<10){
                hora_final=`0${hora}`
            }
            else{
                hora_final=hora.toString()
            }
        }
        else if(hora===12){
            hora_final="00"
        }
        else{
            throw new Error("Hora no valida");    
        }
        if(minuto<10){
            minuto_final=`0${minuto}`
        }
        else{
            minuto_final=minuto.toString()
        }
        
    }
    else{
        if(hora<12){
            hora_final=(hora+12).toString()
        }
        else if(hora === 12){
            hora_final="12"
        }
        else{
            throw new Error("Hora no valida");
        } 
        if(minuto<10){
            minuto_final=`0${minuto}`
        }
        else{
            minuto_final=minuto.toString()
        }   
    }

    const result=`${hora_final}${minuto_final}`

    return result
}

console.log(cambiarhora("11:00 pm"))