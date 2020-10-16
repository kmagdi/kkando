import React from "react";
import ReactPannellum from "react-pannellum-sata";
import './SphereView.css'
import {Helper} from '../Helper'
 
export const SphereView = (props) => {
    const thisSceneId = 'panorama'+props.id;
    // console.log(thisSceneId);
    // const loadPanorama = (overlay) => {
    //     //loadScene(thisSceneId);
    //     console.log(getAllScenes());
    //     //load();
    //     //overlay.remove();
    // };
    const content = (
        <ReactPannellum
            id={thisSceneId}
            sceneId={thisSceneId}
            imageSource={props.image}
            config={{
                //autoLoad:true,
                showZoomCtrl:false,
                mouseZoom:'fullscreenonly',
                showFullscreenCtrl:true,
                disableKeyboardCtrl:true,
                uiText:{
                    loadButtonLabel:`<div class="pnlm-load-button-content" style="background-image:url('${props.loadImage}');"><p>Kattints ide ${Helper.isVowel(String(props.hely).charAt(0))?('az '+props.hely):('a '+props.hely)} megtekintéséhez</p></div>`
                }
            }}
        />
    )
    return (
        <div key={thisSceneId} id={thisSceneId+'-container'} className={'panorama-container'}>
            {/* <div className="panorama-overlay" id={thisSceneId+'-overlay'} onClick={(e)=>loadPanorama(e.target)}>
                <h3>Katt ide tes</h3>
            </div> */}
            {
                props.extraContainer===true?
                    <div className="extra-container">
                        {content}
                    </div>
                :content
            }
            
        </div>
    );
}
