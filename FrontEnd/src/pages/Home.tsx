import pix from "../assets/sneaker16.png";
import pix1 from "../assets/sneaker4.png";
import pix2 from "../assets/sneaker7.png";
import pix3 from "../assets/sneakers1.jpg";
import pix4 from "../assets/sneakers2.jpg";
import pix5 from "../assets/sneaker14.png";
import pix6 from "../assets/sneaker13.png";
import pix7 from "../assets/sneaker17.png";
import pix8 from "../assets/sneaker18.png";
import pix9 from "../assets/sneaker13.jpg";
import pix10 from "../assets/sneaker15.jpg";
import pix11 from "../assets/sneaker9.png";
import { IoFlashSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <div className="w-full  h-full">
        <div className="w-full h-[20vh] flex items-center justify-center flex-col">
          <h1 className="font-bold text-[40px]">SHOOZ</h1>
          <button className="w-[20%] h-[20%] bg-[#d6ff37]">
            There’s One for Everyone
          </button>
        </div>
        <div className="w-full h-[50vh] bg-slate-50 flex justify-between">
          <div className="w-[27%] h-full bg-slate-200">
            <img src={pix} alt="img" className="w-full h-full  " />
          </div>
          <div className="w-[45%] h-full bg-slate-200">
            <img src={pix1} alt="img" className="w-full h-full" />
          </div>
          <div className="w-[27%] h-full bg-slate-200">
            <img src={pix2} alt="img" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full h-[15vh] flex items-center justify-center">
          <h1 className="font-bold text-[30px]">New Drops</h1>
        </div>
        <div className="w-full h-[55vh]  flex items-center justify-center ">
          <div className="w-[87%] h-full flex justify-between">
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img
                  src={pix3}
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-semibold">Dunk</p>
                <p className="font-semibold">$150</p>
              </div>
            </div>
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix4} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-semibold">Air max</p>
                <p className="font-semibold">$90</p>
              </div>
            </div>
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix5} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-semibold">Air force 1</p>
                <p className="font-semibold">$300</p>
              </div>
            </div>
            <div className="w-[23%] h-full">
              <div className="w-full h-[85%]">
                <img src={pix6} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-semibold">cortez</p>
                <p className="font-semibold">$100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[55vh] flex items-center justify-center mt-3">
          <div className="w-[87%] h-full flex justify-between">
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix7} alt="" className="w-full h-full object-cover" />
                <div className="w-[10%] h-[10%] "></div>
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-semibold">Blazer</p>
                <p className="font-semibold">$175</p>
              </div>
            </div>
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix8} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-semibold">Dunk</p>
                <p className="font-semibold">$85</p>
              </div>
            </div>
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix9} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-semibold">Air force 1</p>
                <p className="font-semibold">$65</p>
              </div>
            </div>
            <div className="w-[23%] h-full">
              <div className="w-full h-[85%]">
                <img
                  src={pix10}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-semibold">Air max</p>
                <p className="font-semibold">$115</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[13vh]  flex items-center justify-center">
          <button className="w-[120px] h-[27%] bg-black text-[#d6ff37] font-light text-[12px] text-center hover:bg-slate-700 transition-all duration-300">
            Shop New
          </button>
        </div>
        <div className="w-full h-[65vh]  flex justify-between">
          <div className="w-[60%] h-full bg-[#ecffa5] flex items-center justify-center">
            <div className="w-[60%] h-[60%] ">
              <span className="flex justify-center mb-2">
                <IoFlashSharp className="w-[10%] h-[10%] " />
              </span>
              <p className="font-light text-center">SALE IS ON!</p>
              <h1 className="font-black text-[70px] text-center">25% OFF</h1>
              <p className="text-center font-light">
                25% off sitewide using TEES25 at checkout
              </p>
            </div>
          </div>
          <div className="w-[40%] h-full">
            <img src={pix11} alt="img" className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="w-full h-[15vh]  flex items-center justify-center gap-7">
          <span className="">
            <FaLongArrowAltRight className="w-[50px] h-[80px]" />
          </span>
          <h1 className="font-black text-[30px] underline">
            GET 10% OFF YOUR FIRST ORDER!
          </h1>
          <span>
            <FaLongArrowAltLeft className="w-[50px] h-[80px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
