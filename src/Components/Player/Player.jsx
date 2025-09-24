import React, { useState } from 'react';
import User from "../../assets/user 1.png";
import flag from "../../assets/Vector.png";

const Player = ({player,setAvailableBL,availableBL,chosenPlayer,setChosenPlayer}) => { 
    const [isSelected, setIsSelected] = useState(false)
    const {image,name,role,rating,battingStyle,bowlingStyle,price} = player;


    const handleSelected = ()=>{
        if(availableBL<price){
           alert("You do not have sufficient balance!");
            return;
        }
        if(chosenPlayer.length === 6){
          alert("You already selected 6 players");
          return;
        }
        setAvailableBL(availableBL-price);
        setChosenPlayer([...chosenPlayer,player]);
        
    }
   
    return (
        <div>
            <div className="card bg-base-100 w-96  shadow-sm mx-auto ">
          <figure className="p-5">
            <img className="rounded-lg h-56" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex gap-2">
              <img src={User} alt="" />
              <h2 className="card-title"> {name}</h2>
            </div>
            <div className="flex items-center justify-between border-b-1 border-gray-300">
              <div className="flex gap-4 mb-3">
                <img src={flag} alt="" />
                <p>{player.country} </p>
              </div>

              <div className="mb-3">
                <button className="btn text-gray-500">{role} </button>
              </div>
            </div>

            <div className="flex justify-between my-1">
              <h2 className="font-bold">Rating</h2>
              <div>
                <p>{rating}</p>
              </div>
            </div>
            <div className="flex justify-between items-center my-1">
              <h2 className="font-bold">{battingStyle}</h2>
              <div className="text-gray-500">
                <p>{bowlingStyle}</p>
              </div>
            </div>
            <div className="flex justify-between items-center my-1">
              <h2 className="font-bold">
                Price: $ <span>{price}</span>
              </h2>
              <div className="text-gray-500">
                <button onClick={()=>{
                    setIsSelected(true);
                    handleSelected();
                    
                }} className="btn text-gray-500 ">{isSelected?"Selected":"Choose"}</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Player;