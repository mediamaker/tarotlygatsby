import React from "react"

const AudioPlayer = () => {
    const player = <iframe title="The Court of Jibber Jabber player" src="https://anchor.fm/courtofjibberjabber/embed" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
    
    return (
        <div>
            {player}
        </div>
    )
    
}

export default AudioPlayer;