import React, { useContext } from "react";
import Hero from "./Hero";
import Services from "./Services";
import Grooming from "./HomeComponents/Grooming";
import PetGoods from "./HomeComponents/PetGoods";
import Discount from "./HomeComponents/Discount";
import Adaption from "./HomeComponents/Adaption";
import Veterinary from "./HomeComponents/Veterinary";
import PetPlaying from "./HomeComponents/PetPlaying";
import { CONTEXT } from "../../Context/MainContext";

const Home = () => {
   const { name } = useContext(CONTEXT);

   console.log(name, "nmae9049093409");

   return (
      <div>
         <Hero />
         <Services />
         <Grooming />
         <PetGoods />
         <Discount />
         <PetPlaying />
         <Veterinary />
         <Adaption />
      </div>
   );
};

export default Home;
