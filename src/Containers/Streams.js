import React from 'react';
import style from "./streams.module.css";

const Streams = ({title,rank,image}) => {
   return(
       <div className={style.streams}>
           <h1>{title}</h1>
            <p>Rank : {rank}</p>
           <img  className={style.image} src={image} alt="" />
       </div>
   )
}
export default Streams;