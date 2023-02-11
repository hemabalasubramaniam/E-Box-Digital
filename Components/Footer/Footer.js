import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";
import './Footer.css';

const Footer = () =>{
    return(
        <div className="footer">
        <Segment clearing>
            <Header floated='left'>
                <div className="footercontent">
            <Image className="footerlogo" src={require('../Image/footerlogo.png')} />
                <div>
                    <Image className="footertext" src={require('../Image/footername.png')} />
                    <p className="text1">We Revolutionise Engineering &<br/> Technology Learning</p>
                
            </div>
            </div>
            </Header>
            <div className="footerright">
                <Header floated='right'>
                <p>Connect with Us on</p>
                <Image src={require('../Image/facebook.png')}/>
                <Image src={require('../Image/linkedin.png')}/>
                <Image src={require('../Image/twitter.png')}/>
                <Image src={require('../Image/instagram.png')}/>
                <p>Terms and Conditions</p>
                </Header>
            </div>
        </Segment>
  </div>
    );
}

export default Footer;