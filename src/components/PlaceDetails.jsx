import React from 'react'
import Reserve from "./Reserve"
import {useParams} from "react-router-dom"
import IslandDetailsCard from "./IslandDetailsCard"
import Footer from "./Footer"
 const PlaceDetails = () => {

  const {islandId} = useParams()
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

  const[islandDetails, setIslandDetails] = React.useState({})


  React.useEffect (()=>{

  setIsLoading(true)

  fetch(`http://localhost:8080/islands/${islandId}`)
  .then((res)=>(res.json()))
  .then((res) => {
    setIsError(false)
    setIslandDetails(res)
  } )
  .catch((error) => setIsError(true))
  .finally(() => setIsLoading(false))

  },[islandId])
  
  console.log(islandDetails.details)
  if(isLoading){
    return <h1>Loading.....</h1>
  }

  if(isError) {
    return <h1>Error.....</h1>
  }

  return (
    <>
     <div> 
      <IslandDetailsCard  />
      <Reserve islandDetails = {islandDetails} />
      </div>
      <Footer />
    
     </>
  )
}

export default PlaceDetails
