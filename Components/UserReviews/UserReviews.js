import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reviews } from "./ReviewJson";
import { Card, Image, Button } from "semantic-ui-react";
import './UserReview.css';

const UserReviews = () =>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000  
      };

    return(
        <>
        <p className="reviewhead">What do our tutors and learners say about ebox?</p>
        <div className="reviewslider">
            <Slider {...settings}>
                {
                    reviews.map((x)=>{
                        return <Card>
                            <Card.Content>
                                <div className="review">
                                    <div className="img">
                                        <Image
                                        floated='left'
                                        src={require('../Image/reviewuser.png')}
                                        />
                                    </div>
                                    <div className="desc">
                                        <Card.Header>{x.Person}</Card.Header>
                                        <Card.Description className="companyname">{x.Company}</Card.Description>
                                        <Card.Description>
                                            {x.testimonial}
                                        </Card.Description>
                                    </div>
                                </div>
                            </Card.Content>
                        </Card>
                    })
                }
            </Slider>
        </div>
        </>
    );
}

export default UserReviews;