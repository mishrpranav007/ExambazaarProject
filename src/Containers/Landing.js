import React, { useEffect,useState} from 'react';
import Exams from './Exams';
import Streams from './Streams';
import "./Landing.css";


const Landing = () => {
    
    const [answers,setAnswers] = useState([]);
    const [streaminfo,setStreaminfo] = useState([]);

    const [search,setSearch] = useState('');

    useEffect(() => {
      getDetails();
    }, [search]);

    const getDetails = async () => {
    
    const response = await fetch('https://www.exambazaar.com/api/coding-round/routes/exam-info/8875367061');
    const result = await response.json();
    console.log(result);
    setAnswers(result.data.exams);
    setStreaminfo(result.data.streams);
    
   
    }

    const getSearch = e => {
        e.preventDefault();
        setSearch('');
    }
    const filteredItems = answers.filter(answer => {
        return answer.name.toLowerCase().includes(search.toLowerCase())
    })

    return(
         <div className="Landing">
               <form onSubmit={getSearch} className="search-from">
                 <input className="search-bar" type="text" onChange={e => setSearch(e.target.value)} ></input>
                 <button className="search-button" type="submit">
                     Search here!
                 </button>
             </form>

             <h1 className="text">Various Examinations</h1>
             <div className="exams">
             {filteredItems.map(answer => (
                 <Exams 
                 key={answer.name}
                 title={answer.name}
                 rank={answer.rank}
                 stream={answer.stream} 
                 image={answer.logo} 
                 />
             ))} 
             </div>

             <h1 className="text">Various Streams</h1>
             <div className="streams">
                 {streaminfo.map(stream => (
                     <Streams 
                     key={stream.name} 
                     title={stream.name} 
                     rank={stream.rank} 
                     image={stream.logo.black}
                     />
                 ))}
             </div>
         </div>
     )
}

export default Landing;