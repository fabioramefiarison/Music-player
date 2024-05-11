import React, { useEffect, useState } from "react";
import photo from '../images/photo.jpg'
import musique from '../musique/AARON PRETRA feat KEMYRAH  ZANAKI EVA RAP GASY 2022.mp3'

function toDeuxPoint(nombre) {
    let nbrAvecDeuxPonts = ''
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] === '.') {
            nbrAvecDeuxPonts += ":"
        }
        else{
        nbrAvecDeuxPonts += nombre[i]
        }
    }
    return nbrAvecDeuxPonts
}

function Baniere() {
    const [audioPlay, setAudioPlay] = useState(false)
    const [CurrentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(0.5)

    const audioRef = React.createRef()

    const handlePlayPause = () => {
        const audio = audioRef.current
        setAudioPlay(!audioPlay)

        if (audioPlay) {
            audio.pause()
        }
        else{
            audio.play()
        }
    }
const HandleTimeUpdate = (e)=>{
    const newTime = e.target.value
    setCurrentTime(newTime)
    audioRef.current.CurrentTime = newTime
}

const HandleVolumeChange = (e) =>{
    const newVolume = e.target.value
    audioRef.current.volume = newVolume
    setVolume(newVolume)
}

    return <div id="baniere">
        <section>
            <div>
            <audio id="myAudio" 
                        src={musique}
                        ref={audioRef}  
            ></audio>
                 <img src={photo} alt="" />
                 <h3 className="titre">Parano</h3>
                 <p className="nom-artiste">Agrad</p>
                 <input type="range" value={CurrentTime} min={0} max={1} onChange={HandleTimeUpdate}/>
                 <input type="range" value={volume} min={0} max={1} step={0.01} onChange={HandleVolumeChange}/>
                 <p id="time">
                    <span className="time-begin">00</span>
                    <span className="time-end">03:45</span>
                </p>
                <p className="control">
                   <i className="fas fa-backward"></i>
                   <i className={ audioPlay ? 'fas fa-pause-circle' : 'fas fa-play-circle'} 
                      onClick={handlePlayPause}></i>
                   <i className="fas fa-forward"></i> 
                </p>

            </div>
        </section>
        <section>
                <h1>RESPECT A TOUS <span className="opacity">LES PEUPLES</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <span className="opacity">Nobis,provident! Lorem ipsum dolor sit amet.</span></p>
                <div>voir plus</div>
        </section>
    </div>
}

export default Baniere;