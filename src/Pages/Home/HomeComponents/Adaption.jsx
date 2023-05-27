import React from "react";
import Lottie from "lottie-react";
import groomingAnimation from "../../../assets/Animation/Aduption.json";
import { FaDog } from "react-icons/fa";

const Adaption = () => {
   return (
      <div>
         <div className=" bg-sky-50 rounded-lg ">
            <div className="flex items-center justify-center">
               <FaDog className="text-5xl gap-4 text-sky-600 "></FaDog>
               <h1 className="text-5xl text-cyan-900 font-bold my-16 text-center">Adaption</h1>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 grid-cols-1 ">
               <div className="grid  grid-cols-1  p-10 rounded">
                  <div>
                     <h3 className="font-bold text-sky-600 text-2xl text-center">Aliquam</h3>
                     <p className="text-center text-stone-400">Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
                  </div>
                  <div>
                     <h3 className="font-bold text-sky-600 text-2xl text-center">Ipsum Fringilla</h3>
                     <p className="text-center text-stone-400">Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
                  </div>
                  <div>
                     <h3 className="font-bold text-sky-600 text-2xl text-center">Ultricies</h3>
                     <p className="text-center text-stone-400">Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
                  </div>
                  <div></div>
               </div>
               {/* lottie  */}
               <div className="flex items-center ">
                  <Lottie className="w-96 ml-28" animationData={groomingAnimation} loop={true} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Adaption;
