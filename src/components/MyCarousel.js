import React from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MyCarousel.css';
import Truncate from 'react-truncate';

export const MyCarousel=(props)=>{
    return (
        <Carousel id="szakok" className="justify-content-center szakmagaleria" interval={null} prevLabel="Előző szak" nextLabel="Következő szak">
        {
            props.kepek.map(i=>{
                //const kep = Helper.getMODI(require('./assets/' + i.kod + '.jpg'),require('./assets/' + i.kod + '_mobile.jpg'));
                return (
                    <Carousel.Item key={i[1].kod}>
                        <img src={i[0]} alt="kep1" />
                        <Carousel.Caption>
                            <Link to={"/szak/" + i[1].kod}><h2>{i[1].nev}</h2></Link>
                            <Truncate lines={1} ellipsis={<>...<br /><Link to={"/szak/" + i[1].kod}><span className="read-more">Tovább</span></Link></>}>
                                <p>{i[1].kinek}</p>
                            </Truncate>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }
        </Carousel>
    );
}
