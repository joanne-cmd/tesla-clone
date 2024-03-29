import React from "react";
import styled from "styled-components";
import Section from "./Section";
const Home = () => {
    return ( 
        <Container>
            <Section
                title="model s"
                description= "Order online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                 title="model y"
                 description= "Order online for Touchless Delivery"
                 backgroundImg="model-y.jpg"
                 leftBtnText="Custom order"
                 rightBtnText="Existing inventory"
            />
            <Section
                title="model 3"
                description= "Order online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
             />
            <Section
                title="model x"
                description= "Order online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
             />
             <Section
                 title="Lowest Cost Solar Panels in America"
                 description= "Money-back guarantee"
                 backgroundImg="solar-panel.jpg"
                 leftBtnText="Order now"
                 rightBtnText="learn more"
             />
               <Section
                    title="Solar for new Roofs"
                    description= "Solar Roof Less Than a New Roof Plus Solar Panels"
                    backgroundImg="solar-roof.jpg"
                    leftBtnText="Order now"
                    rightBtnText="learn more"
             />
               <Section
                 title="Accessories"
                 description= ""
                 backgroundImg="accessories.jpg"
                 leftBtnText="Shop now"  
             />

        </Container>
     );
}
 
export default Home;
const Container = styled.div`
height : 100hv;
z-index: 10;
`
