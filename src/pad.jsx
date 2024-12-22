import React from "react";

const Pad = ({ clip }) => {
    React.useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }, [])

    const handleKeyPress = (e) => {
        if(e.keyCode === clip.keyCode) {
            playAudio();
        }
    }

    const playAudio = () => {
      const audioTag = document.getElementById(clip.keyTrigger);
      audioTag.currentTime = 0;
      audioTag.play();

      document.getElementById('display').innerText = clip.id;
    }
  
    return (
      <div onClick={playAudio} className="btn btn-info p-6 m-4 drum-pad" id={`drum-${clip.keyTrigger}`}>
        <audio id={clip.keyTrigger} className='clip'  src={clip.url} />
        {clip.keyTrigger}
      </div>
    )
}

export default Pad