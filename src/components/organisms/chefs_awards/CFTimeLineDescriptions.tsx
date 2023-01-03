import { Box } from '@mui/material'

import Slide2 from '../../../assets/chef_awards/slides/slide2.png'
import Slide3 from '../../../assets/chef_awards/slides/slide3.png'
import Slide4 from '../../../assets/chef_awards/slides/slide4.png'
import Slide5 from '../../../assets/chef_awards/slides/slide5.png'
import Slide6 from '../../../assets/chef_awards/slides/slide6.png'
import Slide7 from '../../../assets/chef_awards/slides/slide7.png'
import Slide8 from '../../../assets/chef_awards/slides/slide8.png'
import Slide9 from '../../../assets/chef_awards/slides/slide9.png'
import Slide10 from '../../../assets/chef_awards/slides/slide10.png'
import Slide11 from '../../../assets/chef_awards/slides/slide11.png'

export const CFTimeLineDescriptions = () => {
  return (
    <Box className='cursor-pointer '>
      <img
        src={Slide2}
        alt='slide_2'
        id='cf_arrivals'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
      <img
        src={Slide3}
        alt='slide_3'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
      <img
        src={Slide4}
        alt='slide_4'
        id='cf_welcome_drink'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
      <img
        src={Slide5}
        alt='slide_5'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
      <img
        src={Slide6}
        alt='slide_6'
        id='cf_dinner'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
      <img
        src={Slide7}
        alt='slide_7'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
      <img
        src={Slide8}
        alt='slide_8'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
      <img
        src={Slide9}
        alt='slide_9'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
      <img
        src={Slide10}
        alt='slide_10'
        id='cf_party'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
      <img
        src={Slide11}
        alt='slide_11'
        className='hover:scale-125 transition-transform hover:-ml-16'
      />
    </Box>
  )
}
