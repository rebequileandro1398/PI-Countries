import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getCountries, { PostActivity } from "../store/actions";
import styles from './Styles/CreateActivity.module.css'


export function validate(input) {
    let errors = {}
    !input.country && (errors.country = '"Country" is required')
    !input.name && (errors.name = '"Activity" is required') 
    !input.difficulty && (errors.difficulty = '"Difficulty" is required')
    !input.duration && (errors.duration = '"Duration" is required')
    !input.season && (errors.season = '"Season" is required')
    if(/^([0-9])*$/.test(input.name)) {
        errors.name = 'Numbers are not allowed'
    }
    return errors
}

const CreateActivity = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state)=> state.countries)
    useEffect(() => { dispatch(getCountries())}, [dispatch])

    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        country: [],
        name: '',
        difficulty: '',
        duration: '',
        season: '',
      });

      const handleInputChange  = e => { 
        setInput({
            ...input,
            [e.target.name]: e.target.value,
          });

      }
      
      const handleSelect = e => {
          setInput({
              ...input,
              country: [...input.country, e.target.value]
          })
      }
      const handleSubmmit = (e) => {
        e.preventDefault()
        dispatch(PostActivity(input))

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
          }));

        
        setInput({
            country: [],
            name: '',
            difficulty: '',
            duration: '',
            season: '',
        })
       
      }


    return (
        <form className={styles.CreateActivity} onSubmit={(e) => handleSubmmit(e)}>
            <Link to={'/home'}>
                <button className={styles.button}>Home</button>
            </Link>
                <div>
                    <label></label>
                       <select className={styles.select} onChange={(e) => handleSelect(e)} value={[input.country]} name='country' multiple={true}>
                            <option>select one or more countries:</option>
                           {countries.map(e => (<option key={e.id} value={e.name}>{e.name}</option>))}
                       </select> {errors.country && (<p>{errors.country}</p>)}
                       <ul>
                            {input.country.map(e => (<li key={e}>{e}</li>))}
                       </ul>
                </div>
                <div>
                    <label>Activity: </label>
                        <input className={styles.input} 
                        type="text" 
                        value={input.name} 
                        placeholder='Name'
                        onChange={(e) => handleInputChange(e)} 
                        name='name' /> {errors.name && (<p>{errors.name}</p>)}
                </div>
                <div>
                    <label>Difficulty:</label>
                        <select className={styles.select} onChange={(e) => handleInputChange(e)} name='difficulty' value={input.difficulty}>
                            <option value=''></option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select> {errors.difficulty && (<p>{errors.difficulty}</p>)}
                </div>

                <div>
                     <label>Duration:</label>
                         <input className={styles.select} 
                         type="time" 
                         value={input.duration}
                         placeholder='duration' 
                         onChange={(e) => handleInputChange(e)} 
                         name='duration'/> {errors.duration && (<p>{errors.duration}</p>)}
                </div>
                    <div>
                        <label>Season</label>
                            <select className={styles.select} onChange={(e) => handleInputChange(e)} name='season' value={input.season}>
                                <option value=''></option>
                                <option value='Summer'>Summer</option>
                                <option value='Autumn'>Autumn</option>
                                <option value='Winter'>Winter</option>
                                <option value='Spring'>Spring</option>
                            </select> {errors.season && (<p>{errors.season}</p>)}
                    </div>
                    <input className={styles.button} type="submit" value="Create" />
        </form>
    )
}
export default CreateActivity;