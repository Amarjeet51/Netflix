import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints from "../sevices/movieservices";

const hero = () => {

  const[movie,setmovie] = useState({});

  useEffect(() =>{
    axios.get(endpoints.popular).then((response)=> {
      console.log(response.data.results);
    });
  }, []);

  return <div>Hero</div>
}

export default hero