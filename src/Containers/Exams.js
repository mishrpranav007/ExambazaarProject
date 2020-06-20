import React from 'react';
import { useHistory } from "react-router-dom";
import style from "./exams.module.css";
const Exams = ({title,stream,rank,image}) => {
    
    const history = useHistory();
    const navigateTo = () => history.push('/about');

   return(
       <div className={style.exams}>
           <h1>{title}</h1>
           <p className={style.paragraph}>Stream : {stream}</p>
           <p className={style.paragraph}>Rank : {rank}</p>
           <img className={style.image} src={image} alt="" />

           <button onClick={navigateTo} className={style.button} type="submit">
                    Next Page
           </button>
       </div>
   )
}
export default Exams;