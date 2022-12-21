/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      med_blue: '#28a7b6',
      med_blue_light: '#8cd4d3',
      med_sand: '#d4ad44',
      med_brown: '#a16e2f',
      med_orange: '#de5b00',
      med_green: '#5d6e28',
      med_red: '#a32c2c',
      med_purple: '#070c32',
      med_white: '#ffffff'
    },
    extend: {
      backgroundImage: {
        main: "url('./assets/background_images/home_bg.jpg')",
        chef_feast: "url('./assets/background_images/chef_feast_bg.jpg')",
        dinner_awards: "url('./assets/background_images/dinner_awards_bg.jpg')"
      }
    }
  },
  plugins: []
}
