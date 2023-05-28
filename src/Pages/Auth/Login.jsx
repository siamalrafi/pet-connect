import React, { useContext } from "react";
import Lottie from "lottie-react";
import loginAnimataion from "../../assets/Animation/LoginAnimaion.json";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CONTEXT } from "../../Context/MainContext";

const Login = () => {
   const { name, setUser } = useContext(CONTEXT);

   console.log("name from login", name);

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      const userInfo = {
         email,
         password,
      };

      fetch("http://localhost:5000/api/v1/users/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(userInfo),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data?.error) {
               toast.error(`${data.error}`);
            } else {
               const token = data.data?.token;
               console.log(data.data?.user);
               localStorage.setItem("token", token);
               setUser(data.data?.user);
            }
         });
   };

   return (
      <div className="my-28">
         <h1 className="text-5xl font-bold mt-16 text-center text-cyan-900 ">Log In Here</h1>
         <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            <div className="flex items-center ">
               <Lottie className="w-96 ml-28" animationData={loginAnimataion} loop={true} />
            </div>

            <form onSubmit={handleSubmit}>
               <div className="grid grid-cols-1">
                  <div className="mt-8">
                     <label className="label">
                        <span className="label-text"> Your Email?</span>
                     </label>
                     <input name="email" type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs " />
                  </div>
                  <div className="mt-1">
                     <label className="label">
                        <span className="label-text"> Your password?</span>
                     </label>
                     <input type="text" name="password" placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs " />
                  </div>
               </div>
               <p className="mt-1 font-normal text-sm">
                  Need Account{" "}
                  <Link className="underline" to="/signup">
                     Sign Up
                  </Link>
               </p>
               <button type="submit" className="text-sm mt-8  w-1/2 mx-auto border-b-2  btn btn-primary ">
                  Log In
               </button>
            </form>
         </div>
      </div>
   );
};

export default Login;
