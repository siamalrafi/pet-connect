import React from "react";
import Lottie from "lottie-react";
import groomingAnimation from "../../../assets/Animation/Veterinary.json";
import { FaDog, FaHospitalUser } from "react-icons/fa";


const Veterinary = () => {
   return (
      <div className=" bg-sky-50 rounded-lg ">
         <div className="flex items-center justify-center">
            <FaHospitalUser className="text-5xl gap-4 text-sky-600 "></FaHospitalUser>
            <h1 className="text-5xl text-cyan-900 font-bold my-16 text-center">Veterinary</h1>
         </div>
         <div className="grid lg:grid-cols-2 gap-10 grid-cols-1 ">
            <div className="grid  grid-cols-1  p-10 rounded">
               <div>
                  <h3 className="font-bold text-sky-600 text-2xl text-center">Dolor Risus</h3>
                  <p className="text-center text-stone-400">Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
               </div>
               <div>
                  <h3 className="font-bold text-sky-600 text-2xl text-center">Vel Nunc Mauris</h3>
                  <p className="text-center text-stone-400">Bath, nail trim, ear cleaning, paw & pad trim, sanitary trim, anal gland cleaning & more.</p>
               </div>
               <div>
                  <h3 className="font-bold text-sky-600 text-2xl text-center">Mauris Nunc</h3>
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
   );
};

export default Veterinary;
