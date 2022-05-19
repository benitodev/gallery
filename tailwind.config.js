module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      mainTitle: "#eeeeeeb0;",
      transparency: "#00000080",
      menu: "#383535ba",
      slate100: "#f3f4f4",
      white: "#fff",
      transparentWhite: "#ffffffeb",
      gray50: "#808080",
      lightGray: "rgb(209 209 209 / 87%)",
      mainColor: "#232a34",
      black: "rgb(22 22 22 / 21%)",
      modal: "rgb(22 21 21 / 86%)",
      red: "#f24949",
    },
    extend: {
      width: {
        "--w-75": "75%",
      },
      zIndex: {
        "-1": "-1",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://images.pexels.com/photos/2665112/pexels-photo-2665112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      },
    },
    gridTemplateColumns: {
      photos: "repeat(auto-fit, minmax(160px, 1fr))",
    },
    gridAutoRows: {
      photos: "210px",
    },
  },
  plugins: [],
};
