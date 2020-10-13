import React, { useState, useEffect } from 'react';
import CollectData from './CollectData';
import { MyCarousel } from './MyCarousel';  
import { CarouselDualis } from './CarouselDualis';  
import { MyParallax } from './MyParallax';
import { FullscreenBanner } from './FullscreenBanner';
import { InfoPanel } from './InfoPanel';
import { SphereView } from './SphereView';
import { Helper } from '../Helper';
import Preload from 'react-preload';
import csvToJSON from "./csvToJSON";
import { Innovacio } from './Innovacio';
import { Buszke } from './Buszke';
import { useLocation } from 'react-router';

export const Home=()=>{

    const [csvData,setcsvData]=useState([])
    const[loaded,setLoaded]=useState(false)
    const [dualCsvData,setDualCsvData]=useState([])
    const[dualLoaded,setDualLoaded]=useState(false)
    const [innovacioCsvData,setInnovacioCsvData]=useState([])
    const[innovacioLoaded,setInnovacioLoaded]=useState(false)

    // thank w3
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    const carouselIndex = (getCookie('prevSzak')===''?0:getCookie('prevSzak'));

    useEffect(()=>{
        // MyCarousel kép betöltés
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
        // DualisCarousel kép betöltés
        if(!dualLoaded){
            const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/dualis.csv"
            fetch(url)           
                .then(resp=>resp.text())
                .then(text=>{
                    const adatokJSON=csvToJSON(text, ';')
                    const filtered=adatokJSON.filter(obj=>obj.kod!==undefined&&obj.kod!=='0'&&obj.kod!=="")
                    setDualCsvData(filtered)
                },[])
            setDualLoaded(true)
        }
        // innovacios kép betöltés
        if(!innovacioLoaded){
            const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/innovacio.csv"
            fetch(url)           
                .then(resp=>resp.text())
                .then(text=>{
                    const adatokJSON=csvToJSON(text, ';')
                    const filtered=adatokJSON.filter(obj=>obj.kod!==undefined&&obj.kod!=='0'&&obj.kod!=="")
                    setInnovacioCsvData(filtered)
                },[])
            setInnovacioLoaded(true)
        }
        //document.cookie = 'prevSzak=0';
    });
    
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    const images = {
        head: Helper.getMODI(require('./assets/head.jpg'),require('./assets/head_mobile.jpg')),
        other: Helper.getMODI(require('./assets/eszt2.jpg'),require('./assets/eszt2_mobile.jpg')),
        mozaik1: Helper.getMODI(require('./assets/mozaik1.jpg'),require('./assets/mozaik1_mobile.jpg')),
        mozdony: Helper.getMODI(require('./assets/mozdony.jpg'),require('./assets/mozdony_mobile.jpg')),
        logo: require('./assets/logo.png'),
        makerspace: Helper.getMODI(require('./assets/makerspace.jpg'),require('./assets/makerspace_mobile.jpg'))
    };
    //console.log(Object.values(images).concat(csvData.map((i)=>('./assets/' + i.kod + '.jpg'))));
    let carouselImages = csvData.map((i)=>{
        try{
            return [Helper.getMODI(require('./assets/' + i.kod + '.jpg'),require('./assets/' + i.kod + '_mobile.jpg'),require('./assets/missing.jpg')),i];
        }catch(Exception){
            return [require('./assets/missing.jpg'),i];
        }
    });
    let dualImages = dualCsvData.map((i)=>([Helper.getMODI(require('./assets/dualis/' + i.kod + '/head.jpg'),require('./assets/dualis/' + i.kod + '/head_mobile.jpg')),i]));
    let innovacioImages=innovacioCsvData.map((i)=>([Helper.getMODI(require('./assets/innovacio/' + i.kod + '/head.jpg'),require('./assets/innovacio/' + i.kod + '/head_mobile.jpg')),i]));
    return(
        <Preload
            loadingIndicator={(
                <div style={{width:'100vw',height:'100vh',backgroundColor:'#343a40',color:'white'}}>
                    <div className="kozep">
                        {/* <h1>Képek betöltése</h1> */}
                        <img src={require('./assets/loading.gif')} alt={"logo"} />
                    </div>
                </div>
            )}
            images={dualImages.map((i)=>(i[0])).concat(carouselImages.map((i)=>(i[0]))).concat(Object.values(images))}
            autoResolveDelay={null}
        >
            <>
                <FullscreenBanner id="home" bgimage={images.head} image={images.logo} title={'A jövőd itt kezdődik'} />

                <InfoPanel id="iskola" size={6} type="centerInfo" title="Kezdetek" text="A Kecskeméti SZC Kandó Kálmán Technikum a város és térsége meghatározó szakképzést folytató intézménye, a 2018/2019-es tanévben ünnepelte fennállásának 50. évfordulóját. A maximális tanulói létszám az 1990/91-es tanévben volt, 1502-en koptatták az iskolai padokat. Jelentős eredménynek tartjuk, hogy az iskola folyamatosan tartani tudja az 1100 fő körüli tanulói létszámot a demográfiai völgy ellenére is." />

                <MyParallax img={images.mozaik1} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="par1" bold={true} quote={true} author="Szentgyörgyi Albert" type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} color="white" nomargin={true} height={'40vh'} text='Az iskola arra való, hogy az ember megtanuljon tanulni, hogy felébredjen tudásvágya, megismerje a jól végzett munka örömét, megízlelje az alkotás izgalmát, és megtalálja a munkát, amit szeretni fog.' from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>

                <InfoPanel id="jelen" className="sidebyside-margins" type="sideBySide" title="A jelen" text={<>Az oktatott szakképesítések / szakmák köre folyamatosan változik, a mindenkori munkaerő-piaci igényeknek megfelelően. A jelenlegi képzési szerkezethez nagyvállalati képzőhelyek - duális partnerek - kapcsolódnak, akikkel a beiskolázási igények egyeztetésétől a szakmai vizsgák megszervezéséig szorosan együttműködünk. A kereslet-vezérelt szakképzés elvárásainak a jelenlegi nagyvállalati partnereink segítségével már most is meg tudunk felelni, célunk, hogy újabb vállalkozásokat is partnereink között tudhassunk.<br/><b>Kattints a képre a nagy méretben való megtekintéshez!</b></>} image={'szakmaszerkezet'} clickable={true} from={{opacity:0,x:200,ease:'power4.out'}} to={{opacity:1,x:0,ease:'power4.out',stagger:{amount:0.2}}} />

                <MyParallax img={images.mozdony} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="par2" bold={true} quote={true} author="Marie Curie" type="centerInfo" bgColor={"rgba(255,255,255,0.75)"} color="white" nomargin={true} height={'40vh'} text='Egyikünk élete sem könnyű. És akkor? Legyen bennünk kitartás, és mindenekelőtt bízzunk önmagunkban. Hinnünk kell benne, hogy tehetségesek vagyunk valamiben, és ezt a valamit - kerül, amibe kerül - meg tudjuk valósítani.' from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>

                <InfoPanel id="jovo" className="sidebyside-margins" type="sideBySide" title="A jövő" text="A technikai- technológiai fejlődés, a digitalizáció, a az ipar 4.0 technikai kihívásai a szakmai képzés számára is folyamatos kihívást jelentenek, melynek igyekszünk folyamatosan megfelelni. Ehhez jelenleg is folyik a szakképzés tartalmi és módszertani átalakítása, valamint az infrastrukturális feltételek folyamatos fejlesztése. A Kandó átfogó korszerűsítés és bővítés előtt áll, melynek előkészítő munkálatai már elkezdődtek. A Kandó mindig különös gondot fordított a szakmai oktatás mellett a kultúra közvetítésére, a tanulók egyéni képességeinek fejlesztésére, a tehetséggondozásra. Tanulóink kiemelkedő országos versenyeredményeire különösen büszkék vagyunk." reverse={true} image={images.makerspace} from={{opacity:0,x:-200,ease:'power4.out',stagger:{amount:0.2}}} to={{opacity:1,x:0,ease:'power4.out'}} />

                <div id="szakok" className="row justify-content-center">
                    <MyCarousel startIndex={carouselIndex} kepek={carouselImages} />
                </div>

                <InfoPanel id="sth" className="sidebyside-margins" type="sideBySide" title="Duális szakképző partnereink" text="A Kecskeméti SZC Kandó Kálmán Technikum szorosan együttműködik a duális partnerekkel, így a szakképzésről elmondható, hogy az munkaerő-piaci alapú, kereslet vezérelt szerkezetű. Ez több dologban is megnyilvánul: a beiskolázás a cégek szakképzési igényein alapul, a pályaválasztási programokban a legnagyobb cégek folyamatosan részt vesznek, a képzési program összehangolt, az oktatás folyamatát rendszeres szakmai egyeztetések kisérik." image={images.head} from={{opacity:0,x:200,ease:'power4.out',stagger:{amount:0.2}}} to={{opacity:1,x:0,ease:'power4.out'}} />

                <div id="dualis" className="row justify-content-center">
                    <CarouselDualis kepek={dualImages} />
                </div>
                

                {/* <MyParallax img={images.head} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="else1" bold={true} type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} title="Something" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus." from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax> */}

                <div id="innovacio" style={{margin:'0 0 2rem 0'}}>
                    <h2 style={{textAlign:'center',margin:'2rem 0 0 0'}}>Innovációk:</h2>
                    <Innovacio kepek={innovacioImages} />
                </div>

                {/* <div className={'panorama-container-container'}>
                    <h2>Ezeknek is kelleni fog majd egy külön szekció:</h2>
                    <SphereView id="1" image={Helper.getMODI(require('./assets/pano1.jpg'),require('./assets/pano1.jpg'))} />
                    <SphereView id="2" image={Helper.getMODI(require('./assets/pano2.jpg'),require('./assets/pano2.jpg'))} />
                </div> */}
                <MyParallax img={images.head} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="less-be-hozzank" bold={true} centered={true} type="centerInfoWide" bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} title="Less be hozzánk!" text={<>
                        <p style={{textAlign:'center'}}><b>Esetleg leírás az általános sulis panorámákról</b></p>
                        <SphereView extraContainer={true} id="1" image={Helper.getMODI(require('./assets/pano1.jpg'),require('./assets/pano1.jpg'))} />
                        <SphereView extraContainer={true} id="2" image={Helper.getMODI(require('./assets/pano2.jpg'),require('./assets/pano2.jpg'))} />
                    </>} from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>

                <Buszke></Buszke>

                <CollectData bgimage={images.head} direction={"column"} />
            </>
        </Preload>

    )
}