import { ContinentsFilter, GetAllActivities, SortByName,} from "../store/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Filtros() {

    let dispatch = useDispatch()
    const allActivities = useSelector((state)=> state.allactivities)
    useEffect(() => { dispatch(GetAllActivities())}, [dispatch])

    const handleSortByName = e => {
        e.preventDefault()
        dispatch(SortByName(e.target.value))
    }

    const handleContinents = e => {
        e.preventDefault()
        dispatch(ContinentsFilter(e.target.value))
    }

    return <div>
                <div>
                    <Link to= '/home/activity/all'>
                            <button>Tourist Activities</button>
                    </Link>
              </div>
                <div>
                    <Link to= '/home/activity/create'>
                        <button>Create Activity</button>
                    </Link>
              </div>
          <div>
          Continents: <br/>
           <select onChange={e => handleContinents(e)}>
               <option value="all">All</option>
               <option value="North America">North America</option>
               <option value="South America">South America</option>
               <option value="Asia">Asia</option>
               <option value="Europe">Europe</option>
               <option value="Africa">Africa</option>
               <option value="Oceania">Oceania</option>
               <option value="Antarctica">Antarctica</option>
           </select>
       </div>

       <div>
       Sort from: <br/>
           <select onChange={e => handleSortByName(e)}> 
               <option value="asc">A - Z</option>
               <option value="desc">Z - A</option>
               <option value="max">higher population</option>
               <option value="min">lower population</option>
           </select>
       </div>
    </div>
}