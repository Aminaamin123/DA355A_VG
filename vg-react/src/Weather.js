import React from 'react'
import axios from 'axios';

export default function Weather() {

    const url = "https://goweather.herokuapp.com/weather/Curitiba"
    axios.get(url).then(response =>{
    console.log(response.data)
    })

    return (
        <div>

        </div>
    )
}
