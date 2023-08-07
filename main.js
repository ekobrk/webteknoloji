const url = 'https://api.openweathermap.org/data/2.5/'
const key = '362f04914f3ecdba012f8d5e7884fd68'

const setQuery = (e) => {

    if (e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult=(cityName)==>{

    let query=`${url}weather?q${cityName}'&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather==>{
        return weather.json()
    })
    .then(displayResult)

    }

    const displayResult=(result)=>{

        console.log(result);
    }

        



const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)