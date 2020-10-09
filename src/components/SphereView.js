import React from "react";
import ReactPannellum from "react-pannellum";
import './SphereView.css'
 
export const SphereView = (props) => {
    // const goFullscreen = () => {
    //     toggleFullscreen();
    // };
    const content = (
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
    )
    return (
        <div className={'panorama-container'}>
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
