import React, { useEffect, useState } from "react";
import './Ittech.css';
import axios from 'axios';
import { Card, Image } from "semantic-ui-react";
import {Link} from 'react-router-dom';

const Ittechfoundation = () =>{

    const [coursedata,getdata] = useState('');


    useEffect (() =>{
        axios.get('https://website.e-box.co.in:8443/static/getCourseDetails?code=digital')
        .then((response) =>{
            getdata(response.data.data.collCourses[0].courses);
        })
        .catch(err =>{
            console.log("error", err);
        })
    },[])

    console.log("hello.......", coursedata);

    return(
        <div className="outerittech">
            <div className="ittech">
                <h1 className="ittechhead">IT Tech Foundation</h1>
                <p className="ittechtext">Choose from a gamut of IT Skill Courses and Enroll in them. Achieve your career goal with industry recognised Skill Courses</p>
                <div className="ittechcourses">
                    {
                        (coursedata != "")  ?
                        coursedata.map((x) =>{
                            return <Link to={`/coursetrack/${x.courseId}/${x.catalogId}`}>
                            <Card className="coursetypecard" link>
                                <Card.Content>
                                    <Card.Header>
                                        <div className="coursecardheader">
                                            <div className="divlogo">
                                                <Image className="tracklogo" src={require('../Image/tracklogo.png')} />
                                            </div>
                                            <div className="divname">
                                                <p className="cname">{x.courseName}</p>
                                            </div>
                                        </div>
                                    </Card.Header>
                                </Card.Content>
                                <Card.Content className="img">
                                        <Image className="courselogo" src={x.logo}/>
                                </Card.Content>
                            </Card>
                        </Link>
                        }) : null
                    }
                </div>
            
            </div>
        </div>
    );
}

export default Ittechfoundation;