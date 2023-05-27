import PetGoodsCards from "./PetGoodsCards";

const PetGoods = () => {
   return (
      <div>
       
         <h1 className="flex justify-center text-3xl ">Our Goods for Your Pets</h1>

         <div className="flex justify-center my-3">
            <ul className="flex">
               <li>
                  <a className="mx-5 cursor-pointer hover:border-b text-sky-500 border-blue-600">Dogs</a>
               </li>
               <li>
                  <a className="mx-5 cursor-pointer hover:border-b text-sky-500 border-blue-600">Cats</a>
               </li>
               <li>
                  <a className="mx-5 cursor-pointer hover:border-b text-sky-500 border-blue-600">Fish</a>
               </li>
               <li>
                  <a className="mx-5 cursor-pointer hover:border-b text-sky-500 border-blue-600">Small Pets</a>
               </li>
            </ul>
         </div>

         <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-5">
            <PetGoodsCards />
            <PetGoodsCards />
            <PetGoodsCards />
            <PetGoodsCards />
         </div>
      </div>
   );
};

export default PetGoods;
