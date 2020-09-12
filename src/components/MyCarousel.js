import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const MyCarousel=()=>{
    return (
            <Carousel autoPlay className="justify-content-ceter">
                <div>
                    <img src={require('./assets/1.jpg')} alt="kep1"/>
                    <p className="legend">Szoftverfejlesztő</p>
                </div>
                <div>
                    <img src={require('./assets/2.jpg')} alt="kep2"/>
                    <p className="legend">Mechatroniks</p>
                </div>
                <div>
                    <img src={require('./assets/3.jpg')} alt="kep3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={require('./assets/4.jpg')} alt="kep1"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('./assets/5.jpg')} alt="kep2"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('./assets/6.jpg')} alt="kep3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
}