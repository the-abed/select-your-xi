import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import Player from "./Components/Player/Player";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";


const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const PlayersPromise = fetchPlayers();

function App() {
  
  const [toggle, setToggle] = useState(true);
  const [availableBL, setAvailableBL] = useState(60000000)
  const [chosenPlayer,setChosenPlayer] = useState([]);

  const removePlayer = (p) =>{
    const filterData = chosenPlayer.filter(player => player.name !== p.name)
    console.log(p)
    setChosenPlayer(filterData);
    setAvailableBL(availableBL + p.price)
  }
  // console.log(chosenPlayer);

  

  return (
    <>
     <div className="w-[1200px] mx-auto mb-80">
       <Navbar availableBL={availableBL}></Navbar>
      <Banner></Banner>
  
      <div className="flex justify-between items-center mt-8">
        <h1 className="font-bold text-xl ">{toggle?"Available Players":`Selected Players(${chosenPlayer.length}/6)`}</h1>
        <div className="border-gray-300 border-1 rounded-lg">
          <button onClick={()=> setToggle(true)} className={`btn ${toggle === true ? "bg-[#E7FE29]": ""}`}>Available</button>
          <button onClick={()=> setToggle(false)} className={`btn ${toggle === false ? "bg-[#E7FE29]": ""}`}>
            Selected <span>{chosenPlayer.length}</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense fallback={<h2>Loading</h2>}>
          <AvailablePlayers key={Player.id} chosenPlayer={chosenPlayer} setChosenPlayer={setChosenPlayer} availableBL={availableBL}  setAvailableBL={setAvailableBL} PlayersPromise={PlayersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers chosenPlayer={chosenPlayer} removePlayer={removePlayer}></SelectedPlayers>
      )}

      
     </div>
     <Subscribe></Subscribe>

      <Footer></Footer>
  
     
    </>
  );
}

export default App;
