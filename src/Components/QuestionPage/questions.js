import React ,{ useEffect } from 'react';
import Quiz from '../Quizcomponent/Quiz';
import axios from 'axios';

export const Questions = () => {

    useEffect(() => {
       makePostRequest();
    },[])

    // const getAnswers = async () => {

    //     const response = await fetch("https://opentdb.com/api.php?amount=10&category=19&difficulty=hard&type=multiple");
    //     const result = await response.json();
    //     console.log(result);
    // }

//     const getDetails = () => {
//         fetch("https://www.exambazaar.com/api/coding-round/routes/random-question", { 
      
    
//     method: "POST", 
      
    
//     body: JSON.stringify({ 
//         api_key:"8875367061",
//         api_secret:"5ee99b11fee66d5d284e4ccb",
//         _id:"58ac22ac3cfd4f32bccf8a81"
//     }), 
//     headers: { 
//         "Content-type": "application/json"
//     } 
// }) 
  
 
// .then(response => response.json()) 
// .then(json => console.log(json)); 
//     }
// const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': 'JWT fefege...'
//   }
//    const getDetails = async () => {

//     const response = await axios({
//         method: 'post',
//         url: 'https://www.exambazaar.com/api/coding-round/routes/random-question',
//         data: {
//           api_key:"8875367061",
//           api_secret:"5ee99b11fee66d5d284e4ccb",
//           _id:"58ac2c317e852a2c401a8c3a"

//         },
//         headers : {
//             'Content-Type': 'application/json',
//             'Authorization': 'JWT fefege...'
//         }
//       });

      

//       console.log(response);   
//     }

async function makePostRequest() {

    const data = {
        api_key:"8875367061",
        api_secret:"5ee99b11fee66d5d284e4ccb",
       _id:"58ac2c317e852a2c401a8c3a"
      }

    let res = await axios.post('https://www.exambazaar.com/api/coding-round/routes/random-question', data);

    console.log(res.data);
}
    return(
        <div className="questions">
            <h1 className="text">Questions</h1>
             <Quiz />
        </div>
    )
}
