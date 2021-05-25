import React, { useRef } from 'react'

export default function Search() {

    const inputLocation = useRef();


    return (
        <div>
            <form>
                <fieldset>
                    <div className="mb-3">
                        <label for="location">Titel:</label>
                        <input className="form-control" type="text" id="location" placeholder="Pick a place..." ref={inputLocation} />
                    </div>
                    <input type="submit" className="btn btn-success mt-3" value="Search" />
                </fieldset>
            </form>
        </div>
    )
}
