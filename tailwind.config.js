/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "479.99px",
      sm: "767.99px",
      md: "991.99px",
      lg: "1999.99px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        suezOne: ["Suez One", "serif"],
      },
      colors: {
        mainBackground: "#F6F4F0",
        blueViolet: "#272443",
        redButton: "#DA392B",
        grey: "#7C7C7C",
      },
      backgroundImage: {
        hero: "url('../assets/images/banner.webp')",
        kipon: "url('../assets/images/kipon.jpg')",
        robotrix: "url('../assets/images/robotrix.jpg')",
        treasureBox: "url('../assets/images/treasure-box.jpg')",
        phone: "url('../assets/images/phone.png')",
        dragon: "url('../assets/images/dragon.jpg')",
        moonStars: "url('../assets/images/moon-stars.jpg')",
      },
      boxShadow: {
        shadowRed: "0 1px 4px rgba(255, 153, 153, 0.6)",
        galleryShadow: "7px 7px 10px rgba(218, 57, 43, 0.1) ",
      },
    },
  },
  plugins: [],
};
