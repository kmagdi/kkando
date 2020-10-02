import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './MyCarousel.css';
import Truncate from 'react-truncate';
import { Helper } from '../Helper';
import csvToJSON from "./csvToJSON";


export const CarouselDualis=()=>{
    const [csvData,setcsvData]=useState([])
    const[loaded,setLoaded]=useState(false)
    useEffect(()=>{
        if(!loaded){
            const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/dualis.csv"
            fetch(url)           
                .then(resp=>resp.text())
                .then(text=>{
                    const adatokJSON=csvToJSON(text, ';')
                    //console.log(adatokJSON)
                    const filtered=adatokJSON.filter(obj=>obj.kod!==undefined&&obj.kod!=='0'&&obj.kod!=="")
                    setcsvData(filtered)
                },[])
            setLoaded(true)
        }
    })

     //console.log(Object.values(images).concat(csvData.map((i)=>('./assets/' + i.kod + '.jpg'))));
    let dualisImages = csvData.map((i)=>([Helper.getMODI(require('./assets/' + i.kod + '.jpg'),require('./assets/' + i.kod + '_mobile.jpg')),i]));
    


    return (
        <Carousel id="dualis" className="justify-content-center szakmagaleria" interval={null} prevLabel="Előző " nextLabel="Következő ">
        {
            dualisImages.map(i=>{
                //const kep = Helper.getMODI(require('./assets/' + i.kod + '.jpg'),require('./assets/' + i.kod + '_mobile.jpg'));
                return (
                    <Carousel.Item key={i[1].kod}>
                        <img src={i[0]} alt="kep1" />
                        <Carousel.Caption>
                            <Link to={"/dualis/" + i[1].kod}><h2>{i[1].nev}</h2></Link>
                            <Truncate lines={1} ellipsis={<>...<br /><Link to={"/dualis/" + i[1].kod}><span className="read-more">Tovább</span></Link></>}>
                                <p>{i[1].link}</p>
                            </Truncate>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })
        }
        </Carousel>
    );
}
