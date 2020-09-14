import React from 'react';
import {ParallaxBanner} from 'react-scroll-parallax'

export const MyParallax=(props)=>{
    const _banner = (
        <ParallaxBanner
            className={"parallax-panel "+props.className}
            layers={[
                {
                    image: props.img,
                    amount:props.amount===undefined?0.15:props.amount
                }
            ]}
            style={{
                height:props.height
            }}
        >
            <>{props.children}</>
        </ParallaxBanner>
    );
    return (
        props.div === undefined
        ?
            <>{_banner}</>
        :
            <div id={props.div}>{_banner}</div>
    )
}