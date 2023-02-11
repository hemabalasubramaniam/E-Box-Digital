import React from "react";
import {Card, Button} from 'semantic-ui-react';
import './Learningmode.css';

const Learningmode = () =>{
    return(
        <div className="modeoflearn">
            <div>
                <Card className="learningmode">
                    <Card.Content >
                        <div className="learningcard">
                            <p className="textbold">Self Paced Learning</p>
                            <p className="course">Java Basics for Beginners</p>
                            <p className="course">Learn JAVA Fundamentals by coding</p>
                            <Button>Rs.2950 /-</Button>
                        </div>
                    </Card.Content>
                    <Card.Description></Card.Description>
                
                        <Button>ADD TO CART</Button>

                        <Button className="checkout">CHECKOUT</Button>
                
                </Card>
            </div>
            <div>
            <Card className="learningmode">
                    <Card.Content >
                        <div className="learningcard">
                            <p className="textbold">Trainer mode Learning</p>
                            <p className="course">Java Basics for Beginners</p>
                            <p className="course">Learn JAVA Fundamentals by coding</p>
                            <Button>Rs.2950 /-</Button>
                        </div>
                    </Card.Content>
                    <Card.Description></Card.Description>
                
                        <Button>ADD TO CART</Button>

                        <Button className="checkout">CHECKOUT</Button>
                
                </Card>
            </div>
        </div>
    );
}

export default Learningmode;