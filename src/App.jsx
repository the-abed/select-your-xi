import "./App.css";
import navLogo from "./assets/logo.png";
import navCoin from "./assets/coin.png";
import bannerBG from './assets/bg-shadow.png'
import bannerPng from './assets/banner-main.png'


function App() {
  return (
    <>
    {/* navbar section  */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl">
            <img src={navLogo} alt="" />
          </a>
        </div>
        <div>
          <button className="flex items-center btn bg-transparent border-transparent">
            <span>6000000</span>
            <span className="flex items-center"> Coin </span>
            <img className="w-[20px] h-[20px]" src={navCoin} alt="" />
          </button>
        </div>
      </div>

      {/* banner section */}
      <div className="bg-cover bg-center rounded-xl  bg-black my-5" style={{backgroundImage: `url(${bannerBG})`}}>
      <div className="flex flex-col justify-center items-center space-y-4 p-10">
        <img src= {bannerPng} alt="" />
        <h2 className="md:text-3xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <p className="text-gray-300">Beyond Boundaries Beyond Limits</p>
        <button className="btn bg-[#E7FE29]">Claim Free Credit</button>
      </div>
        
      </div>
    </>
  );
}

export default App;
