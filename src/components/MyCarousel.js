import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel,Item,Caption } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
import {Link,BrowserRouter} from "react-router-dom"  
import './MyCarousel.css'    

export const MyCarousel=()=>{

    return (
            <Carousel autoPlay className="justify-content-center" >
                {/*<div>
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
                </div>*/}
                <Carousel.Item>
                    <img src={require('./assets/1.jpg')} alt="kep1" />
                    <Carousel.Caption>
                        <Link to={"/szak1"}><h3>Szoftverfejlesztő</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/2.jpg')} alt="kep2" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Mechatronikai technikus</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/3.jpg')} alt="kep3" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Title 3</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/4.jpg')} alt="kep4" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Title 4</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/5.jpg')} alt="kep5" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Elektronikai technikus</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/6.jpg')} alt="kep6" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Gépgyártás-technológiai technikus</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/7.jpg')} alt="kep7" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Hegesztő</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./assets/8.jpg')} alt="kep8" />
                    <Carousel.Caption>
                    <Link to={"/szak1"}><h3>Képző- és iparművészeti munkatárs</h3></Link>
                        <p>description</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
}