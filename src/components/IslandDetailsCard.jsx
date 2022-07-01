import React from 'react'

const IslandDetailsCard = () => {

  let imageBox = {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"100%",
      margin:"auto"
      
  }

let gridImage = {
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    gap:"10px"
}

let imageSize = {
    width:"240px",
    height:"200px",
    borderRadius:"10px"
}


  return (
    <div style = {{width:"90%",margin:"auto"}}>
      <p style = {{color:"#263238",fontSize:"1.6rem"}}>Adaaran Club Rannalhi, Maldives, Water Bungalows</p>

    <div style = {imageBox}>
        <div>
            <img style = {{width:"675px", height:"410px", marginRight:"10px", borderRadius:"10px"}}src = "https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=960"/>    
        </div>
        <div style = {gridImage}>
            <img style = {imageSize} src = "https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?im_w=720" />
            <img style = {imageSize} src = "https://a0.muscache.com/im/pictures/e24c13b9-dd2a-4e15-9845-dd588a884e39.jpg?im_w=720" />
            <img style = {imageSize} src = "https://a0.muscache.com/im/pictures/4ee4b710-db54-417a-a2ee-9a3500cd0879.jpg?im_w=720" />
            <img style = {imageSize} src = "https://a0.muscache.com/im/pictures/8d085e29-d5d6-4cd5-908b-38b05f4f669b.jpg?im_w=720" />
        </div>
    </div>
    <p>Dome hosted by Dorothy</p>

    <p>6 guests1 bedroom1 bed1 bathroom</p>

    <div style = {{borderTop:"1px solid #cecece",width:"50%"}}></div>

      <div>
          <div>
              <h4>Dive right in</h4>
              <p>This is one of the few places in the area with a pool.</p>
          </div>
          <div>
          <h4>Experienced host</h4>
            <p>Dorothy has 731 reviews for other places.</p>

          </div>
      </div>
    <div style = {{borderTop:"1px solid #cecece",width:"50%",marginBottom:"30px"}}></div>
    

    <img  style = {{width:"10%"}}src = "https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"/>
   
    <p style = {{textAlign:"left",width:"55%"}}>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
    
    
    <h4 style = {{textDecoration:"underline"}}>learn more</h4>

    <div style = {{borderTop:"1px solid #cecece",width:"50%",marginTop:"30px"}}></div>

    <p style = {{texAlign:"left",width:"50%"}}>Adaaran Club Rannalhi is featured among the best hotels in Maldives and sits exclusively at the tip of the South Male atoll within the exotic collection of islands known as the Maldives. Its unique location offers access to pristine beaches, excellent scuba diving opportunities and a relaxed environment with easy access to the capital city of Male.
</p>

<div style = {{borderTop:"1px solid #cecece",width:"50%",marginBottom:"35px"}}></div>

<h4>Where you'll sleep</h4>
<div style = {{border:"1px solid #cecece", paddingLeft:"20px",width:"250px", height:"150px",textAlign:"left",borderRadius:"6px"}}>
    <p>Bedroom</p>
    <p>1 double bed</p>
</div>


<div style = {{borderTop:"1px solid #cecece",width:"50%",marginTop:"35px"}}></div>

<img src = "https://i.ibb.co/RbGmpgm/amenitiesjson.png"/>

</div>
  )
}

export default IslandDetailsCard
