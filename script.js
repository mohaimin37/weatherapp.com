const country = document.getElementById("country")
const btn = document.getElementById("btn")
const light = document.getElementById("light")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const img = document.getElementById("img")
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
const span = document.getElementById("span")
const result = document.getElementById('result')
span.style.display = "none"

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    getval(country.value)
})
const getval = async(val)=>{
    try {
       

        
    const anas =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=18b9573c78ef58f970b66b785fc01856`)
    const abdul = await anas.json()
    const arsh =Math.round((abdul.main.temp)-273.15)
    const wea = abdul.weather[0].description
    light.innerHTML = `${arsh}°C ${wea}`
    h1.innerHTML = `${abdul.main.humidity}% <br/>humidity`
    h2.innerHTML = `${abdul.wind.speed}km/hr<br/>windspeed`
    result.style.display = "none"
    
    span.style.display = 'block'



    if( abdul.weather[0].main== 'Clear'){
        img.src ="clear.png"
    }
    else if( abdul.weather[0].main== 'Mist'){
        img.src =" mist.png"
    }
    else if( abdul.weather[0].main== 'Snow'){
        img.src =" snow.png"
    }
    else if( abdul.weather[0].main== 'Rain'){
        img.src ="rain.png"
    }
    else if( abdul.weather[0].main== 'Clouds'){
        img.src =" cloud.png"
    }
    else if( abdul.weather[0].main== 'Haze'){
        img.src =" overcaste.png"
    }
    else{
        img.src =" error.png" 
    }
    
        
    } catch (error) {
span.style.display = 'none'
result.style.display = "block"

        result.innerHTML = ` error ${val} is not found`
   
    
        

    }
}




