import React from 'react'
import { SunnyOutline } from 'react-ionicons';
import { CloudyOutline } from 'react-ionicons';
import { RainyOutline } from 'react-ionicons';

export default function Image(props) {
    console.log(props.item.description.includes("cloudy"));

    if (props.item.description.includes("cloudy")){
        return (
            <div>

                <CloudyOutline
                color={'#00000'}
                height="50px"
                width="50px"
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
                height="50px"
                width="50px"
                />

            </div>
        )
    }

    return (
        <div>

            <SunnyOutline
            color={'#00000'}
            height="50px"
            rotate
            width="50px"
            />
        </div>
    )
}
