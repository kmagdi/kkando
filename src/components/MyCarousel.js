import React from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MyCarousel.css';
import Truncate from 'react-truncate';
import {Helper} from '../Helper';

export const MyCarousel=(props)=>{
    return (
        <Carousel id="szakok" className="justify-content-center szakmagaleria" interval={null} prevLabel="Előző szak" nextLabel="Következő szak">
        {
            props.kepek.map(i=>{
                const kep = Helper.getMODI(require('./assets/' + i.kod + '.jpg'),require('./assets/' + i.kod + '_mobile.jpg'));
                return (
                    <Carousel.Item key={i.kod}>
                        <img src={kep} alt="kep1" />
                        <Carousel.Caption>
                            <Link to={"/szak/" + i.kod}><h2>{i.nev}</h2></Link>
                            <Truncate lines={1} ellipsis={<>... <Link to={"/szak/" + i.kod}><br /><span className="read-more">Tovább</span></Link></>}>
                                <p>{i.kinek}</p>
                            </Truncate>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }
        </Carousel>
    );
}
