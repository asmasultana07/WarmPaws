import React from "react";
import Slider from "../component/Slider";
import PopularSection from "../component/PopularSection";
import CareTipsSection from "../component/CareTipsSection";
import MeetSection from "../component/MeetSection";

const Home = () => {
    return(
        <div>
            <title>Home</title>
            <Slider/>
            <PopularSection></PopularSection>
            <CareTipsSection></CareTipsSection>
            <MeetSection></MeetSection>
        </div>
    )
}

export default Home