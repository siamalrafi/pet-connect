import { FaCat } from "react-icons/fa";

const Discount = () => {
   return (
      <div>
         <div className="flex items-center justify-center">
            <FaCat className="text-5xl gap-4 text-sky-600 mx-2"></FaCat>
            <h1 className="text-5xl text-cyan-900 font-bold my-16 text-center">Discount</h1>
         </div>

         {/* Resice the preview panel to check the responsiveness */}
         {/* Component Start */}
         <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
            {/* Tile 1 */}
            <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
               <div className="h-40 bg-gray-400 rounded-lg" style={{ backgroundImage: "url(https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg)", ackgroundRepeat: "no-repeat", backgroundAttachment: "cover", backgroundPosition: "center" }} />
               <div className="flex flex-col items-start mt-4">
                  <h4 className="text-xl font-semibold">Heading</h4>
                  <p className="text-sm">Some text about the thing that goes over a few lines.</p>
                  <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">
                     Click Here
                  </a>
               </div>
            </div>
            {/* Tile 2 */}
            <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
               <div className="h-40 bg-gray-400 rounded-lg" style={{ backgroundImage: "url(https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg)", ackgroundRepeat: "no-repeat", backgroundAttachment: "cover", backgroundPosition: "center" }} />
               <div className="flex flex-col items-start mt-4">
                  <h4 className="text-xl font-semibold">Heading</h4>
                  <p className="text-sm">Some text about the thing that goes over a few lines.</p>
                  <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">
                     Click Here
                  </a>
               </div>
            </div>
            {/* Tile 3 */}
            <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
               <div className="h-40 bg-gray-400 rounded-lg" style={{ backgroundImage: "url(https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg)", ackgroundRepeat: "no-repeat", backgroundAttachment: "cover", backgroundPosition: "center" }} />
               <div className="flex flex-col items-start mt-4">
                  <h4 className="text-xl font-semibold">Heading</h4>
                  <p className="text-sm">Some text about the thing that goes over a few lines.</p>
                  <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">
                     Click Here
                  </a>
               </div>
            </div>
            {/* Tile 4 */}
            <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
               <div className="h-40 bg-gray-400 rounded-lg" style={{ backgroundImage: "url(https://img.jakpost.net/c/2017/01/26/2017_01_26_20163_1485417604._large.jpg)", ackgroundRepeat: "no-repeat", backgroundAttachment: "cover", backgroundPosition: "center" }} />
               <div className="flex flex-col items-start mt-4">
                  <h4 className="text-xl font-semibold">Heading</h4>
                  <p className="text-sm">Some text about the thing that goes over a few lines.</p>
                  <a className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href="#">
                     Click Here
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Discount;
