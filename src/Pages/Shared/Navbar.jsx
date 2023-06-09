import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CONTEXT } from "../../Context/MainContext";
import { toast } from "react-toastify";

const Navbar = () => {
   const { user } = useContext(CONTEXT);
   const navigate = useNavigate();
   console.log("user", user);

   let [open, setOpen] = useState(false);

   const Links = [
      { name: "HOME", link: "/" },
      { name: "SERVICE", link: "/" },
      { name: "ABOUT", link: "/" },
      { name: "BLOG", link: "/" },
      { name: "CONTACT", link: "/" },
   ];

   const handleLogOut = () => {
      localStorage.removeItem("token");
      toast.success("You are logged out Successfully");
      navigate("/login");
   };
   return (
      <div>
         <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between  bg-gradient-to-r from-sky-200 to-sky-500 py-4 md:px-10 px-7">
               <div
                  className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
               >
                  <Link to="/">PetConnect</Link>
               </div>

               <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-2 cursor-pointer md:hidden">
                  {open ? (
                     <label htmlFor="my-modal-3" className="text-black font-bold absolute right-2 top-2">
                        ✕
                     </label>
                  ) : (
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block text-black w-10 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                     </svg>
                  )}
               </div>

               <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 bg-gradient-to-r from-sky-200 to-sky-500" : "top-[-490px]"}`}>
                  {Links.map((link) => (
                     <li key={link.name} className="md:ml-6 text-xl md:my-0 my-7">
                        <Link to={link.link} className=" hover:text-primary duration-500">
                           {link.name}
                        </Link>
                     </li>
                  ))}

                  {user ? (
                     <>
                        <button onClick={handleLogOut} className="btn text-red-600">
                           LogOut
                        </button>
                     </>
                  ) : (
                     <>
                        <Link to={"/login"}>
                           <button className="btn text-green-600">Login</button>
                        </Link>{" "}
                     </>
                  )}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
