import './SearchBar.css'
import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [postcode, setPostcode] = useState("");
    return (
        <>
            <div>
                <p>Type in a postcode </p>
                <input type='text' value={postcode} placeholder='e.g. CT12EH' onChange={(e)=>setPostcode(e.target.value)}></input>
                <button onClick={() => onSearch(postcode)}>Search</button>
            </div>
        </>
    )
}

export default SearchBar
