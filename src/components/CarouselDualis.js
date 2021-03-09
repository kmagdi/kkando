import React from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MyCarousel.css';

export const CarouselDualis=(props)=>{
    return (
        <Carousel id="dualis" activeIndex={props.activeIndex} className="justify-content-center szakmagaleria" interval={null} prevLabel="Előző partner" nextLabel="Következő partner" onSelect={
            props.onselect
        }>
        {
            props.kepek.map(i=>{
                return (
                    <Carousel.Item key={i[1].kod}>
                        <img src={i[0]} alt="kep1" />
                        <Carousel.Caption>
                            <Link to={"/dualis/" + i[1].kod}><h2>{i[1].nev}</h2></Link>
                            <Link to={"/dualis/" + i[1].kod}><span className="read-more">Tovább...</span></Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }
        </Carousel>
    );
}
