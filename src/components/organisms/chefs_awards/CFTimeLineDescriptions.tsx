import { Box, Typography } from '@mui/material'

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
    <Box>
      <img src={Slide2} alt='slide_2' />
      <img src={Slide3} alt='slide_3' />
      <div id='cf_welcome_drink'>
        <img src={Slide4} alt='slide_4' />
      </div>
      <img src={Slide5} alt='slide_5' />
      <div id='cf_dinner'>
        <img src={Slide6} alt='slide_6' />
      </div>
      <img src={Slide7} alt='slide_7' />
      <img src={Slide8} alt='slide_8' />
      <img src={Slide9} alt='slide_9' />
      <div id='cf_party'>
        <img src={Slide10} alt='slide_10' />
      </div>
      <img src={Slide11} alt='slide_11' />
    </Box>
  )
}
