import React, {useState, useEffect} from 'react';
import CollectData from "./CollectData"
import { MyCarousel } from './MyCarousel';  
import { MyParallax } from './MyParallax';
import { FullscreenBanner } from './FullscreenBanner';
import { InfoPanel } from './InfoPanel';
import { SphereView } from './SphereView';
import { Helper } from '../Helper';
import Preload from 'react-preload'
import csvToJSON from "./csvToJSON";
import { logDOM } from '@testing-library/react';

export const Home=()=>{

    const [csvData,setcsvData]=useState([])
    const[loaded,setLoaded]=useState(false)
    useEffect(()=>{
        if(!loaded){
            const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/reszletekKK.csv"
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

    const images = {
        head: './assets/eszt.jpg',
        head_mobile: './assets/eszt_mobile.jpg',
        other: './assets/eszt2.jpg',
        other_mobile: './assets/eszt2_mobile.jpg',
        logo: './assets/logo.png',
        panorama1: './assets/pano1.jpg',
        panorama2: './assets/pano2.jpg'
    };
    const headImg = Helper.getMODI(require(images.head+''),require(images.head_mobile+''));
    const otherImg = Helper.getMODI(require(images.other+''),require(images.other_mobile+''));
    const logoImg = require(images.logo+'');
    console.log(Object.values(images).concat(csvData.map((i)=>('./assets/' + i.kod + '.jpg'))));
    return(
        <Preload
            loadingIndicator={(
                <div style={{width:'100vw',height:'100vh',backgroundColor:'#343a40',color:'white'}}>
                    <div className="kozep">
                        {/* <h1>Képek betöltése</h1> */}
                        <img src={require('./assets/loading.gif')} />
                    </div>
                </div>
            )}
            images={Object.values(images).concat(csvData.map((i)=>('./assets/' + i.kod + '.jpg')))}
        >
            <>
                <FullscreenBanner id="home" bgimage={headImg} image={logoImg} title={'UNDER CONSTRUCTION '+(Helper.isMobile()?'(Mobil verzió)':'(Asztali verzió)')} />

                <InfoPanel id="iskola" size={6} type="centerInfo" title="Iskolánkról..." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus. Fusce malesuada arcu est, volutpat pellentesque est tincidunt vel. Quisque porta erat orci, vel efficitur sem cursus id. Curabitur dignissim lorem in dui aliquam, in cursus metus volutpat. Suspendisse porttitor augue mollis nibh dignissim, vel suscipit tortor placerat. Nulla faucibus, justo et ornare molestie, tortor purus faucibus lectus, at efficitur erat ex et mauris. In congue diam non risus suscipit ultrices." />

                <MyParallax img={otherImg} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="par1" bold={true} type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} text='"Az iskola arra való, hogy az ember megtanuljon tanulni, hogy felébredjen tudásvágya, megismerje a jól végzett munka örömét, megízlelje az alkotás izgalmát, és megtalálja a munkát, amit szeretni fog." (Szentgyörgyi Albert) [DESIGN MÉG NEM KÉSZ]' from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>

                <InfoPanel id="else" className="sidebyside-margins" type="sideBySide" title="Something else" text="Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Ne egyből parallax után következzenek a szakok." image={headImg} from={{opacity:0,x:200,ease:'power4.out'}} to={{opacity:1,x:0,ease:'power4.out',stagger:{amount:0.2}}} />

                <MyParallax img={otherImg} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="par2" bold={true} type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} text='“Egyikünk élete sem könnyű. És akkor? Legyen bennünk kitartás, és mindenekelőtt bízzunk önmagunkban. Hinnünk kell benne, hogy tehetségesek vagyunk valamiben, és ezt a valamit -kerül, amibe kerül- meg tudjuk valósítani.” (Marie Curie) [DESIGN MÉG NEM KÉSZ]' from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>

                <InfoPanel id="else2" className="sidebyside-margins" type="sideBySide" title="Something else" text="Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Valami más is jöhetne ide, csak hogy ne egyből parallax után következzenek a szakok. Ne egyből parallax után következzenek a szakok." reverse={true} image={headImg} from={{opacity:0,x:-200,ease:'power4.out',stagger:{amount:0.2}}} to={{opacity:1,x:0,ease:'power4.out'}} />

                <div id="szakok" className="row justify-content-center">
                    <MyCarousel kepek={csvData} />
                </div>

                <div className={'panorama-container-container'}>
                    <SphereView id="1" image={require(images.panorama1+'')} />
                    <SphereView id="2" image={require(images.panorama2+'')} />
                </div>

                <CollectData bgimage={headImg} />
            </>
        </Preload>

    )
}