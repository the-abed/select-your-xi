import React, { use } from "react";
import Player from "../Player/Player";


const AvailablePlayers = ({ PlayersPromise,setAvailableBL,availableBL }) => {
  const playersData = use(PlayersPromise);

  // {
  //     "image": "https://i.ibb.co.com/36H62Yr/Boult.jpg",
  //     "name": "Trent Boult",
  //     "country": "New Zealand",
  //     "role": "Bowler",
  //     "battingStyle": "Right-hand bat",
  //     "bowlingStyle": "Left-arm fast-medium",
  //     "rating": 89,
  //     "price": 1400000
  //   }

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 ">
      {playersData.map((player) => <Player availableBL={availableBL} setAvailableBL={setAvailableBL} player={player}></Player>)}
    </div>

  );
};

export default AvailablePlayers;
