import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { DetailsCountry } from "../store/actions"
import { useParams } from "react-router-dom";

export default function Details() {
    
    const dispatch = useDispatch()
    const getDetails = useSelector((state) => state.details)
    const { id } = useParams();
    useEffect(() => { dispatch(DetailsCountry(id))}, [dispatch, id])

        return (
            <div>
                <Link to={'/home'}>
                    <button>Home</button>
                 </Link>
                {
                    getDetails.length > 0 ? getDetails.map(e => {
                        return (
                            <div key={e.id}>
                                <h2>{e.name}</h2>  
                                <img src={e.flag} alt="image not found" style={{ width: "5em" }} />
                                <h3>country code: {e.id}</h3>
                                <h3>capital: {e.capital}</h3>
                                <h3>subregion: {e.subregion}</h3>
                                <h3>area: {e.area} km²</h3>
                                <h3>population: {e.population}</h3>
                                <Link to= {`/home/${e.id}/activity`}>
                                    <button>Tourist Activities</button>
                                </Link>
                                <Link to= '/home/activity/create'>
                                    <button>Create Activity</button>
                                </Link>
                            </div>
                        )
                    }) : <div>loading...</div>
                }
            </div>
    )
}