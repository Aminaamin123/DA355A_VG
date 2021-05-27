import React from 'react'
import { SunnyOutline } from 'react-ionicons';
import { CloudyOutline } from 'react-ionicons';
import { RainyOutline } from 'react-ionicons';

export default function Image(props) {
    //component for displaying the right img matching the weather
    console.log(props.item.description.includes("cloudy"));

    if (props.item.description.includes("cloudy")){
        return (
            <div>

                <CloudyOutline
                color={'#00000'}
                height="70px"
                width="70px"
                />

            </div>
        )
    }
    else if (props.item.description.includes("rain")){
        return (
            <div>

                <RainyOutline
                color={'#00000'}
                shake
                height="70px"
                width="70px"
                />

            </div>
        )
    }

    return (
        <div>

            <SunnyOutline
            color={'#00000'}
            height="70px"
            rotate
            width="70px"
            />
        </div>
    )
}
