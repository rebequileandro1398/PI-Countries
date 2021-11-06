import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getCountrieByQuery } from "../store/actions"


export default function SearchBar() {
    
    const [search, setSearch] = useState('')
    let dispatch = useDispatch()
    
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(getCountrieByQuery(search))
    }
    const handleChange = e => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleChange} />
        </form>
    </div>
}