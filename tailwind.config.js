/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#146C94",
               secondary: "#19A7CE",
               accent: "#AFD3E2",
               neutral: "#F6F1F1",
               "base-100": "#ffffff",
            },
         },
      ],
   },
   plugins: [require("daisyui")],
};
