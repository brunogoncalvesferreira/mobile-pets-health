/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        title: "Rubik_700Bold",
        subtitle: "Rubik_600SemiBold",
        base: "Rubik_400Regular",
      }
    },
  },
  plugins: [],
}

