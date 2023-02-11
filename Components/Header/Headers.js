import React, { useEffect } from "react";
import {Image, Menu} from 'semantic-ui-react';
import './Header.css';
import Mobileheader from "./MobileHeader";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Headers = () =>{

    const navigate = useNavigate();

    const handleNavigate = (e) =>{
        console.log("eeeeeee", e);
        return navigate(`/${e}`)
    }

    useEffect (() =>{
        window.scrollTo(0,0);
    })

    return(
        <>
            <div className="screenheader">
             <Menu>
             <Menu.Menu position='left'>
                <Menu.Item>
                </Menu.Item>
                <Link to='/'>
                    <Image className="logo" src={require('../Image/logo.png')} />
                </Link>
                </Menu.Menu>

                <Menu.Menu position='right'>
                    <Menu.Item
                     name="PROGRAMS"
                     onClick={() => handleNavigate("#programs")}
                     />

                    <Menu.Item
                    name="ABOUT US"
                    onClick={() => handleNavigate("#aboutus")}
                    />

                    <Menu.Item
                    name="ACHIEVEMENTS"
                    onClick={() => handleNavigate("#achievements")}
                    />
                     

                    <Menu.Item
                    name="CERTIFICATIONS"
                    onClick={() => handleNavigate("")}
                    />

                    <Menu.Item>
                        <Image className="cart" src={require('../Image/cart.png')} />
                    </Menu.Item>

                    <Menu.Item>
                        <Image className="userlogo" src={require('../Image/user.png')} />
                    </Menu.Item>

                </Menu.Menu>

            </Menu>
            </div>
            <div className="mobileheader">
                <Mobileheader />
            </div>
        </>
    );
}

export default Headers;