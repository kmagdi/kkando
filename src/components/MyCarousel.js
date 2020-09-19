import React from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MyCarousel.css';
import csvToJSON from './csvToJSON';

export const MyCarousel=()=>{
    let request = new XMLHttpRequest();  
    request.open("GET", 'https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletekKK.csv', false);   
    request.send(null); 
    let csvData = [];
    let kerdesekSor = [];
    let jsonObject = request.responseText.split(/\r?\n|\r/);
    for(let i=0;i<jsonObject.length;i++){
        if(i>0 && jsonObject[i]!==''){
            if(i == 1){
                kerdesekSor = [...jsonObject[i]];
            }else{
                csvData.push(jsonObject[i].split(';'));
            }
        }
    }
    return (
        <Carousel id="szakok" className="justify-content-center" interval={null} prevLabel="Előző szak" nextLabel="Következő szak">
            {
                csvData.map(i=>{
                    //console.log(i);
                    return (
                        <Carousel.Item key={i[0]}>
                            <img src={require('./assets/' + i[0] + '.jpg')} alt="kep1" />
                            <Carousel.Caption>
                                <Link to={"/kkando/szak/" + i[0]}><h2>{i[4]}</h2></Link>
                                <p>{i[5]}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })
                /*adatok.map(i => console.log(
                ))*/
            }
            {/*<Carousel.Item>
                <img src={require('./assets/T1.jpg')} alt="kep1" />
                <Carousel.Caption>
                    <Link to={"/kkando/szak/T1"}><h2>Szoftverfejlesztő</h2></Link>
                    <p>description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={require('./assets/T3.jpg')} alt="kep2" />
                <Carousel.Caption>
                <Link to={"/kkando/szak/T3"}><h2>Mechatronikai technikus</h2></Link>
                    <p>description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={require('./assets/SZ1.jpg')} alt="kep3" />
                <Carousel.Caption>
                <Link to={"/kkando/szak/SZ1"}><h2>Asztalos</h2></Link>
                    <p>description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={require('./assets/SZ2.jpg')} alt="kep4" />
                <Carousel.Caption>
                <Link to={"/kkando/szak/SZ2"}><h2>Mechatronikus karbantartó</h2></Link>
                    <p>description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={require('./assets/T4.jpg')} alt="kep5" />
                <Carousel.Caption>
                <Link to={"/kkando/szak/T4"}><h2>Automatikai technikus</h2></Link>
                    <p>description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={require('./assets/T2.jpg')} alt="kep6" />
                <Carousel.Caption>
                <Link to={"/kkando/szak/T2"}><h2>Gépgyártás-technológiai technikus</h2></Link>
                    <p>description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={require('./assets/SZ3.jpg')} alt="kep7" />
                <Carousel.Caption>
                <Link to={"/kkando/szak/SZ3"}><h2>Hegesztő</h2></Link>
                    <p>description</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={require('./assets/G1.jpg')} alt="kep8" />
                <Carousel.Caption>
                <Link to={"/kkando/szak/G1"}><h2>Képző- és iparművészeti munkatárs</h2></Link>
                    <p>description</p>
                </Carousel.Caption>
            </Carousel.Item>*/}
        </Carousel>
    );
}
