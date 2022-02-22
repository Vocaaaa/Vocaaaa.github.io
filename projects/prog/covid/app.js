const api = fetch('https://corona.lmao.ninja/v2/countries/Finland?yesterday=1&strict&query%20')
    .then(res => res.json())
    .then(data =>  {
        setInterval(() => {
            document.querySelector(".main-title").textContent = data.country + " covid stats"
            document.querySelector(".total-cases").textContent = "Total cases: " + data.cases
            document.querySelector(".total-deaths").textContent = "Total cases: " + data.deaths
            document.querySelector(".new-cases").textContent = "New cases today: " + data.todayCases
            document.querySelector(".deaths-today").textContent = "Deaths today: " + data.todayDeaths
            console.log(data);
            document.querySelector(".load").style.zIndex = -1;
            
        }, 1000);

    })