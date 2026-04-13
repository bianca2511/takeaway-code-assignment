import './SearchBar.css'
import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [postcode, setPostcode] = useState("");
    return (
        <>
            <div className='search-bar-frame'>
                <p>Type in a postcode </p>
                <input className='search-bar' type='text' value={postcode} placeholder='e.g. CT12EH' onChange={(e)=>setPostcode(e.target.value)}></input>
                <button className='search-button' onClick={() => onSearch(postcode)}>Search</button>
            </div>
        </>
    )
}

export default SearchBar
