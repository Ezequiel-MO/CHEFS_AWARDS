/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('./assets/background_images/home_bg.jpg')",
        chef_feast: "url('./assets/background_images/chef_feast_bg.jpg')",
        dinner_awards: "url('./assets/background_images/dinner_awards_bg.jpg')"
      },
      colors: {
        med_blue: '#53a4d4',
        med_blue_light: '#00c6ee',
        med_sand: '#daa433',
        med_green: '#79811e',
        med_green_light: '#95c045'
      }
    }
  },
  plugins: []
}
