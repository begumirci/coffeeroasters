import Banner from '../components/Banner';
import CreateCoffe from '../components/CreateCoffe';

import Order from '../components/Order';
import tabletimg from '../images/Bitmapsubstablet.jpg';
import { SubWork } from '../components/Works';
import img from '../images/subs.jpg';
import mainimg from '../images/banner3.png';
import AllCreate from '../components/AllCreate';

export default function Subscribe() {
  return (
    <div className='container'>
      <Banner
        title={'Create a plan'}
        description={
          'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
        }
        tabletimg={tabletimg}
        image={img}
        mainimg={mainimg}
      />
      <SubWork />
      <AllCreate />
    </div>
  );
}
