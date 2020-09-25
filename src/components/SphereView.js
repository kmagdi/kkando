import React from "react";
import ReactPannellum from "react-pannellum";
import './SphereView.css'
 
export const SphereView = (props) => {
    // const goFullscreen = () => {
    //     toggleFullscreen();
    // };
    return (
        <div className={'panorama-container'}>
            {/* <div className={'panorama-overlay'} onClick={()=>goFullscreen()}></div> */}
            <ReactPannellum
                id={"panorama"+props.id}
                sceneId={"scene"+props.id}
                imageSource={props.image}
                config={{
                    autoLoad:true,
                    showZoomCtrl:false,
                    mouseZoom:'fullscreenonly',
                    showFullscreenCtrl:true,
                    disableKeyboardCtrl:true,
                }}
            />
        </div>
    );
}
