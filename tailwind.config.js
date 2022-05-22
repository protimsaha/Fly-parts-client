module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#FFEDD5",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#5775d9",
          success: "#1BBB70",
          warning: "#fdff00",
          error: "#FA5C5C",
        },
      }
    ]
  },

  plugins: [require("daisyui")],
}