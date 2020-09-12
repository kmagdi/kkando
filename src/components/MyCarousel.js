import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link,BrowserRouter} from "react-router-dom"      

export const MyCarousel=()=>{

    return (
            <Carousel autoPlay className="justify-content-ceter" infiniteLoop >
                <div>
                    <img src={require('./assets/1.jpg')} alt="kep1"/>
                    <p className="legend "><span className="h1" ><Link to={"/szak1"}>Szoftverfejlesztő</Link></span></p>
                </div>
                <div>
                    <img src={require('./assets/2.jpg')} alt="kep2"/>
                    <p className="legend"><span className="h1" >Mechatronikai technikus</span></p>
                </div>
                <div>
                    <img src={require('./assets/3.jpg')} alt="kep3" />
                    <p className="legend"><span className="h1">Legend 3</span></p>
                </div>
                <div>
                    <img src={require('./assets/4.jpg')} alt="kep4"/>
                    <p className="legend"><span className="h1">Legend 4</span></p>
                </div>
                <div>
                    <img src={require('./assets/5.jpg')} alt="kep5"/>
                    <p className="legend"><span className="h1">Elektronikai technikus</span></p>
                </div>
                <div>
                    <img src={require('./assets/6.jpg')} alt="kep6" />
                    <p className="legend"><span className="h1">Gépgyártás-technológiai technikus</span></p>
                </div>
                <div>
                    <img src={require('./assets/7.jpg')} alt="kep7"/>
                    <p className="legend"><span className="h1">Hegesztő</span></p>
                </div>
                <div>
                    <img src={require('./assets/8.jpg')} alt="kep8" />
                    <p className="legend"><span className="h1">Képző- és iparművészeti munkatárs</span></p>
                </div>
            </Carousel>
        );
}