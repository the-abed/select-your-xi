import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Banner from "./Components/Banner/Banner";

import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import Player from "./Components/Player/Player";

const fetchPlayers = async () => {
  const res = await fetch("/public/players.json");
  return res.json();
};
const PlayersPromise = fetchPlayers();

function App() {
  
  const [toggle, setToggle] = useState(true);
  const [availableBL, setAvailableBL] = useState(6000000)

  

  return (
    <>
      <Navbar availableBL={availableBL}></Navbar>
      <Banner></Banner>

      <div className="flex justify-between items-center mt-8">
        <h1 className="font-bold text-xl ">Available Players</h1>
        <div className="border-gray-300 border-1 rounded-lg">
          <button onClick={()=> setToggle(true)} className={`btn ${toggle === true ? "bg-[#E7FE29]": ""}`}>Avaiable</button>
          <button onClick={()=> setToggle(false)} className={`btn ${toggle === false ? "bg-[#E7FE29]": ""}`}>
            Selected <span>{0}</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense fallback={<h2>Loading</h2>}>
          <AvailablePlayers availableBL={availableBL}  setAvailableBL={setAvailableBL} PlayersPromise={PlayersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
