import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel,Item,Caption } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
import {Link,BrowserRouter} from "react-router-dom"  
import './MyCarousel.css'    

export const MyCarousel=()=>{

    return (
            <Carousel autoPlay className="justify-content-center">
                <Carousel.Item>
                    <img src={require('./assets/T1.jpg')} alt="kep1" />
                    <Carousel.Caption>
                        <Link to={"/szak1"}><h3>Szoftverfejlesztő</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/T3.jpg')} alt="kep2" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Mechatronikai technikus</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/SZ1.jpg')} alt="kep3" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Asztalos</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/SZ2.jpg')} alt="kep4" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Mechatronikus karbantartó</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/T4.jpg')} alt="kep5" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Automatikai technikus</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/T2.jpg')} alt="kep6" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Gépgyártás-technológiai technikus</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/SZ3.jpg')} alt="kep7" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Hegesztő</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/G1.jpg')} alt="kep8" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Képző- és iparművészeti munkatárs</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
}