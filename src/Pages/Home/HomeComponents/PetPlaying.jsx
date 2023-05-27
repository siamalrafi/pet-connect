import Lottie from "lottie-react";
import Animation from "../../../assets/Animation/PetPlay.json";
import { FaCat } from "react-icons/fa";

const PetPlaying = () => {
   return (
      <div>
         <section className="my-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10">
               <div className="flex items-center">
                  <Lottie className="w-96" animationData={Animation} loop={true} />
               </div>

               <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                  <h1 className="text-4xl flex font-bold text-sky-600 leading-none">
                     <FaCat /> <span className="mx-5">Pets Playing</span>
                  </h1>
                  <div className="mt-5">
                     <div className="my-3">
                        <h1 className="text-2xl font-semibold text-sky-600">Accumsan</h1>
                        <p className="text-slate-400">Id tellus, eleifend venenatis ultrices elementum morbi malesuada lacus. Dignissim arcu, at lectus in velit scelerisque.</p>
                     </div>

                     <div className="my-3">
                        <h1 className="text-2xl font-semibold text-sky-600">Orci Ut Cras Etiam</h1>
                        <p className="text-slate-400">Adipiscing consequat quam sed ut proin consequat, tellus nec, ac. Nisi quis arcu nibh sit nibh. Porta suspendisse sed in nibh.</p>
                     </div>

                     <div className="my-3">
                        <h1 className="text-2xl font-semibold text-sky-600">Volutpat Nisi Pellentesque</h1>
                        <p className="text-slate-400">Non nisl lobortis id sit a scelerisque molestie. Et aliquet rhoncus adipiscing consectetur mattis vulputate. Lorem ut amet ac.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default PetPlaying;
