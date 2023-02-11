import React from "react";
import { Container, Header } from "semantic-ui-react";
import './AluminiList.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AluminiLsit = () =>{

    var settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        pauseOnHover: false,
      };

    return(
        <div className="alumini">
        <Container className="aluminilist">
            <Header>
                A - Z, You name the company and You will find our alumni.
            </Header>
            <div>
                <Slider {...settings}>
                    <p>Adobe</p>
                    <p>VMware</p>
                    <p>Walmart</p>
                    <p>PayPal</p>
                    <p>Teach Mahindra</p>
                    <p>Oracle</p>
                    <p>Qualcomm</p>
                    <p>Amazon</p>
                    <p>CTS</p>
                    <p>TCS</p>
                    <p>Accenture</p>
                    <p>Bosch</p>
                    <p>Google</p>
                    <p>CISCO</p>
                    <p>Virtusa</p>
                    <p>Intuit</p>
                    <p>Verizon</p>
                    <p>Deloitte</p>
                    <p>Samsung</p>
                    <p>Infosys</p>
                    <p>Zoho</p>
                    <p>Inmobi</p>
                    <p>Thought works</p>
                </Slider>
            </div>
        </Container>
        </div>
    );
}

export default AluminiLsit;