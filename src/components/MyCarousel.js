import React from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MyCarousel.css';
import Truncate from 'react-truncate';

export const MyCarousel=()=>{
    let request = new XMLHttpRequest();  
    request.open("GET", 'https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletekKK.csv', false);   
    let csvData = [];
    try{
        request.send(null);
        //let kerdesekSor = [];
        let jsonObject = request.responseText.split(/\r?\n|\r/);
        for(let i=0;i<jsonObject.length;i++){
            if(i>0 && jsonObject[i]!==''){
                if(i == 1){
                    //kerdesekSor = [...jsonObject[i]];
                }else{
                    csvData.push(jsonObject[i].split(';'));
                }
            }
        }
    }catch(Exception){
        csvData.push('0;0;0;asdasdasd;A szakok adatai nem elérhetők;Ha ezt látod, akkor baj van;0;0;0;0;0'.split(';'));
    }
    return (
        <Carousel id="szakok" className="justify-content-center" interval={null} prevLabel="Előző szak" nextLabel="Következő szak">
        {
            csvData.map(i=>{
                return (
                    <Carousel.Item key={i[0]}>
                        <img src={require('./assets/' + i[0] + '.jpg')} alt="kep1" />
                        <Carousel.Caption>
                            <Link to={"/kkando/szak/" + i[0]}><h2>{i[4]}</h2></Link>
                            <Truncate lines={1} ellipsis={<> <Link to={"/kkando/szak/" + i[0]}><span className="read-more">...&nbsp;Tovább</span></Link></>}>
                                <p>{i[5]}</p>
                            </Truncate>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }
        </Carousel>
    );
}
