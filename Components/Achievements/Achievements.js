import React, { useEffect } from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { achievement } from './AchievementJson';
import './Achievement.css';
import { useLocation } from 'react-router-dom';

const Achievements = () =>{

    const location = useLocation();

    const AchievementsRef = React.useRef();
    const scrollToAchievements = () =>{
        AchievementsRef.current.scrollIntoView({
            behavior:"smooth"
        })
    }

    useEffect (() =>{
        if(location.hash=="#achievements"){
            scrollToAchievements();
        }
    })

    return(
        <div className='eboxachievements' ref={AchievementsRef}>
        <p className="achievehead">Our Achievements</p>
        <div className='achievements'>
            <div className='flex1'>
                <Image src={require('../Image/achieve1.png')}/>
                <h1 className='count'>{achievement[0].count}</h1>
                <p className='category'>{achievement[0].category}</p>
            </div>
            <div>
                <Image src={require('../Image/achieve2.png')}/>
                <h1 className='count'>{achievement[1].count}</h1>
                <p className='category'>{achievement[1].category}</p>
            </div>
            <div>
                <Image src={require('../Image/achieve3.png')}/>
                <h1 className='count'>{achievement[2].count}</h1>
                <p className='category'>{achievement[2].category}</p>
            </div>
            <div>
                <Image src={require('../Image/achieve4.png')}/>
                <h1 className='count'>{achievement[3].count}</h1>
                <p className='category'>{achievement[3].category}</p>
            </div>
        </div>
        </div>
    );
}

export default Achievements;