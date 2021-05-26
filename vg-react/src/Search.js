import React, { useRef, useState } from 'react'
import Weather from './Weather';

export default function Search() {

    const inputLocation = useRef();
    const [location, setLoc] = useState(null)

    function setLocation(event){ //retrieving and saving the input value
        event.preventDefault();
        setLoc(inputLocation.current.value)
        inputLocation.current.value = "";
    }

    return (
        <div className="container">
            <form className="border border-primary p-2 w-50 m-2">
                <fieldset>
                    <div className="mb-3">
                        <label for="location">Titel:</label>
                        <input className="form-control border border-primary" type="text" id="location" placeholder="Pick a place..." ref={inputLocation} />
                    </div>
                    <input type="submit" className="btn btn-primary mt-3" value="Search" onClick={setLocation} />
                </fieldset>
            </form>
            <Weather item={location}/>
        </div>
    )
}
