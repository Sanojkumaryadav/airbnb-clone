import React from 'react'
import "./Cards.css"
import StarIcon from '@mui/icons-material/Star';
import {Link} from "react-router-dom"
const Cards = () => {

  const [islands,setIslands] = React.useState([]) 

  React.useEffect(()=> {
       fetch(`http://localhost:8080/islands`)
       .then((res) => (res.json()))
       .then((res) => setIslands(res))
       .catch((err) => console.log(err))
  },[]) 

  return (
  
    <div className = "cards" >
      {
        islands.map((island) => (
            <div className = "card" key = {island.id}>
               <Link to = {`/islands/${island.id}`}>{<img style = {{width:"22vw",height:"40vh",borderRadius: "0.6rem"}} src = {island.images} alt = "islandimage" />}</Link>
              <div className= "cityandratings"><p>{island.city},{island.country}</p> <p className = "rating-icon">{island.ratings} <StarIcon style = {{fontSize:"16px"}}/> </p></div>
              <p className = "fade-color">{island.distance}</p>
              <p className  = "fade-color">{island.date}</p>
              <p> ₹{island.price}</p>
             </div>
        ) )
      }
      </div>
   
  )
}

export default Cards
// Footer