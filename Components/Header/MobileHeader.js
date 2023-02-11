import React from "react";
import { Sidebar, Image, Icon, Menu, Grid } from "semantic-ui-react";
import './Header.css';

const Mobileheader = () =>{
    const [visible, setVisible] = React.useState(false);
    
    const handleclick = () =>{
        setVisible(!visible);
    }

    return(
        <>
         <Menu className="mobheader">
             <Menu.Menu position='left'>
                <Menu.Item>
                </Menu.Item>
                    <Image className="logo" src={require('../Image/logo.png')} />
                </Menu.Menu>
                <Menu.Menu position='right'>
        <Grid columns={1}>
            <Grid.Column>
                <span onClick={handleclick}>
                    <Icon name="bars"
                    />
                </span>
            </Grid.Column>

            <Grid.Column>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    direction="right"
                    onHide={() => handleclick()}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item className="top">
                    <Image src={require('../Image/userlogo.png')} />
                    <p className="username">Username</p>
                    </Menu.Item>
                    <div>
                    <Menu.Item >
                    Home
                    </Menu.Item>
                    <Menu.Item >
                    My Account
                    </Menu.Item>
                    <Menu.Item >
                    My Cart
                    </Menu.Item>
                    <Menu.Item>
                        Certifications
                    </Menu.Item>
                    <Menu.Item>
                        Sign Out
                    </Menu.Item>
                    </div>
                </Sidebar>
                <Sidebar.Pusher>
                </Sidebar.Pusher>
            
            </Grid.Column>
        </Grid>
                </Menu.Menu>
        </Menu>

        </>
    );
}

export default Mobileheader;