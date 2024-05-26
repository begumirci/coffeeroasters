import Banner from '../components/Banner';
import Commitment from '../components/Commitment';

import Headquerters from '../components/Headquerters';
import Quality from '../components/Quality';
import aboutus from '../images/aboutus.jpg';
import tabletimg from '../images/Bitmapabouttablet.jpg';
import mainimg from '../images/banner2.jpg';

export default function AboutUs() {
  return (
    <div className='container'>
      <Banner
        title={'About Us'}
        description={
          'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'
        }
        image={aboutus}
        tabletimg={tabletimg}
        mainimg={mainimg}
      />
      <Commitment />
      <Quality />
      <Headquerters />
    </div>
  );
}
