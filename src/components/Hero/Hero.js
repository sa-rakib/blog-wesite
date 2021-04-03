import React from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Card from '../UI/Card/Card';

const Hero = (props) => {
    return (
        <div>
            <Card>
                <div style={{padding: '50px 0'}}>
                    <Logo />
                </div>
                <Navbar/>
            </Card>
            
            
        </div>
    );
};

export default Hero;