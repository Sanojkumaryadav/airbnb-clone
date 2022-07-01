import React from 'react'

const ShowPriceDetails = ({islandDetails}) => {
  return (
    <div>
       <div className = "charges"><p>₹{islandDetails.price} 1 night</p><p style = {{textDecoration:"None"}}>₹{islandDetails.price}</p></div>
       <div className = "charges"><p>service fee</p><p style = {{textDecoration:"None"}}>₹{islandDetails.price}</p></div>
    </div>
  )
}

export default ShowPriceDetails
