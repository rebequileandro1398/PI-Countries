import React from "react";

const Posts = ({postsPerPage, totalPosts, paginado}) => {

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
       <nav>
           {
               pageNumber?.map(number => (
                  <ul style={{listStyle:"none"}} key={number}>
                    <li onClick={()=> paginado(number)}>{number}</li>
                 </ul> 
               ))
           }
       </nav>
    )
}

export default Posts