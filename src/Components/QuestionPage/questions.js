import React ,{ useEffect } from 'react';

export const Questions = () => {

    useEffect(() => {
        getDetails();
    },[])

    const getDetails = () => {
        fetch("https://www.exambazaar.com/api/coding-round/routes/random-question", { 
      
    
    method: "POST", 
      
    
    body: JSON.stringify({ 
        api_key:"8875367061",
        api_secret:"5ee99b11fee66d5d284e4ccb",
        _id:"58ac22ac3cfd4f32bccf8a81"
    }), 
    headers: { 
        "Content-type": "application/json"
    } 
}) 
  
 
.then(response => response.json()) 
.then(json => console.log(json)); 
    }
    return(
        <div className="questions">
            <h1 className="text">Questions</h1>
        </div>
    )
}
