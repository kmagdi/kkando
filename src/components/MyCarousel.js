import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MyCarousel.css';
import Truncate from 'react-truncate';

export const MyCarousel=(props)=>{
    const addTooltips = () => {
        if(document.querySelector('.ind > .carousel-indicators > li') !== null){
            document.querySelectorAll('.ind > .carousel-indicators > li').forEach((i,index)=>{
                const name = ('ind-tt-'+index);
                let obj = document.createElement('p');
                if(document.querySelector('#'+name) === null){
                    obj.setAttribute('id',name);
                    obj.setAttribute('class','ind-tt');
                    //i.parentNode.insertBefore(obj,i.previousElementSibling);
                    //i.before(obj);
                    obj.innerHTML = document.querySelector('.ind .carousel-inner > .carousel-item:nth-child('+(index+1)+') > .carousel-caption h2').innerHTML;
                    i.appendChild(obj);
                }
                i.addEventListener('mouseenter',()=>{
                    if(!i.classList.contains('ind-tt-act')){
                        let classes = [...i.classList];
                        classes.push('ind-tt-act');
                        i.setAttribute('class',classes.join(' ').trim());
                    }
                });
                i.addEventListener('mouseleave',()=>{
                    if(i.classList.contains('ind-tt-act')){
                        let classes = [...i.classList];
                        delete classes[classes.indexOf('ind-tt-act')];
                        i.setAttribute('class',classes.join(' ').trim());
                    }
                });
            });
        }
    }
    useEffect(()=>{
        addTooltips();
    })
    return (
        <Carousel id="szakok" className="justify-content-center szakmagaleria ind" interval={null} prevLabel="Előző szak" nextLabel="Következő szak">
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
