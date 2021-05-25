import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addDays } from 'date-fns';

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

    return (
        <div>

        {weather.temperature}

        </div>
    )
}
