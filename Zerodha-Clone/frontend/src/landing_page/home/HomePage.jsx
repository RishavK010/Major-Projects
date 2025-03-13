import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';


function HomePage () {
    return ( 
        <div className="container-fluid">
            <Hero />
            <div className="py-5"><Stats /></div>
            <div className="py-5 bg-light"><Pricing /></div>
            <div className="py-5"><Education /></div>
            <div className="py-5 bg-light"><Awards /></div>
        </div>
     );
}

export default HomePage;