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
        </Container>
     );
}
 
export default Home;
const Container = styled.div`
height : 100hv;
`
