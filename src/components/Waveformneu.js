import React from "react";
import ReactDOM from "react-dom";
import Waveform from "./Waveform";
import "./MusicGrid.css";


import { GiConsoleController } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
class Waveformneu extends React.Component {

  state = { progress: 0, ready: false, isPlaying: false};
  
  render() {

    const src = this.props.source
    const { progress, ready, isPlaying} = this.state;

    const handleClick = newIsPlaying => {
      this.setState({isPlaying: newIsPlaying})
    }

    return (
      <>{/* <div class="test89"><button class="Test87"
        style={{ marginLeft: 10 }}
        onClick={() => {
          this.waveform.playPause();
        } }
      >
        <img src={playbutton} />
      </button> </div> */}<div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "50px",
          width: "500px",
        }}
      >




        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center"
          }}
        >
          <div class="test89"><button class="Test87"
        style={{ marginLeft: 10 }}
        onClick={() => {
          this.waveform.playPause();
        } }
      >
        {/* <img src={playbutton} /> */}
        {isPlaying ?  <FaPause/> : <FaPlay/>}
        
      </button> </div>
          <Waveform
            setIsPlaying={handleClick}
            ref={_ref => (this.waveform = _ref)}
            src={src}
            onLoading={progress => this.setState({ progress })}
            onReady={() => this.setState({ ready: true })} />
        </div>
      </div></>
    );
  }
}

export default Waveformneu