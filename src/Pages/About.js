import React from "react";
// import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import Layout from "../Componant/Layout/Layout";
import Res from '../images/src.jpg'


const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
      
        <div className="home" style={{ backgroundImage: `url(${Res})`, backgroundSize:"100%", backgroundSize:"cover" ,backgroundRepeat:"no-repeat",backgroundPosition:"cover" }}></div>
        <Typography variant="h4">About My Food Court</Typography>
        <h2>
        Kalol, a vibrant town in Gujarat, offers a rich tapestry of culinary delights that cater to a diverse palate. The local food scene beautifully blends the flavors of South Indian, Gujarati, and Punjabi cuisines. South Indian dishes like crispy dosas, tangy sambar, and fluffy idlis are popular breakfast choices, enjoyed by many for their light yet flavorful appeal. Gujarati cuisine, the heart of Kalol's culinary identity, offers a wide array of traditional dishes such as dhokla, thepla, and farsan, all characterized by their unique blend of sweet, spicy, and tangy flavors. Punjabi cuisine adds a robust dimension to the town's food culture, with rich curries like butter chicken, paneer tikka, and hearty breads like naan and paratha, often enjoyed by those seeking a more indulgent meal. Whether you crave the comfort of familiar flavors or wish to explore the regional diversity, Kalol's food scene has something to satisfy every taste bud.
        </h2>
        <br />
        <h2>
        . The local cuisine prominently features Gujarati staples like Dhokla, a fluffy steamed snack made from fermented rice and chickpea flour, and Khandvi, savory rolls made from gram flour. You’ll also find Undhiyu, a hearty mixed vegetable curry slow-cooked with spices, which is a local favorite. Thepla, spiced flatbreads with fenugreek leaves, and Handvo, a savory lentil and rice cake, are also popular. These dishes are often enjoyed with fresh yogurt, pickles, and chutneys, offering a taste of Kalol's unique and flavorful food culture.
        </h2>
        
      </Box>
      
    </Layout>
  );
};

export default About;