import React from 'react'
import Layout from '../Componant/Layout/Layout'
import Court from "../images/court.png";
import "../Style/HomeStyles.css";

const Home = () => {
  return (
    <div>
<Layout>
<div className="home" style={{ backgroundImage: `url(${Court})`, backgroundSize:"60%", backgroundSize:"cover" ,backgroundRepeat:"no-repeat",backgroundPosition:"cover" }}>
        <div className="headerContainer" >
          {/* <h1>Food Website</h1> */}
          {/* <p>Best Food In India</p> */}
          <br></br>

<div style={{paddingTop:"20%"}}>
            <button style={{paddingTop:"10px"}}>ORDER NOW</button>
            </div>
          
        </div>
      </div>
</Layout>

    </div>
  )
}

export default Home;