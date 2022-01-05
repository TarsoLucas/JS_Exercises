// Celsius to Fahrenheit


function c_to_F(temperature){
    const ifCelcius = temperature.toUppercase().includes("C")
    const ifFahrenheit = temperature.toUppercase().includes("F")

    //error flux
    if(!ifCelcius && !ifFahrenheit)
       throw new Error("Invalid temperature")
    
    // Main course (F to C)
    let newTemperature = Number(temperature.toUppercase().replace("F", ""))
    let conversion = fahrenheit => (fahrenheit-32)*5/9
    let temperatureType = "C"

    // Secondary course (C to F)
    if(ifCelcius){
        newTemperature = Number(temperature.toUppercase().replace("C", ""))
        conversion = celcius => celcius*5/9 - 32
        temperatureType = "F"
    }


    return conversion(newTemperature) + temperatureType
}

try{
    console.log(c_to_F("40F")) 
    
} catch(error){
    console.log(error.messege)
}