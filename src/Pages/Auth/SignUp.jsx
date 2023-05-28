import React from "react";
import Lottie from "lottie-react";
import loginAnimataion from "../../assets/Animation/LoginAnimaion.json";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
   const handleSubmit = (event) => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      const userInfo = {
         name,
         email,
         password,
      };

      fetch("http://localhost:5000/api/v1/users/signup", {
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
               const token = data?.result?.token;
               localStorage.setItem("token", token);
               toast.success(`${data?.result?.user?.name}, You signed up.`);
            }
         });
   };

   return (
      <div className="my-28">
         <h1 className="text-5xl font-bold mt-16 text-center text-cyan-900">Sign Up Here</h1>
         <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="flex items-center ">
               <Lottie className="w-96 ml-28" animationData={loginAnimataion} loop={true} />
            </div>

            <form onSubmit={handleSubmit}>
               <div className="grid grid-cols-1">
                  <div className="mt-8">
                     <label className="label">
                        <span className="label-text">What is your name?</span>
                     </label>
                     <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-primary w-full max-w-xs " />
                  </div>
                  <div className="">
                     <label className="label">
                        <span className="label-text"> Your Email?</span>
                     </label>
                     <input name="email" type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs " />
                  </div>
                  <div className="">
                     <label className="label">
                        <span className="label-text"> Your password?</span>
                     </label>
                     <input type="text" name="password" placeholder="Your Password" className="input input-bordered input-primary w-full max-w-xs " />
                  </div>
               </div>
               <p className="font-normal text-sm ">
                  {" "}
                  Already Have an Account?
                  <Link className="underline" to="/login">
                     {" "}
                     Click here
                  </Link>{" "}
               </p>
               <button type="submit" className="text-sm mt-6  w-1/2 mx-auto border-b-2  btn btn-primary ">
                  <Link>Sign Up</Link>
               </button>
            </form>
         </div>
      </div>
   );
};

export default SignUp;
