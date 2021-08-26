import React, { useEffect, useState } from 'react';
import classes from './Tempapp.module.css';

const Tampapp = () => {
   const [city,setCity] = useState(null);
   const [search, setsearch] = useState('delhi');

   useEffect(()=>{
      const fetchApi = async() =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c9108d552b9b6f01a7b91ac25d6fcb40`;
        const response = await fetch(url);
        const resJson = await response.json();
      //   console.log(resJson);
      setCity(resJson.main);
      };
      fetchApi();
   },[search]);

   var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      return(
         <div className={classes['app-wrap']}>
            <header>
               <input type="search" className={classes.inputField} value={search} onChange={(event) =>{
                  setsearch(event.target.value);
               }}/>
            </header>
        
        {!city ? (<p>
            No Data Found
        </p>) : (
            <div className={classes.location}>
            <h3 className={classes.date}>{date}</h3>
            <h2 className={classes.city}>
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className={classes.temprature}>
               {city.temp}<span><sup>o</sup></span>cel
            </h1>
            <h3 className={classes.weather}>Min:{city.temp_min}<span><sup>o</sup></span>cel | Max:{city.temp_max}<span><sup>o</sup></span>cel</h3>
         </div>
        )}

            
                
            
         </div>
      );
};

export default Tampapp;