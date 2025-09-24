import React from 'react';
import recycleBin from '../../assets/Recycle-bin.png'

const SelectedPlayer = ({player,removePlayer}) => {
    console.log(player);
    const handleRemove =()=>{
        removePlayer(player);
    }
    return (
        <div>
            <div className='flex justify-between items-center p-3 mt-5 border-2 border-gray-100 rounded-xl'>
                
                <div className="left flex gap-5 items-center">
                    <div><img className='w-[50px] h-[50px] rounded-lg' src={player.image} alt="" /></div>
                    <div>
                        <h4 className='font-bold '>{player.name} </h4>
                        <p className='text-xs my-1 text-gray-500'>{player.role} </p>
                    </div>
                </div>
                <div onClick={handleRemove} className="right">
                    <img src={recycleBin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayer;