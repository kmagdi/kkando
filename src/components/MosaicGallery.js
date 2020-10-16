import React from 'react';
import './MosaicGallery.css';

export const MosaicGallery = (props) => {
    return (
        <div /*ref={props.animRef}*/ id={props.id} className="mosaic-gallery">
            <h2 style={{marginBottom:'0.75rem'}}>{props.title}</h2>
            {[...props.images].map((i,index)=>(
                <div key={"mosaicImage"+index} className={"mosaic-image-container"/* fade-int " + props.id*/}>
                    <img className="mosaic-image" src={require('./assets/buszke/thumbnail_' + i)} title={(props.titles===undefined)?("mosaicImage"+(index+1)):(props.titles[index])} alt={(props.titles===undefined)?("mosaicImage"+(index+1)):(props.titles[index])} onClick={()=>window.open(require('./assets/buszke/' + i),'_blank')} />
                </div>
            ))}
        </div>
    );
}
