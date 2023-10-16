/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        overlay: "rgba(0, 0, 0, 0.411)",
        bl1: "rgba(23, 23, 23, 0.974)",
        bl2: " #4d4d4d8a",
        btn1: "rgb(255, 64, 64)",
      },
      gridTemplateColumns: {
        gall: "0.7fr 0.3fr",
      },
      backgroundImage: {
        gra1: "radial-gradient(circle,rgba(0, 0, 0, 0.1) 10%,rgba(0, 0, 0, 0.8) 100%)",
        wl: "radial-gradient(circle,rgba(0, 0, 0, 0.55) 0%,rgba(0, 0, 0, 0.55) 100%), url('/welcome.jpg')",
        featured:
          "url('https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/thalapathy-vijay-leo-tamil-poster-out-203320658-16x9.jpg?VersionId=be5LnvEqRvSA8OfSA8xD15TN_mLDkF0p')",
      },
      animation: {
        ring1: "rotate1 linear infinite 1s",
        ring2: "rotate2 linear infinite 1s",
        scrollGal: "scroll 10s linear infinite",
      },
      keyframes: {
        rotate1: {
          " 0%": {
            transform: "rotateX(35deg) rotateY(42deg) rotateZ(0deg)",
          },
          "100%": {
            transform: " rotateX(35deg) rotateY(42deg) rotateZ(360deg)",
          },
        },
        rotate2: {
          "0%": {
            transform: "rotateX(35deg) rotateY(140deg) rotateZ(0deg)",
          },
          "100%": {
            transform: "rotateX(35deg) rotateY(140deg) rotateZ(360deg)",
          },
        },
        scroll: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
