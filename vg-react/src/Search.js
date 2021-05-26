import React, { useRef, useState } from 'react'
import Weather from './Weather';

export default function Search() {

    const inputLocation = useRef();
    const [location, setLoc] = useState(null)

    function setLocation(event){
        event.preventDefault();
        setLoc(inputLocation.current.value)
        inputLocation.current.value = "";
    }

    return (
        <div>
            <form>
                <fieldset>
                    <div className="mb-3">
                        <label for="location">Titel:</label>
                        <input className="form-control" type="text" id="location" placeholder="Pick a place..." ref={inputLocation} />
                    </div>
                    <input type="submit" className="btn btn-success mt-3" value="Search" onClick={setLocation} />
                </fieldset>
            </form>
            <Weather item={location}/>
        </div>
    )
}
