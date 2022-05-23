module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3944F7",
          secondary: "#a600ff",
          accent: "#ffbd66",
          neutral: "#F3F4F6",
          "base-100": "#ffffff",
          info: "#98A8DD",
          success: "green",
          warning: "#ffcc00",
          error: "red",
        },
      },
      {
        dark: {
          primary: "#1B98F5",
          secondary: "#e4b3ff",
          accent: "#FFEDD5",
          neutral: "#4B5563",
          "base-100": "#1F2937",
          info: "#98A8DD",
          success: "#80ffce",
          warning: "#ffe066",
          error: "#ff8080",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
