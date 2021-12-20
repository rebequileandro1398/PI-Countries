import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards";
import Filtros from "./Filtros";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
import getCountries from "../store/actions";
import styles from './Styles/Home.module.css'

import linkedin from '../img/linkedin.png'
import github from '../img/github.png'


export default function Home() {

    
    const getAll = useSelector((state)  => state.countries)
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getCountries())}, [dispatch])
   
    //paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);//cards per page
    
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage
    const currentPosts = getAll?.slice(indexOfFirst, indexOfLast) 
    const paginado = (pageNum) => {
        setCurrentPage(pageNum)
    }

    return <div className={styles.home}>
        <div className={styles.navBar}>
            <SearchBar/>
            <div>
                 <Filtros/>
            </div>
            <div className={styles.links}>
                <a href='https://www.linkedin.com/in/leandro-rebequi-a26484187/' target='_blank'>
                    <img src={linkedin} alt='image not found' style={{width:'2rem'}} />
                </a>
                <a href='https://github.com/rebequileandro1398' target='_blank'>
                     <img src={github} alt='image not found'style={{width:'2rem'}} />
                </a>
            </div>
        </div>

       <div className={styles.cards}>
            {
            
            getAll.length / postPerPage > 1 ?
              currentPosts?.map(e => {
                return <div key={e.id}>
                        <Cards 
                            id={e.id}
                            img={e.flag} 
                            name={e.name} 
                            continent={e.continents}
                            key={e.id}
                        /> 
                     </div>
              }) :
              getAll?.map(e => {
                return <div key={e.id}>
                        <Cards 
                            id={e.id}
                            img={e.flag} 
                            name={e.name} 
                            continent={e.continents}
                            key={e.id}
                        /> 
                     </div>
             })
            }
        </div>
        <div className={styles.paginado}>
            {
            getAll.length / postPerPage > 1 &&
                <Paginado
                    postsPerPage={postPerPage}
                    totalPosts={getAll.length}
                    paginado={paginado}
                /> 
            }
       </div>
    </div>
}