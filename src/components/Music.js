import React from 'react'
import ReactHowler from 'react-howler'
import zene from "./assets/T1.mp3"


class Music extends React.Component {
  constructor () {
   super()
    this.state = {
      playing: false
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handlePause = this.handlePause.bind(this)
  }

  handlePlay () {
    this.setState({
      playing: true
    })
  }

  handlePause () {
    this.setState({
      playing: false
    })
  }

  render () {
    return (
      <div onLoad={this.handlePlay}>
        <ReactHowler
          src={[zene]}
          playing={this.state.playing}
        />
        <button onClick={this.handlePlay}>Play</button>
        <button onClick={this.handlePause}>Pause</button>
      </div>
    )
  }
}

export default Music