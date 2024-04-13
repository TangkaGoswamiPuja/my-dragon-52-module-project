import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [category , setCategory] =useState([])

    useEffect(
        ()=>{
            fetch('categories.json')
            .then(res=>res.json())
            .then(data=>setCategory(data))
            
        }
    ,[])
    return (
        <div>
           <h2 className='text-2xl'>
           All categories
          <div className='flex flex-col '>
          {
        category.map(cat => <Link className='block p-2 ' key={cat.id}
            to={`/category/${cat.id}`}>{
                cat.name
            }</Link>)
           }
          </div>
           </h2>
        </div>
    );
};

export default LeftSideNav;