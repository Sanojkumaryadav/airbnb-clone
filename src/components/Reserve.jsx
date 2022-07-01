import React from 'react'
import "./Reserve.css"
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShowPriceDetails from "./ShowPriceDetails"
const Reserve = ({islandDetails}) => {
  const [showPrice,setShowPrice] = React.useState(false)
  return (
    <div className = "reservebox">
      <div className = "innerBox">

    
           <p>₹{islandDetails.price}</p>
           <div className = "dateBox">
               <div>
                   <input type = "date" />
                   <input type = "date" />
               </div>
               <select >
                  <option>Adults 13+</option>
                  <option>Children ages 2-12</option>
                  <option>Infants under 2</option>
                  <option>Pets</option>
               </select>
           </div>

           <Button variant="contained" style = {{width:"98%",color:"#fff",marginTop:"1rem",background:"#e91e63",padding:"0.8rem",textTransform:"capitalize"}} >Reserve</Button>

           <p style = {{textAlign:"center",fontSize:"14px",color:"#424242"}}>you won't be charged yet</p>
           
           {showPrice &&  <ShowPriceDetails islandDetails = {islandDetails}/>}

           <Button onClick = {() => setShowPrice(!showPrice)} style = {{color:"black",textTransform:"capitalize"}} variant="text"> { showPrice ? "Hide price details" : "Show price Details"}<KeyboardArrowDownIcon/></Button>
           
           
            
          <div style ={{borderTop:"1px solid #cecece", width:"100%"}}></div>

           <div className = "total"><p>Total before taxes</p><p>₹{islandDetails.price}</p></div>
          </div>
    </div>
  )
}

export default Reserve
