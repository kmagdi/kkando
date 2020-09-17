import React from 'react'
import ReactHowler from 'react-howler'
import zene from "./assets/T1.mp3"

export const Music2=()=> {
    return (
      <ReactHowler  src={[zene]}  playing={true}   />
        )
    }