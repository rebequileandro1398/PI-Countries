import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { GetActivity } from "../store/actions";

export default function Activities() {

    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => { dispatch(GetActivity(id))}, [dispatch, id])
    const getActivities = useSelector((state) => state.activities)
    
    return (
        <div>
            {
                getActivities.length > 0 ? getActivities.map(e => {
                             return (
                                     <div key={e.id}>
                                        <h3>Activity: {e.name}</h3>
                                        <h3>difficulty: {e.difficulty}</h3>
                                        <h3>duration: {e.duration}h</h3>
                                        <h3>season {e.season}</h3>
                                    </div>
                                 
                                 )
                }) : <div>loading...</div>
            }
        </div>
)
}