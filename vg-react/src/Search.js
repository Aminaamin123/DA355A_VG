import React, { useRef, useState } from 'react'
import Weather from './Weather';

export default function Search() { //retrieving and saving the input value

    const inputLocation = useRef();
    const [location, setLoc] = useState(null)

    function setLocation(event){
        event.preventDefault();
        setLoc(inputLocation.current.value)
        inputLocation.current.value = "";
    }

    return (
        <div className="container mx-auto">
            <form className="border border-primary p-2 w-75 m-2 mx-auto" style={{maxWidth: '40rem'}}>
                <fieldset>
                    <div className="mb-3 text-white">
                        <label for="location">Country / city:</label>
                        <input className="form-control border border-primary" type="text" id="location" placeholder="Pick a place..." ref={inputLocation} />
                    </div>
                    <input type="submit" className="btn btn-primary w-75" value="Search" onClick={setLocation} />
                </fieldset>
            </form>
            <Weather item={location}/>
        </div>
    )
}
