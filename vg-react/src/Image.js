import React from 'react'
import { SunnyOutline } from 'react-ionicons';
import { CloudyOutline } from 'react-ionicons';
import { RainyOutline } from 'react-ionicons';

export default function Image(props) {

    if (props.item.description.includes("cloudy")){ //check if there the item sent from weather component is "cloudy"
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
    else if (props.item.description.includes("rain")){//check if there the item sent from weather component is "rain"
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

    return ( //otherwise return sun img
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
