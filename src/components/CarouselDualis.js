import React, { useState, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MyCarousel.css';
import Truncate from 'react-truncate';

export const CarouselDualis=(props)=>{
    /*const [activeIndex,setActiveIndex] = useState(0);
    useRef(()=>{
        setActiveIndex(props.activeIndex);
    });*/
    return (
        <Carousel id="dualis" activeIndex={props.activeIndex} className="justify-content-center szakmagaleria" interval={null} prevLabel="Előző partner" nextLabel="Következő partner" onSelect={
            props.onselect
        }>
        {
            props.kepek.map(i=>{
                //const kep = Helper.getMODI(require('./assets/' + i.kod + '.jpg'),require('./assets/' + i.kod + '_mobile.jpg'));
                return (
                    <Carousel.Item key={i[1].kod}>
                        <img src={i[0]} alt="kep1" />
                        <Carousel.Caption>
                            <Link to={"/dualis/" + i[1].kod}><h2>{i[1].nev}</h2></Link>
                            <Truncate lines={1} ellipsis={<>...<br /><Link to={"/dualis/" + i[1].kod}><span className="read-more">Tovább</span></Link></>}>
                                <p>Leírás</p>
                            </Truncate>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }
        </Carousel>
    );
}
