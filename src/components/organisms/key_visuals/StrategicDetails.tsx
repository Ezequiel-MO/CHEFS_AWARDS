import { Paper } from '@mui/material'
import ConceptMontage from '../../../assets/key_visuals/mosaic.jpg'
import ColorPalette from '../../../assets/key_visuals/new_palette.jpg'
import CommonBackground from '../../../assets/key_visuals/common_background.jpg'
import TraditionalBackground from '../../../assets/key_visuals/trad_background.jpg'
import ModernBackground from '../../../assets/key_visuals/modern_background.jpg'
import CFMenu from '../../../assets/key_visuals/cf_menu.jpg'
import CFMenu2 from '../../../assets/key_visuals/cf_menu_2.jpg'
import ADMenu from '../../../assets/key_visuals/ad_cocktail_menu.jpg'

export const StrategicDetails = () => {
  return (
    <Paper elevation={0} className='p-5 max-w-[900px]'>
      <h1 className='uppercase text-center text-xl font-bold my-5'>
        The TRENCADÍS as a concept
      </h1>
      <div className='grid grid-cols-1'>
        <p className='indent-5'>
          Based on Valencia as the centrepiece, we have created a cloud of
          concepts that define the city, its tradition, its culture, its
          architecture and the events that will take place around the World's 50
          Best Restaurants awards gala. ​ ​ Each concept is a piece of tile,
          with its own unique characteristics, which by itself does not work,
          but together they make sense and will form a beautiful work of art of
          TRENCADIS.​ ​
        </p>
        <div className='my-5'>
          <img src={ConceptMontage} alt='montage' />
        </div>
        <p className='indent-5'>
          But the individual pieces do not form the work of art, they need
          someone to organise them so that their shapes fit together and the
          glue that binds all the pieces into one. That is{' '}
          <strong> CUTT/events</strong>: the organisation and coordination of
          the different pieces to obtain an excellent master piece.
        </p>
      </div>
      <h1 className='uppercase text-center text-xl font-bold my-5'>
        Valencian Colours
      </h1>
      <p className='indent-5'>
        Extracting the essence of Valencia We have created a color palette, a
        set of colors that have been harmoniously selected to be used for a
        common purpose: Evoke the azahar blossom scent of the orange trees, the
        sea, the blue sky, the gastronomy, the unique architecture of the{' '}
        <strong>City of Arts and Sciences</strong>
        ...​
      </p>
      <div className='my-5'>
        <img src={ColorPalette} alt='palette' />
      </div>
      <h1 className='uppercase text-center text-xl font-bold my-5'>
        Some Sample Designs based on the TRENCADÍS concept
      </h1>
      <p className='indent-5'>
        Based on all these premises, we would like to propose some ideas or
        guidelines for the design of printed menu items, banners, etc. as well
        as some decorative elements.
      </p>
      <ol>
        <li>
          <strong> Common trencadis</strong>
          ... this pattern can be used for those materials common to both
          events, as the trencadis reflects the traditional and avant-garde
          colours, unifying them into one.
        </li>
        <div>
          <img src={CommonBackground} alt='common background pattern' />
        </div>
        <li>
          <strong>Traditional trencadis</strong>
          ... this pattern can be used for those materials related to the
          traditional event, as the trencadis reflects the traditional colours
          of the city. It suggests the orange fields, the land, Valencia's sun
          ...
        </li>
        <div>
          <img
            src={TraditionalBackground}
            alt='traditional background pattern'
          />
        </div>
        <li>
          <strong>Avant-garde trencadis</strong>
          ... this pattern can be used for those materials related to the Dinner
          Awards event, as the trencadis reflects the avant-garde colours of the
          city. It suggests the sea, the sky, the architecture of the City of
          Arts and Sciences ...
        </li>
        <div>
          <img src={ModernBackground} alt='modern background pattern' />
        </div>
        <li>
          <strong>Sample Menu Covers</strong>
          ... here's a few sample menus for both events, which can be used as a
          guide for the design of the printed menu items.
        </li>
        <div className='grid grid-cols-2'>
          <div>
            <img src={CFMenu} alt='chef feast menu' />
          </div>
          <div>
            <img src={CFMenu2} alt='chef feast menu 2' />
          </div>
          <div>
            <img src={ADMenu} alt='avant-garde dinner awards menu' />
          </div>
          <div>
            <img src={ADMenu} alt='avant-garde dinner awards menu' />
          </div>
        </div>
      </ol>
    </Paper>
  )
}
