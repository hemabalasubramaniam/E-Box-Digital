import React, { useEffect, useState } from "react";
import './Maincontent.css';
import { Embed, Button, Accordion, Card, Icon, Header, Segment} from 'semantic-ui-react';
import { AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import axios from 'axios';
import Coursecontent from "../Coursecontent/Coursecontent";
import parse from 'html-react-parser';
import Learningmode from "../Learning Mode/Learningmode";

const Maincontent = () =>{

    const [data,getdata] = useState('');

    useEffect (() =>{
        axios.get('https://website.e-box.co.in:8443/static/getCourseDetails?catalogid=2416&level=coursetrack&id=134')
        .then((response) =>{
            // console.log("hello,,,", response);
            getdata(response.data.data);
        })
        .catch(err =>{
            console.log("error", err);
        })
    },[])

    console.log("data", data.courseList);

    return(
        <>
        {(data!="") ? <>
        <div className="maincontent">
            <div className="track3">
               <h1>{data.heading}</h1>
               <p className="mern">{parse(data.desc)}</p>
               <Button secondary>ADD TO CART</Button>
            </div>
            <div className="video">
            <video controls src="https://app.e-box.co.in/uploads/4030/Resource/MERN%20Stack.mp4"></video>
            </div>
        </div>
        {/* Mobile view */}
        <div className="accordioncontent">
            <Card>

                <Accordion >
                    <AccordionItem >
                        <AccordionHeader index={1}>
                            <Header as='h2' floated='right'>
                                <Icon name="caret down"/>
                            </Header>
                            <Header as='h2' floated='left'>
                                <p className="aboutcoursetext">About the course</p>
                            </Header>
                        </AccordionHeader>
                        <AccordionBody>
                                <p className="aboutdesc">{parse(data.webDescription)}</p>       
                        </AccordionBody>
                    </AccordionItem>
            </Accordion>

            <Accordion >
                    <AccordionItem >
                        <AccordionHeader index={2}>
                            <Header as='h2' floated='right'>
                                <Icon name="caret down"/>
                            </Header>
                            <Header as='h2' floated='left'>
                                <p className="objective">Course Objective</p>
                            </Header>
                        </AccordionHeader>
                        <AccordionBody>
                            <p className="objectivelist">{parse(data.trackInfo.Outcome)}</p>
                        </AccordionBody>
                    </AccordionItem>
            </Accordion>

                <Accordion >
                    <AccordionItem >
                        <AccordionHeader index={3}>
                   
                            <Header as='h2' floated='right'>
                                <Icon name="caret down"/>
                            </Header>
                            <Header as='h2' floated='left'>
                                <p className="contents">Table of contents</p>
                            </Header>
                      
                        </AccordionHeader>
                        <AccordionBody>
                            <Coursecontent data={data.courseList}/>
                        </AccordionBody>  
                    </AccordionItem>
                </Accordion>
                
            </Card>
        </div>
               
        <div className="aboutcontent">
                 <div className="about">
                    <p className="aboutcoursetext">About the course</p>
                    <p className="aboutdesc">{parse(data.webDescription)}</p>
                    <p className="objective">Course Objective</p>
                    <p className="objectivelist">{parse(data.trackInfo.Outcome)}</p>
                </div>
                <div className="coursecontent">
                    <Coursecontent data={data.courseList}/>
                </div>
        </div>
    
                <Learningmode />
        </> : null}
        </>
    );
}

export default Maincontent;