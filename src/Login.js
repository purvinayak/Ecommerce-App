import React from 'react'
import './Login.css'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Login = () => {
    const[data,setdata]=React.useState({})
    const handlechange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setdata({...data,[name]:value})
    }

    // function myreaction(){
      
    //   <Accordion>
    //       <AccordionSummary
    //         expandIcon={<ExpandMoreIcon />}
    //         aria-controls="panel1-content"
    //         id="panel1-header"
    //       >
    //         Accordion 1
    //       </AccordionSummary>
    //       <AccordionDetails>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    //         malesuada lacus ex, sit amet blandit leo lobortis eget.
    //       </AccordionDetails>
    //     </Accordion>
      
    // }
    const handleclick=()=>{
        // console.log(data)
      localStorage.setItem("Userinfo",JSON.stringify(data))

    
    }
    const handleclick1=()=>{
      let data=localStorage.getItem("userinfo")
      console.log(data,JSON.parse(data))
    }
// function myreaction(){
//     <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           Accordion 1
//         </AccordionSummary>
//         <AccordionDetails>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//           malesuada lacus ex, sit amet blandit leo lobortis eget.
//         </AccordionDetails>
//       </Accordion>
// }
  return (
    <div>
<>



<div class="login-container">
  <h1>Login</h1>
  <Box component="section" 
     sx={{
      width: 100,
      height: 100,
      borderRadius: 1,
      bgcolor: 'primary.main',
      '&:hover': {
        bgcolor: 'pink',

        // p: 25, border: '1px dashed grey'
      },
    }}>



      
      <div class="input-group">

        
      <label for="username"  sx={{ p: 2, border: '1px dashed grey' }} >Username</label>
      <input type="text" id="username" name="username" value={data.username}   sx={{ p: 2, border: '1px dashed grey' }}  required onChange={handlechange}/>
    </div>
    <div class="input-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" value={data.password} required onChange={handlechange}/>
    </div>
    <button type="submit" onClick={handleclick} >Login</button>
   <button type="submit" onClick={handleclick1}>get</button>
   </Box>
</div>

</>
    </div>
  )
}

export default Login;