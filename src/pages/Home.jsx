import { useContext } from 'react';
import Banner from '../components/Banner';
import Collections from '../components/Collections';
import CreatButton from '../components/CreateButton';

import Info from '../components/Info';
import { Works } from '../components/Works';
import image from '../images/banner.jpg';
import { myContext } from '../App';
import tabletimg from '../images/tabletbanner.jpg';
import mainimg from '../images/banner1.jpg';

export default function Home() {
  const data = useContext(myContext);

  console.log(data.isOpen);
  return (
    <>
      <div className='container'>
        <Banner
          title={'Great coffee made simple.'}
          description={
            'Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.'
          }
          tabletimg={tabletimg}
          image={image}
          mainimg={mainimg}
          btn={<CreatButton />}
        />
      </div>
      <Collections />
      <div className='container'>
        <Info />
        <Works />
      </div>
    </>
  );
}
