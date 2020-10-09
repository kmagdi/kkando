import React from 'react';
import './MosaicGallery.css';

export const MosaicGallery = (props) => {
    return (
        <div ref={props.animRef} className="mosaic-gallery">
            <h2 style={{marginBottom:'0.75rem'}}>{props.title}</h2>
            {[...props.images].map((i,index)=>(
                <div key={"mosaicImage"+index} className={"mosaic-image-container fade-int " + props.id}>
                    <img className="mosaic-image" src={i} title={"mosaicImage"+(index+1)} onClick={()=>window.open(i,'_blank')} />
                </div>
            ))}
        </div>
    );
}
