import React from 'react'
import { SunnyOutline } from 'react-ionicons';
import { CloudyOutline } from 'react-ionicons';
import { RainyOutline } from 'react-ionicons';

export default function Image(props) {
        return (
            <div>

                <CloudyOutline
                color={'#00000'}
                height="50px"
                width="50px"
                />

                <RainyOutline
                color={'#00000'}
                shake
                height="50px"
                width="50px"
                />

              <SunnyOutline
              color={'#00000'}
              height="50px"
              rotate
              width="50px"
              />
        </div>
    )
