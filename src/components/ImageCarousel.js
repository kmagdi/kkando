import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageCarousel.css';
import csvToJSON from './csvToJSON';
import { Helper } from '../Helper';

export const ImageCarousel=(props)=>{
    const defaultNum = 0;
    const [loaded,setLoaded]=useState(false)
    const [kepek,setKepek]=useState(defaultNum)
    //useEffect(()=>{
        if(!loaded){
            const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/szakgallery.csv"
            fetch(url)
                .then(resp=>resp.text())
                .then(text=>{
                    const adatokJSON=csvToJSON(text, ';');
                    const filtered=adatokJSON.filter(obj=>obj.kod===props.kod);
                    setKepek(filtered[0].kepekszama);
                    //console.log(kepek);
                },[])
            //setKod(props.kod);
            setLoaded(true);
        }
    //},[]);
    const overlay = (image)=>{
        return (
            <div className="row image-carousel-overlay" onClick={()=>window.open(image, '_blank')}>
                <div className="col align-self-center">
                    <h3>Kattints a kép megnyitásához</h3>
                </div>
            </div>
        )
    };
    let images = [];
    if(kepek > defaultNum){
        for(let i=0;i<(kepek);i++){
            const index = (i+1);
            // const kep = require('./assets/szak/'+props.kod+'/gallery/'+prefix+index+'.jpg');
            const kep = Helper.isMobile()?('https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/gallery/'+props.kod+'/galleryimg'+index+'.jpg'):('https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/gallery/'+props.kod+'/galleryimg'+index+'.jpg');
            images.push(
                <Carousel.Item key={"kep"+index}>
                    {overlay(kep)}
                    <img src={kep} alt={"kep"+index} />
                </Carousel.Item>
            );
        }
    }else{
        images.push(
            <Carousel.Item key={"kep0"}>
                <img src={require('./assets/0.jpg')} alt={"kep0"} />
                <Carousel.Caption>
                    <h3>Nincs feltöltött kép a szakhoz</h3>
                </Carousel.Caption>
            </Carousel.Item>
        );
    }
    return (
        <Carousel id="galeria" className="justify-content-center kepgaleria" interval={null} prevLabel="Előző kép" nextLabel="Következő kép" style={{
            backgroundColor:props.bgColor
        }}>
            {images}
        </Carousel>
    );
}
