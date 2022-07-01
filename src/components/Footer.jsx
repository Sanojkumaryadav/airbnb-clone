import React from 'react'

const Footer = () => {

 

  return (

    <div style = {{margin:"auto",width:"100vw",height:"340px",marginRight:"-40px",marginTop:"30px",marginBottom:"-160px",background:"#f5f5f5"}}>
    <footerComponent style = {{marginTop:"30px",display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"90%"}}>

      <div>
        <h4 style = {{marginLeft:"36px"}}>support</h4>
        <ul style = {{marginTop:"20px",listStyle:"none",color:"#616161",fontSize:"0.9rem",fontFamily:"arial,sanserif,helvetica"}}>
          <li style = {{marginBottom:"0.8rem"}}>Help Centre</li>
          <li style = {{marginBottom:"0.8rem"}}>AirCover</li>
          <li style = {{marginBottom:"0.8rem"}}>Safety information</li>
          <li style = {{marginBottom:"0.8rem"}}>Supporting people with disabilities</li>
          <li style = {{marginBottom:"0.8rem"}}>Cancellation options</li>
          <li style = {{marginBottom:"0.8rem"}}>Our COVID-19 Response</li>
          <li style = {{marginBottom:"0.8rem"}}>Report a neighbourhood concern</li>
        </ul>
      </div>
      
      <div>
        <h4 style = {{marginLeft:"36px"}}>Community</h4>
        <ul style = {{listStyle:"none",color:"#616161",fontSize:"0.9rem",fontFamily:"arial,sanserif,helvetica"}}>
          <li style = {{marginBottom:"0.8rem"}}>Airbnb.org: disaster relief housing</li>
          <li style = {{marginBottom:"0.8rem"}}>Support Afghan refugees</li>
          <li style = {{marginBottom:"0.8rem"}}>Combating discrimination</li>
        </ul>
      </div>

      <div>
        <h4 style = {{marginLeft:"36px"}}>Hosting</h4>
        <ul style = {{listStyle:"none",color:"#616161",fontSize:"0.9rem",fontFamily:"arial,sanserif,helvetica"}}>
          <li style = {{marginBottom:"0.8rem"}}>Try hosting</li>
          <li style = {{marginBottom:"0.8rem"}}>AirCover for Hosts</li>
          <li style = {{marginBottom:"0.8rem"}}>Explore hosting resources</li>
          <li style = {{marginBottom:"0.8rem"}}>Visit our community forum</li>
          <li style = {{marginBottom:"0.8rem"}}>How to host responsibly</li>
        </ul>
      </div>


      <div>
        <h4 style = {{marginLeft:"36px"}}>About</h4>
        <ul style = {{listStyle:"none",color:"#616161",fontSize:"0.9rem",fontFamily:"arial,sanserif,helvetica"}}>
          <li style = {{marginBottom:"0.8rem"}}>Newsroom</li>
          <li style = {{marginBottom:"0.8rem"}}>Learn about new features </li>
          <li style = {{marginBottom:"0.8rem"}}>Letter from our founders</li>
          <li style = {{marginBottom:"0.8rem"}}>Careers</li>
          <li style = {{marginBottom:"0.8rem"}}>Investors</li>
        </ul>
      </div>


    </footerComponent >
    </div>
  )
}

export default Footer
