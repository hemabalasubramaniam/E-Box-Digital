import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Image, Button } from "semantic-ui-react";
import Achievements from "../Achievements/Achievements";
import AluminiLsit from "../AluminiList/AluminiList";
import Offerings from "../Offerings/Offerings";
import UserReviews from "../UserReviews/UserReviews";
import './Landingpage.css';

const Landingpage = () =>{

    const location = useLocation();

    const AboutRef = React.useRef();
    const scrollToAbout = () =>{
        AboutRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }

    useEffect (() =>{
        if(location.hash=="#aboutus"){
            scrollToAbout();
        }
    })

    return(
        <>
        <div className="homelogo">
            <Image className="homeimg" src={require('../Image/homeimage.png')} />
            <div className="hometext">
                <h1>Experience the Practice-oriented Learning</h1>
                <p>The Powerful AI Driven EduTech Ecosystem built through 20 Years of Research in EduTech and Learning Sciences</p>
                <Button className="getstarted" secondary>Get Started</Button>
            </div>
        </div>
        <AluminiLsit />
        <Offerings />
        <Achievements />
        <div className="whyebox">
            <p className="webox">Why EBox ?</p>
            <Image src={require('../Image/whyebox.png')} />
        </div>
        <UserReviews />
        <div className="eboxstory" ref={AboutRef}>
            <p className="story">E-Box Evolution</p>
            <Image src={require('../Image/eboxstory.png')} />
        </div>
        </>
    );
} 

export default Landingpage;