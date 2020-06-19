import React from 'react';
import style from "./exams.module.css";
const Exams = ({title,stream,rank,image}) => {
   return(
       <div className={style.exams}>
           <h1>{title}</h1>
           <p className={style.paragraph}>Stream : {stream}</p>
           <p className={style.paragraph}>Rank : {rank}</p>
           <img className={style.image} src={image} alt="" />

           <button className={style.button} type="submit">
                    Next Page
           </button>
       </div>
   )
}
export default Exams;