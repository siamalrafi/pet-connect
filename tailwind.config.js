/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#54303f",
               secondary: "#282c4c",
               accent: "#313a4d",
               neutral: "#3d4451",
               "base-100": "#ffffff",
            },
         },
      ],
   },
   plugins: [require("daisyui")],
};
