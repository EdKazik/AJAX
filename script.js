'use strict'
fetch('http://api.openweathermap.org/data/2.5/weather?q=ODESSA&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(response => response.json())
    .then(data => {
        
        const qCity = data.name
        
        const temp = data.main.temp
        
        const pres = data.main.pressure
        
        const descr = data.weather[0].description
        
        const hum = data.main.humidity
        
        const windSpeed = data.wind.speed
        
        const windDeg = data.wind.deg
        
        const iconValue = data.weather[0].icon
        
        const icon = `http://openweathermap.org/img/w/${iconValue}.png`
        
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'new__div')
        document.body.insertBefore(newDiv, document.querySelector('script'))
        const h1 = document.createElement('h1')
        const img = document.createElement('img')
        img.src = icon
        img.alt = 'photo'

        document.body.insertBefore(img, newDiv)
        
        newDiv.appendChild(h1)
        const div = document.createElement('div')
        newDiv.appendChild(div)
        h1.textContent = qCity
        div.textContent = `temp: ${temp}°`

        const div2 = document.createElement('div')
        newDiv.appendChild(div2)
        div2.textContent = `pressure: ${pres} `

        const div3 = document.createElement('div')
        newDiv.appendChild(div3)
        div3.textContent = `description: ${descr}°С`

        const div4 = document.createElement('div')
        newDiv.appendChild(div4)
        div4.textContent = `humidity: ${hum}`

        const div5 = document.createElement('div')
        newDiv.appendChild(div5)
        div5.textContent = `wind: ${windSpeed}`

        const div6 = document.createElement('div')
        newDiv.appendChild(div6)
        div6.textContent = `deg : ${windDeg}`
    })


