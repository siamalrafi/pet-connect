import { BsEyeFill, BsFillSuitHeartFill } from "react-icons/bs";

const PetGoodsCards = () => {
   return (
      <div className="border border-sky-100 group">
         <a href="#" className="block rounded-lg shadow-sm shadow-indigo-100">
            <div >
               <img alt="Home" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="h-56 w-full object-cover" />
            </div>

            <div className="mt-2 p-4">
               <dl>
                  <div>
                     <dt className="">Price</dt>

                     <dd className="text-sm text-gray-500">$240,000</dd>
                  </div>

                  <div>
                     <dt className="">Address</dt>

                     <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                  </div>
               </dl>

               <div className="mt-6 flex justify-between items-center gap-8 text-xs lg:px-0 md:px-4 sm:px-5">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                     <svg className="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                     </svg>

                     <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Parking</p>

                        <p className="font-medium">2 spaces</p>
                     </div>
                  </div>

                  <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                     <svg className="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                     </svg>

                     <div className="mt-1.5 sm:mt-0">
                        <p className="text-gray-500">Bathroom</p>

                        <p className="font-medium">2 rooms</p>
                     </div>
                  </div>
               </div>
            </div>
         </a>
      </div>
   );
};

export default PetGoodsCards;
