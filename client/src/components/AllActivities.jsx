import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetAllActivities } from "../store/actions"
import styles from './Styles/TouristActivity.module.css'
export default function AllActivities(){

    let dispatch = useDispatch()
    const allActivities = useSelector((state)=> state.allactivities)
    useEffect(() => { dispatch(GetAllActivities())}, [dispatch])

    const[input, setInput] = useState()
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    let auxfilter = allActivities.filter(e => e.name === input)
    console.log(auxfilter[0])
    return(
        <div className={styles.all}>
            <select className={styles.select} value={input} onChange={(e)=> handleChange(e)}>
                <option>Select Activity</option>
                {allActivities?.map(e => (<option key={e.id}>{e.name}</option>))}
            </select>
            <div>
                {auxfilter.map(e =>{
                    return (
                        <div key={e.id}>
                            <h2>countries {e.countries?.map(e=>(
                                <div key={e.id}>
                                     <img src={e.flag} alt={e.name} style={{ width: "2em" }}/>
                                </div>
                                   ))}</h2> 
                            <h3>Activity: {e.name}</h3>
                            <h3>Difficulty: {e.difficulty}</h3>
                            <h3>Duration: {e.duration}h</h3>
                            <h3>Season: {e.season}</h3>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}