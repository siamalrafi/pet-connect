import React from "react";
import HeroPetImg from "../../assets/images/petforhero.jpg";

const Hero = () => {
   return (
      <div>
         <div className="flex items-center">
            <section
               className="w-full bg-cover bg-center py-80"
               style={{
                  paddingTop: "500px",
                  backgroundImage: `url("${HeroPetImg}")`,
               }}
            >
               <div className="container mx-auto text-center text-white">
                  <h1 className="text-5xl font-medium mb-6">Pet and People Together</h1>
                  <p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                  <a href="#" className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">
                     Demo
                  </a>
               </div>
            </section>
         </div>
      </div>
   );
};

export default Hero;
