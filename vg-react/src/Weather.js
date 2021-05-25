import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { format, addDays } from 'date-fns';
import Image from './Image';

export default function Weather() {

    const url = "https://goweather.herokuapp.com/weather/Curitiba"
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios.get(url).then(response =>{
            setWeather(response.data)
            console.log(response.data)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    const date = new Date();
    const tomorrow = addDays(date, 1);
    const afterTomorrow = addDays(date, 2);
    const dateFormated = format(date, "dd/MM/yy EEEE")
    const tomorrowFormated = format(tomorrow, "dd/MM/yy EEEE")
    const afterTomorrowFormated = format(afterTomorrow, "dd/MM/yy EEEE")

    return (
        <div>
        Now {dateFormated}:
        {weather.temperature} <Image item={city}/>
        Tomorrow {tomorrowFormated}: {weather.forecast[0].temperature}
        Day after tomorrow {afterTomorrowFormated}: {weather.forecast[1].temperature}

        </div>
    )
}
