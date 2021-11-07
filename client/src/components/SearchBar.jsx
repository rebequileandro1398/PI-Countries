import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getCountrieByQuery } from "../store/actions"
import styles from './StylesComponents/SearchBar.module.css'

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

    return <div className={styles.searchBar}>
        <form onSubmit={handleSubmit}>
            <input className={styles.input} type="text" value={search} onChange={handleChange} />
        </form>
    </div>
}