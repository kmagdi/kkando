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
        head: Helper.getMODI(require('./assets/eszt.jpg'),require('./assets/eszt_mobile.jpg')),
        other: Helper.getMODI(require('./assets/eszt2.jpg'),require('./assets/eszt2_mobile.jpg')),
        logo: require('./assets/logo.png')
    };
    //console.log(Object.values(images).concat(csvData.map((i)=>('./assets/' + i.kod + '.jpg'))));
    let carouselImages = csvData.map((i)=>([Helper.getMODI(require('./assets/' + i.kod + '.jpg'),require('./assets/' + i.kod + '_mobile.jpg')),i]));
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
            images={carouselImages.map((i)=>(i[0])).concat(Object.values(images))}
            autoResolveDelay={null}
        >
            <>
                <FullscreenBanner id="home" bgimage={images.head} image={images.logo} title={'UNDER CONSTRUCTION '+(Helper.isMobile()?'(Mobil verzió)':'(Asztali verzió)')} />

                <InfoPanel id="iskola" size={6} type="centerInfo" title="Iskolánkról..." text="A Kecskeméti SZC Kandó Kálmán Technikum a város és térsége meghatározó szakképzést folytató intézménye, a 2018/2019-es tanévben ünnepelte fennállásának 50. évfordulóját. A maximális tanulói létszám az 1990/91-es tanévben volt, 1502-en koptatták az iskolai padokat. Jelentős eredménynek tartjuk, hogy az iskola folyamatosan tartani tudja az 1100 fő körüli tanulói létszámot a demográfiai völgy ellenére is." />

                <MyParallax img={images.other} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="par1" bold={true} quote={true} author="Szentgyörgyi Albert" type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} color="white" nomargin={true} height={'40vh'} text='Az iskola arra való, hogy az ember megtanuljon tanulni, hogy felébredjen tudásvágya, megismerje a jól végzett munka örömét, megízlelje az alkotás izgalmát, és megtalálja a munkát, amit szeretni fog.' from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>

                <InfoPanel id="else" className="sidebyside-margins" type="sideBySide" title="Cím1" text="Az oktatott szakképesítések / szakmák köre folyamatosan változik, a mindenkori munkaerő-piaci igényeknek megfelelően. A jelenlegi képzési szerkezethez nagyvállalati képzőhelyek - duális partnerek - kapcsolódnak, akikkel a beiskolázási igények egyeztetésétől a szakmai vizsgák megszervezéséig szorosan együttműködünk. A kereslet-vezérelt szakképzés elvárásainak a jelenlegi nagyvállalati partnereink segítségével már most is meg tudunk felelni, célunk, hogy újabb vállalkozásokat is partnereink között tudhassunk. " image={images.head} from={{opacity:0,x:200,ease:'power4.out'}} to={{opacity:1,x:0,ease:'power4.out',stagger:{amount:0.2}}} />

                <MyParallax img={images.other} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="par2" bold={true} quote={true} author="Marie Curie" type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} color="white" nomargin={true} height={'40vh'} text='Egyikünk élete sem könnyű. És akkor? Legyen bennünk kitartás, és mindenekelőtt bízzunk önmagunkban. Hinnünk kell benne, hogy tehetségesek vagyunk valamiben, és ezt a valamit - kerül, amibe kerül - meg tudjuk valósítani.' from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>

                <InfoPanel id="else2" className="sidebyside-margins" type="sideBySide" title="Cím2" text="A technikai- technológiai fejlődés, a digitalizáció, a az ipar 4.0 technikai kihívásai a szakmai képzés számára is folyamatos kihívást jelentenek, melynek igyekszünk folyamatosan megfelelni. Ehhez jelenleg is folyik a szakképzés tartalmi és módszertani átalakítása, valamint az infrastrukturális feltételek folyamatos fejlesztése. A Kandó átfogó korszerűsítés és bővítés előtt áll, melynek előkészítő munkálatai már elkezdődtek. A Kandó mindig különös gondot fordított a szakmai oktatás mellett a kultúra közvetítésére, a tanulók egyéni képességeinek fejlesztésére, a tehetséggondozásra. Tanulóink kiemelkedő országos versenyeredményeire különösen büszkék vagyunk." reverse={true} image={images.head} from={{opacity:0,x:-200,ease:'power4.out',stagger:{amount:0.2}}} to={{opacity:1,x:0,ease:'power4.out'}} />

                <div id="szakok" className="row justify-content-center">
                    <MyCarousel kepek={carouselImages} />
                </div>

                <div className={'panorama-container-container'}>
                    <SphereView id="1" image={Helper.getMODI(require('./assets/pano1.jpg'),require('./assets/pano1.jpg'))} />
                    <SphereView id="2" image={Helper.getMODI(require('./assets/pano2.jpg'),require('./assets/pano2.jpg'))} />
                </div>

                <CollectData bgimage={images.head} />
            </>
        </Preload>

    )
}