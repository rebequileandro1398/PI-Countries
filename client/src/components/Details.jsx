import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { DetailsCountry } from "../store/actions"
import { useParams } from "react-router-dom";
import styles from './Styles/Details.module.css'
export default function Details() {
    
    const dispatch = useDispatch()
    const getDetails = useSelector((state) => state.details)
    const { id } = useParams();
    useEffect(() => { dispatch(DetailsCountry(id))}, [dispatch, id])

        return (
            <div className={styles.details}>
                <Link to={'/home'}>
                    <button className={styles.button}>Home</button>
                 </Link>
                 <div>
                    {
                        getDetails.length > 0 ? getDetails.map(e => {
                            return (
                                <div key={e.id}>
                                    <h1>{e.name}</h1>  
                                    <img src={e.flag} alt="image not found" style={{ width: "7em" }} />
                                    <h2>country code: {e.id}</h2>
                                    <h2>capital: {e.capital}</h2>
                                    <h2>subregion: {e.subregion}</h2>
                                    <h2>area: {e.area} km²</h2>
                                    <h2>population: {e.population}</h2>
                                    <Link to= {`/home/${e.id}/activity`}>
                                        <button className={styles.button}>Tourist Activities</button>
                                    </Link>
                                    <Link to= '/home/activity/create'>
                                        <button className={styles.button}>Create Activity</button>
                                    </Link>
                                </div>
                            )
                        }) : <div>loading...</div>
                    }
                </div>
            </div>
    )
}