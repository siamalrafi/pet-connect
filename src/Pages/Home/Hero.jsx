import React from "react";
import HeroPetImg from "../../assets/images/petforhero.jpg";
import Boy from "../../assets/images/boy.jpg";

const Hero = () => {
   return (
      <div>
         <div className="flex items-center">
            <section
               className="lg:w-full md:w-full bg-cover bg-center py-80  "
               style={{
                  paddingTop: "400px",
                  height: "100px",
                  backgroundImage: `url("${Boy}")`,
               }}
            >
               <div className="container mx-auto text-center">
                  <h1 className="text-5xl text-red-600">Pet and People Together</h1>
                  <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                  <a href="#" className="bg-indigo-500 py-4 px-12 rounded-full hover:bg-indigo-600">
                     Demo
                  </a>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Hero;
