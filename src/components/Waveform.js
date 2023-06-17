import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'

export default class Waveform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const { src, onLoading, onReady, onError } = this.props
    this.$el = ReactDOM.findDOMNode(this)
    this.$waveform = this.$el.querySelector('.wave')
    this.wavesurfer = WaveSurfer.create({
      container: this.$waveform,
      waveColor: 'white',
      progressColor: 'red',
      responsive: true,
      height: 50 // TODO responsive
 
    })
    this.wavesurfer.load(src)
    this.wavesurfer.on('loading', onLoading)
    this.wavesurfer.on('ready', onReady)
    this.wavesurfer.on('error', onError)
    this.wavesurfer.on('pause', () => {
      console.log(this)
      this.wavesurfer.params.container.style.opacity = 0.8
    })
    this.wavesurfer.on('play', () => {
      console.log(this)
      this.wavesurfer.params.container.style.opacity = 1
    })
  }

  componentWillUnmount() {}
  playPause = () => {
    this.wavesurfer.playPause()
    this.props.setIsPlaying(this.wavesurfer.isPlaying())
  }

  render() {
    return (
      <div className="waveform" style={{ flex: 1 }}>
        <div className="wave" />
      </div>
    )
  }
}

Waveform.defaultProps = {
  src: '',
  onReady: () => null,
  onLoading: () => null,
  onError: () => null
}
