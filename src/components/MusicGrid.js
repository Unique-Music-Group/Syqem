//react imports
import './MusicGrid.css';
import React, { useEffect } from "react"
import { useState } from "react";
import { withTheme } from "styled-components";
import dings12 from "../img/sl.mp3"
import ai from "../img/ai.mp3"
import is from "../img/is.mp3"
import dbrs from "../img/dbrs.mp3"
import rm from "../img/rm.mp3"
import fu from "../img/fu.mp3"
import sfu from "../img/sfu.mp3"
import olt from "../img/olt.mp3"
import ftte from "../img/ftte.mp3"
import dpm from "../img/dpm.mp3"
import dpmr from "../img/dpmr.mp3"
import htge from "../img/htge.mp3"
import rsn from "../img/rsn.mp3"


//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

//Asset import

import Waveformneu from "../components/Waveformneu.js";
import { HiDownload } from "react-icons/hi";
import { FiPlay } from "react-icons/fi";






function MusicGrid(){

 
        return(
          
           <><div class="upper "></div>
          <div class="upper1 "><h1>PRELISTEN THE TRACKS</h1></div>
           <div class="playlist-item">
            <div class="left">
              <div class="test2">
                <p>
                  01
                </p>
              </div>
              <div class="test">
                <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                <div class="play-btn">
                <FiPlay />
                  <neu />
                </div>
              </div>
              <div class="test3 col-3">
                <h5>
                  Artifiial Irrelephants
                </h5>
                <p>
                  Syqem
                </p>
              </div>

              <div class="tes">

                <Waveformneu source={ai}/>

              </div>
            </div>
            <div class="center">
              <p>
                3:17
              </p>
            </div>
            <div class="right">
              <div>
              <HiDownload/>

              </div>
              <div>
              <HiDownload/>
              </div>
            </div>
          </div><div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    02
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    Shadows = Light
                  </h5>
                  <p>
                    Syqem
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={dings12} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>

<a href="https://lockurl.netlify.app/#eyJ2IjoiMC4wLjEiLCJlIjoiTkxOVWRicjZWa3Q0T3k1aHcyMi9rc09LQUsyaVRFdk0zLzBiZHhZQWpFUzlBNUZacDNUNFY3OHhUTlpVMUQzSHdqRGk1QWNiOW1QSHp6VUFlS2xocVIvOGxTUC9uYlZ4emxqVU96U09nazRIdVhlWjVIb1g2TW9HOVFhV3prb1hMdFJLcUhiSWVqdnF4YnoyL0tsUnJTRmdFbjc2b1ZHb0srYTFDTWpBQXpMbXNTWVBrRG9zdVJQcENWekVXVVV1TnBWNFdUN0gyTnFpU3p3Z2pTRjBOYW13Mk5Hb1FvTDNQU0I5NGY5SDBJL092SkRxcm9mRnVCMVR2UT09IiwicyI6Inl6L1lNa0FDZC95WUlaNmo3TTVxSEE9PSIsImkiOiJsZnFUN2hxQ0l2UFNDNGFwIn0=" download="MyExampleDoc" target='_blank'>
   <HiDownload/>
</a>
                

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    03
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    Inside
                  </h5>
                  <p>
                    Syqem
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={is} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
            <div class="left">
              <div class="test2">
                <p>
                  04
                </p>
              </div>
              <div class="test">
                <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                <div class="play-btn">
                <FiPlay/>
                  <neu />
                </div>
              </div>
              <div class="test3 col-3">
                <h5>
                  Debris
                </h5>
                <p>
                  Syqem
                </p>
              </div>

              <div class="tes">

                <Waveformneu source={dbrs} />
              </div>
            </div>
            <div class="center">
              <p>
                3:17
              </p>
            </div>
            <div class="right">
              <div>
              <HiDownload/>

              </div>
              <div>
              <HiDownload/>
              </div>
            </div>
          </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    05
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    Remember Me
                  </h5>
                  <p>
                    SYQEM
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={rm} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    06
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    Fucked Up
                  </h5>
                  <p>
                    SYQEM
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={fu} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    07
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    (Still) Fucked Up
                  </h5>
                  <p>
                    SYQEM
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={sfu} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    08
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    One Last Time
                  </h5>
                  <p>
                    SYQEM
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={olt} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    09
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    Forever Till The End
                  </h5>
                  <p>
                    SYQEM
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={ftte} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    10
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    Dopamine
                  </h5>
                  <p>
                    SYQEM
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={dpm} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    11
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    How To Get Enlightened
                  </h5>
                  <p>
                    SYQEM
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={htge} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    12
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    Dopamine (Remix)
                  </h5>
                  <p>
                    SYQEM
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={dpmr} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="playlist-item">
              <div class="left">
                <div class="test2">
                  <p>
                    13
                  </p>
                </div>
                <div class="test">
                  <img src="https://bafybeiafkb3tz6n2gjt7i2w47z4lxvchpbgsxbxd7wahqzy57xgqpto6vy.ipfs.w3s.link/sq.jpg" />
                  <div class="play-btn">
                  <FiPlay/>
                  </div>
                </div>
                <div class="test3 col-3">
                  <h5>
                    The Reason
                  </h5>
                  <p>
                    SYQEM
                  </p>
                </div>


                <div class="tes">
                  <Waveformneu source={rsn} />
                </div>
              </div>
              <div class="center">
                <p>
                  3:17
                </p>
              </div>
              <div class="right">
                <div>
                <HiDownload/>

                </div>
                <div>
                <HiDownload/>
                </div>
              </div>
            </div>
            <div class="upper"></div></>
            


        
            
            
        )
        }
  
export default MusicGrid

