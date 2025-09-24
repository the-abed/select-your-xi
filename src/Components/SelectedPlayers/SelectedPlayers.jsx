import React from 'react';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';


const SelectedPlayers = ({chosenPlayer,removePlayer}) => {
   console.log(chosenPlayer);

    return (
        <div>
            {
                chosenPlayer.map(player => <SelectedPlayer removePlayer={removePlayer} player={player} key={player.id}></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;