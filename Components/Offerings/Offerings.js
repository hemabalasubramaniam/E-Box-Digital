import React, { useEffect } from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import './Offerings.css';
import { Link, useLocation } from "react-router-dom";

const Offerings = () =>{

    const location = useLocation();

    const programsRef = React.useRef();

    const scrollToPrograms = () =>{
        programsRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }

    useEffect (() =>{
        console.log("Location.hash", location.hash);
        if(location.hash == "#programs"){
            scrollToPrograms()
        }
    })

    return(
        <div className="offerings" ref={programsRef}>
        <p className="offeringstext" >Offerings</p>
        <div className="courseofferings">
                <div>
                    <Link to='/tracks/it'>
                        <Card>
                            <p className="cardhead">Program</p>
                            <Image src={require('../Image/Ittech.png')} />
                            <Card.Content>
                            <Card.Header>IT TECH FOUNDATION</Card.Header>
                            </Card.Content>
                        </Card>
                    </Link>
                </div>

            <div>
            <Link to='/tracks/electrical'>
                <Card>
                    <p className="cardhead">Program</p>
                    <Image src={require('../Image/Electrical.png')} />
                    <Card.Content>
                    <Card.Header>ELECTRONIC SKILL</Card.Header>
                    </Card.Content>
                </Card>
            </Link>
            </div>

            <div>
            <Link to='/tracks/mechanical'>
                <Card>
                    <p className="cardhead">Program</p>
                    <Image src={require('../Image/Mechanical.png')} />
                    <Card.Content>
                    <Card.Header>MECHANICAL</Card.Header>
                    </Card.Content>
                </Card>
            </Link>
            </div>
        </div>
    </div>
    );
}

export default Offerings;