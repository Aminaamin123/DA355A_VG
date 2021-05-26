import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, addDays } from 'date-fns';
import Image from './Image';

export default function Weather(props) {
    const [weather, setWeather] = useState(null)

    var url = "https://goweather.herokuapp.com/weather/"

    if(props.item != null){
        url += props.item // adding the choosen city or country to API-link
        console.log(url)
    }

    useEffect(() => {
        axios.get(url).then(response =>{ // making axios api request
            setWeather(response.data) //saving the retrieved data
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    const date = new Date(); // gettting the current date
    const tomorrow = addDays(date, 1); // adding one day on the current date, to get tomorrows date
    const afterTomorrow = addDays(date, 2);
    const dateFormated = format(date, "dd/MM/yy EEEE")
    const tomorrowFormated = format(tomorrow, "dd/MM/yy EEEE")
    const afterTomorrowFormated = format(afterTomorrow, "dd/MM/yy EEEE")

    if(weather){ //checking if weather is avalibe
        return (
            <div>
            Now {dateFormated}:
            {weather.temperature} <Image item={weather}/>
            Tomorrow {tomorrowFormated}: {weather.forecast[0].temperature}
            Day after tomorrow {afterTomorrowFormated}: {weather.forecast[1].temperature}
            </div>
        )
    }
    return(
        <div>

        </div>
    )
}
