import { BsFillHouseHeartFill, BsFillLightningChargeFill } from "react-icons/bs";
import { FaCat, FaHospitalAlt, FaHotel, FaRegPaperPlane, FaUnsplash } from "react-icons/fa";
import { SiVlcmediaplayer } from "react-icons/si";
import { GiSeatedMouse } from "react-icons/gi";
import { TbRibbonHealth } from "react-icons/tb";
import Title from "../Extra/Title";

const Services = () => {
   return (
      <div>
         <Title title={"Our Services"}></Title> 

         
         <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-8 justify-center ">
            <div className="mt-7">
               <FaCat className="text-4xl w-full mx-auto text-sky-600 " />

               <h3 className="font-bold  text-lg text-center ">Grooming</h3>
            </div>
            <div className="mt-7">
               <FaHotel className="text-4xl w-full mx-auto text-sky-600" />

               <h3 className="font-bold  text-lg text-center ">Pet's Hotel</h3>
            </div>
            <div className="mt-7">
               <FaHospitalAlt className="text-4xl w-full mx-auto text-sky-600" />

               <h3 className="font-bold  text-lg text-center ">Pet's Care</h3>
            </div>
            <div className="mt-7">
               <FaRegPaperPlane className="text-4xl w-full mx-auto text-sky-600" />

               <h3 className="font-bold  text-lg text-center ">Play Zone</h3>
            </div>
            <div className="mt-7">
               <FaUnsplash className="text-4xl w-full mx-auto text-sky-600" />

               <h3 className="font-bold  text-lg text-center ">Adaption</h3>
            </div>
            <div className="mt-7">
               <TbRibbonHealth className="text-4xl w-full mx-auto text-sky-600" />

               <h3 className="font-bold  text-lg text-center ">Veterinary</h3>
            </div>
         </div>
      </div>
   );
};

export default Services;
