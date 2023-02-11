import React from 'react';
import { Feed, Card, Image, Accordion,Icon,Segment, Header } from 'semantic-ui-react';
import { AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import './Coursecontent.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from 'html-react-parser';

const Coursecontent = (props) =>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800  
      };


    // console.log("props", props.data);
    return(
        <>
        <Slider {...settings}>
        {
            (props.data!=undefined ) ? 
                props.data.map((x) =>{
                return <Card className='courses'>
                    <Card.Content>
                    <Card.Header>Course Contents</Card.Header>
                    </Card.Content>
                    <Card.Content>
                    <Feed>
                        <Feed.Event className='heading'>
                        <Feed.Content>
                            <h3>{x.name}</h3>
                            <Feed.Summary>
                                <div className='contentheader'>
                                    <div>
                                        <Image className='youtubelogo' src={require('../Image/youtubelogo.png')} />
                                        <span className='text'>{x.videoCount} videos</span>
                                    </div>
                                    <div>
                                        <Image className='timer' src={require('../Image/timer.png')} />
                                        <span className='text'>{x.duration} hours duration</span>
                                    </div>
                                    <div className='row2'>
                                        <Image className='programs' src={require('../Image/programs.png')} />
                                        <span className='text'>{x.programs} programs</span>
                                    </div>
                                    <div className='row2'>
                                        <Image className='assesments' src={require('../Image/assesments.png')} />
                                        <span className='text'>{x.assessmentCount} Assesments</span>
                                    </div>
                                </div>
                            </Feed.Summary>
                            </Feed.Content>
                        </Feed.Event>

                        <Accordion>
                        {(props.data !== undefined) ?
                                x.moduleList.map((item, index) => (
                                    <AccordionItem key={index}>
                                        {({open}) => (
                                            <>
                                                    <Segment >
                                                <div className='accordionheader'>
                                                    <AccordionHeader>
                                                        {open ?
                                                        <Header floated='right'>
                                                            <Icon className='caret up' />
                                                            <Icon className='unlock alternate' />
                                                            </Header> :
                                                            <Header floated='right'>
                                                            <Icon className='caret down ' />
                                                            <Icon className='lock ' />
                                                        </Header> }
                                                        <Header floated='left'>
                                                            <div>
                                                                <h3 className={`accordion-title ${open ?<Icon className='caret up ' />  : <Icon className='caret down ' />}`}>{item.name} </h3>
                                                            </div>
                                                        </Header>
                                                    
                                                    </AccordionHeader>
                                                </div>

                                                    <AccordionBody>
                                                        <div className="accordion-body">
                                                            {parse(item.desc)}
                                                        </div>
                                                    </AccordionBody>
                                                    </Segment>
                                            </>
                                        )}
                                    </AccordionItem>
                                )) : null}
                        </Accordion>
                        
                        
                    </Feed>
                    </Card.Content>
            </Card>


            }) : null 
        }
        </Slider>
        </>
    );
}

export default Coursecontent;